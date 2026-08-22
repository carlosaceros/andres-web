'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, User, ShieldAlert } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface Message {
  role: 'user' | 'model';
  text: string;
}

function parseMarkdown(text: string) {
  if (!text) return null;
  
  // Split text by lines and clean empty trailing lines
  const rawLines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  const renderFormattedText = (rawText: string) => {
    // Process bold (**text**) and clean inline formatting
    const segments = rawText.split('**');
    return segments.map((seg, idx) => {
      if (idx % 2 === 1) {
        return <strong key={idx} className="font-bold text-blue-950">{seg}</strong>;
      }
      return seg;
    });
  };

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-2 space-y-1.5 pl-5 list-disc text-gray-700">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  rawLines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    // Check if line is a bullet item (*, -, •, or 1., 2.)
    const isBullet = /^(\*|-|•|\d+\.)\s+/.test(trimmed);

    if (isBullet) {
      const cleanContent = trimmed.replace(/^(\*|-|•|\d+\.)\s+/, '').trim();
      if (cleanContent) {
        currentList.push(
          <li key={`li-${index}`} className="text-gray-700 leading-snug pl-1">
            {renderFormattedText(cleanContent)}
          </li>
        );
      }
    } else {
      flushList();
      elements.push(
        <p key={`p-${index}`} className="my-2 text-gray-800 leading-relaxed">
          {renderFormattedText(trimmed)}
        </p>
      );
    }
  });

  flushList();
  return elements;
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef<string>('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize unique session ID
  useEffect(() => {
    if (!sessionIdRef.current) {
      sessionIdRef.current = 'session_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    }
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    trackEvent('chat_opened');
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    trackEvent('chat_closed');
  };

  useEffect(() => {
    // Welcome message
    setMessages([
      {
        role: 'model',
        text: '¡Hola! Soy la asistente médica del Dr. Andrés Pérez Nieto. Cuéntame, ¿qué procedimiento te interesa consultar o qué dudas tienes sobre tu caso?'
      }
    ]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    // Track user message in GA4
    trackEvent('chat_message_sent', {
      query_length: userText.length,
      query_preview: userText.slice(0, 100),
    });

    try {
      // Build the chat history for Gemini API
      const formattedContents = messages.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));
      
      // Append the latest user message
      formattedContents.push({
        role: 'user',
        parts: [{ text: userText }]
      });

      const systemPrompt = `
        Eres la asistente virtual médica del Dr. Andrés Pérez Nieto, cirujano plástico certificado en Bogotá, Colombia (Santa Ana Medical Center), con más de 30 años de experiencia y miembro de la SCCP e ISAPS.

        FILOSOFÍA Y ENFOQUE:
        - Especialista en rejuvenecimiento facial estructural y natural (Método Hamaca® y Deep Plane sub-SMAS), blefaroplastia de preservación grasa, lipofilling celular y explantación mamaria segura.
        - Enfoque: No estirar la piel (evitar aspecto operado o "efecto acordeón"), sino restaurar la arquitectura profunda.

        REGLAS DE RESPUESTA:
        1. CONCISIÓN Y FLUIDEZ: Responde de forma directa, cálida y profesional en 2 o 3 párrafos breves (máximo 120-140 palabras). Evita textos kilométricos o redundancias.
        2. TRANSPARENCIA EN PRECIOS Y VALOR DE LA CONSULTA:
           - Si preguntan por costos, da rangos aproximados reales en Bogotá para orientar al paciente:
             * Blefaroplastia: Aprox. $4.000.000 a $7.500.000 COP ($1.200 - $2.000 USD). Explica que en la consulta el Dr. Andrés evalúa si el exceso es solo piel o bolsas grasas profundas (para aplicar técnica de preservación grasa y evitar miradas hundidas).
             * Lifting Facial Hamaca / Deep Plane: Aprox. $20.000.000 a $32.000.000 COP ($5.500 - $8.500 USD). Explica que en la valoración se analiza el vector de suspensión del SMAS y la línea mandibular para un resultado 100% natural.
             * Lip Lift: Aprox. $4.000.000 a $6.000.000 COP ($1.000 - $1.500 USD).
             * Explantación Mamaria: Aprox. $14.000.000 a $24.000.000 COP ($3.500 - $6.000 USD).
        3. INVITACIÓN PRECISA A LA VALORACIÓN:
           - Siempre invita a un paso concreto: *"Para definir tu plan quirúrgico exacto y resolver todas tus dudas, te invito a agendar una valoración personalizada con el Dr. Andrés (presencial en Santa Ana Medical Center o virtual si estás fuera de Bogotá/Colombia) a través de WhatsApp (+57 316 495 3755)."*
        4. UNA SOLA PREGUNTA DE CIERRE: Termina con una sola pregunta breve y cercana (ej: "¿Te encuentras en Bogotá o nos escribes desde otra ciudad o país?").
      `;

      const response = await fetch(
        '/api/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            geminiPayload: {
              contents: formattedContents,
              systemInstruction: {
                parts: [{ text: systemPrompt }]
              },
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1500,
              }
            },
            metadata: {
              sessionId: sessionIdRef.current,
              pageUrl: typeof window !== 'undefined' ? window.location.pathname : '/',
              userMessage: userText,
              locale: 'es',
            }
          }),
        }
      );

      const data = await response.json();
      const modelText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Lo siento, he tenido un problema de conexión. ¿Podrías volver a preguntarme?';
      
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('Error fetching from Gemini API:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Disculpa, ocurrió un error en mi sistema. Puedes contactarnos directamente por WhatsApp para asistirte mejor.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sansation">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          className="relative group bg-gradient-to-tr from-blue-900 to-blue-950 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-blue-800"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <div className="absolute left-16 bg-white text-blue-950 px-4 py-2 rounded-2xl shadow-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-100 pointer-events-none">
            ¿Tienes dudas? ¡Pregúntame! 💬
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-4 text-white flex items-center justify-between border-b border-blue-950">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-prototype text-base font-normal leading-none mb-1">Dr. Andrés Pérez</h3>
                <span className="text-[10px] text-blue-200 tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Asistente Virtual IA
                </span>
              </div>
            </div>
            <button 
              onClick={handleCloseChat}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Warning Banner */}
          <div className="bg-amber-50 border-b border-amber-100 p-2.5 text-[11px] text-amber-800 flex gap-2 items-start">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="leading-tight">
              Esta IA brinda asesoría educativa. No reemplaza un diagnóstico ni una consulta con el Dr. Andrés Pérez.
            </p>
          </div>

          {/* Messages Body */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white ${msg.role === 'user' ? 'bg-blue-600' : 'bg-blue-900'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                </div>
                <div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-900 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
                    {msg.role === 'model' ? parseMarkdown(msg.text) : msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-blue-950 rounded-full animate-bounce animate-duration-1000" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-blue-950 rounded-full animate-bounce animate-duration-1000" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-blue-950 rounded-full animate-bounce animate-duration-1000" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick CTAs */}
          <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto scrollbar-none whitespace-nowrap">
            <a 
              href="https://wa.me/573164953755?text=Hola,%20me%20gustaria%20agendar%20una%20cita%20de%20valoracion%20con%20el%20Dr.%20Andres%20Perez"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('chat_whatsapp_click', {
                  source: 'chat_bottom_cta_button',
                  label: 'Agendar en WhatsApp',
                });
                // Log WhatsApp conversion to backend for Google Sheets
                fetch('/api/chat/log', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    sessionId: sessionIdRef.current,
                    pageUrl: typeof window !== 'undefined' ? window.location.pathname : '/',
                    userMessage: '🟢 [CONVERSIÓN]: Clic en botón de WhatsApp del Chat',
                    botReply: 'Transferido al WhatsApp del Dr. Andrés (+57 316 495 3755)',
                    locale: 'es',
                  }),
                }).catch(() => {});
              }}
              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs px-3 py-1.5 rounded-full font-bold border border-emerald-200 transition-colors flex items-center gap-1.5"
            >
              🟢 Agendar en WhatsApp
            </a>
            <button
              onClick={() => {
                const q = '¿Cuál es la técnica del lifting en hamaca?';
                trackEvent('chat_quick_faq_click', { question: q });
                setInputValue(q);
              }}
              className="bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs px-3 py-1.5 rounded-full border border-blue-100 transition-colors"
            >
              ¿Qué es el Lifting Hamaca?
            </button>
            <button
              onClick={() => {
                const q = '¿Cuáles son los síntomas del Síndrome de ASIA?';
                trackEvent('chat_quick_faq_click', { question: q });
                setInputValue(q);
              }}
              className="bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs px-3 py-1.5 rounded-full border border-blue-100 transition-colors"
            >
              Síntomas del ASIA
            </button>
          </div>

          {/* Form Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              className="flex-grow bg-slate-100 border border-transparent rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-all text-gray-800"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-blue-900 text-white p-2.5 rounded-full hover:bg-blue-950 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
