'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, User, ShieldAlert } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

function parseMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    let content = line;
    const trimmed = line.trim();
    
    // Check if bullet point
    const isBullet = trimmed.startsWith('*') || trimmed.startsWith('-') || trimmed.startsWith('•');
    if (isBullet) {
      content = trimmed.replace(/^[\s*-•]+/, '');
    }

    // Parse bold text
    const parts = content.split('**');
    const renderedParts = parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="font-bold text-blue-950">{part}</strong>;
      }
      return part;
    });

    if (isBullet) {
      return (
        <li key={i} className="list-disc ml-4 my-1 pl-1 text-gray-700 font-sansation">
          {renderedParts}
        </li>
      );
    }

    if (trimmed === '') {
      return <div key={i} className="h-2" />;
    }

    return (
      <p key={i} className="my-1 text-gray-800 leading-relaxed font-sansation">
        {renderedParts}
      </p>
    );
  });
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Welcome message
    setMessages([
      {
        role: 'model',
        text: 'Hola, soy el asistente virtual del Dr. Andrés Pérez Nieto. Estoy aquí para resolver tus dudas sobre nuestros procedimientos faciales y corporales, cuidados pre y postoperatorios, o turismo médico. ¿Sobre qué te gustaría que charlemos?'
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
        Eres la asistente virtual médica del Dr. Andrés Pérez Nieto, cirujano plástico certificado en Bogotá, Colombia con 30 años de experiencia.
        
        INFORMACIÓN DEL DR. ANDRÉS PÉREZ NIETO:
        - 30 años de experiencia.
        - Formación destacada en EE.UU.: Fellow observer en cirugía estética facial en University of Illinois (Chicago) y Manhattan Eye & Ear Hospital (Nueva York).
        - Jefe de residentes de cirugía plástica en la Universidad Nacional de Colombia.
        - Miembro de número de la Sociedad Colombiana de Cirugía Plástica (SCCP) y de la ISAPS.
        - Desarrollador de la técnica "Lifting en Hamaca" (Hammock Lift) para un rejuvenecimiento cervical y mandibular natural.
        - Su enfoque está basado en la naturalidad quirúrgica, preservando la expresión y evitando rostros estirados artificiales (lo que él llama el "efecto acordeón").
        
        DIRECTRICES DE COMPORTAMIENTO:
        1. Tono: Cálido, honesto, extremadamente profesional y empático. Usa expresiones afables y cercanas (como ofrecer un "cafecito" o "tintico" virtual, o decir "mis queridas pacientes").
        2. Calificación del Lead: Durante la conversación, indaga sutilmente si el paciente escribe desde Colombia o el exterior (para turismo médico), qué procedimiento le interesa (explantación, lifting, blefaroplastia, rinoplastia, etc.) y si tiene alguna condición de salud previa.
        3. Cierre/Llamado a la Acción (CTA): Sin ser agresivo comercialmente, anima al paciente a dar el siguiente paso agendando una cita de valoración virtual o presencial a través de WhatsApp (+57 316 495 3755). Diles que allí su equipo coordinará todos los exámenes.
        4. Seguridad y Ética: Recuerda siempre que esta conversación es meramente educativa y orientativa, y que bajo ninguna circunstancia reemplaza una consulta médica presencial. No diagnostiques ni garantices resultados del 100%.
        5. Formato y Extensión: Estructura tus respuestas con saltos de línea claros, usando viñetas (* o -) para listas y negritas (**texto**) para destacar términos clave. Sé concisa y evita respuestas excesivamente largas que puedan aburrir al paciente o exceder el espacio de lectura.
      `;

      const response = await fetch(
        '/api/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: formattedContents,
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1500,
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
          onClick={() => setIsOpen(true)}
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
              onClick={() => setIsOpen(false)}
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
              href="https://wa.me/573164953755?text=Hola,%20me%20gustaria%20agendar%20una%20cita%20de%20valoracion"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs px-3 py-1.5 rounded-full font-bold border border-emerald-200 transition-colors flex items-center gap-1.5"
            >
              🟢 Agendar en WhatsApp
            </a>
            <button
              onClick={() => {
                setInputValue('¿Cuál es la técnica del lifting en hamaca?');
              }}
              className="bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs px-3 py-1.5 rounded-full border border-blue-100 transition-colors"
            >
              ¿Qué es el Lifting Hamaca?
            </button>
            <button
              onClick={() => {
                setInputValue('¿Cuáles son los síntomas del Síndrome de ASIA?');
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
