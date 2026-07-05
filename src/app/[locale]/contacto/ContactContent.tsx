"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function ContactContent() {
    const t = useTranslations('contact_page');
    const t_footer = useTranslations('footer');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = t('validation_name_required');
        }

        if (!formData.email.trim()) {
            newErrors.email = t('validation_email_required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('validation_email_invalid');
        }

        if (!formData.message.trim()) {
            newErrors.message = t('validation_message_required');
        } else if (formData.message.trim().length < 10) {
            newErrors.message = t('validation_message_min');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // WhatsApp redirect con mensaje pre-llenado
        const whatsappMessage = `Hola! Mi nombre es ${formData.name}.
    
Email: ${formData.email}
${formData.phone ? `Teléfono: ${formData.phone}` : ''}
Asunto: ${formData.subject || 'Consulta general'}

Mensaje:
${formData.message}`;

        const whatsappUrl = `https://wa.me/573164953755?text=${encodeURIComponent(whatsappMessage)}`;

        // Simular envío y mostrar éxito
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            // Redirigir a WhatsApp después de 2 segundos
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                setShowSuccess(false);
            }, 2000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpiar error del campo al escribir
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section
                className="relative py-20 px-4 text-white text-center"
                style={{
                    background: 'linear-gradient(135deg, #1d3c5d 0%, #2d4c6d 100%)'
                }}
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('hero_title')}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100">
                        {t('hero_subtitle')}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Form Column */}
                        <div>
                            <div className="bg-white rounded-2xl shadow-2xl p-8">
                                <h2 className="text-3xl font-bold mb-2" style={{ color: '#1d3c5d' }}>
                                    {t('form_title')}
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    {t('form_subtitle')}
                                </p>

                                {/* Success Message */}
                                {showSuccess && (
                                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                                        <p className="font-semibold text-green-800">{t('success_title')}</p>
                                        <p className="text-green-700 text-sm">{t('success_message')}</p>
                                    </div>
                                )}

                                {/* Error Message */}
                                {showError && (
                                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                                        <p className="font-semibold text-red-800">{t('error_title')}</p>
                                        <p className="text-red-700 text-sm">{t('error_message')}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('form_name')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t('form_name_placeholder')}
                                            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('form_email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t('form_email_placeholder')}
                                            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('form_phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={t('form_phone_placeholder')}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('form_subject')}
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        >
                                            <option value="">{t('form_subject_placeholder')}</option>
                                            <option value="consultation">{t('subject_consultation')}</option>
                                            <option value="appointment">{t('subject_appointment')}</option>
                                            <option value="followup">{t('subject_followup')}</option>
                                            <option value="international">{t('subject_international')}</option>
                                            <option value="other">{t('subject_other')}</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('form_message')}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder={t('form_message_placeholder')}
                                            className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
                                        />
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 px-6 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        style={{ backgroundColor: '#1d3c5d' }}
                                    >
                                        {isSubmitting ? t('submitting') : t('submit_button')}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Info Column */}
                        <div className="space-y-8">
                            {/* Contact Info Card */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8">
                                <h2 className="text-2xl font-bold mb-6" style={{ color: '#1d3c5d' }}>
                                    {t('info_title')}
                                </h2>

                                <div className="space-y-6">
                                    {/* Phone */}
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1d3c5d20' }}>
                                                <Phone className="w-6 h-6" style={{ color: '#1d3c5d' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{t('phone_label')}</h3>
                                            <a href="tel:+576016299551" className="text-gray-600 hover:text-blue-600 transition-colors block">
                                                (+57) 601 629 9551
                                            </a>
                                            <a href="tel:+573164953755" className="text-gray-600 hover:text-blue-600 transition-colors block">
                                                (+57) 316 495 3755
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1d3c5d20' }}>
                                                <Mail className="w-6 h-6" style={{ color: '#1d3c5d' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{t('email_label')}</h3>
                                            <a href="mailto:info@drandrespereznieto.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                info@drandrespereznieto.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1d3c5d20' }}>
                                                <MapPin className="w-6 h-6" style={{ color: '#1d3c5d' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{t('address_label')}</h3>
                                            <p className="text-gray-600">
                                                Calle 119 # 7 – 14<br />
                                                Bogotá, Colombia
                                            </p>
                                        </div>
                                    </div>

                                    {/* Office Hours */}
                                    <div className="pt-4 border-t border-gray-200">
                                        <h3 className="font-semibold text-gray-900 mb-3">{t('office_hours')}</h3>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <p>{t('hours_weekdays')}</p>
                                            <p>{t('hours_saturday')}</p>
                                            <p>{t('hours_sunday')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8">
                                <h3 className="text-xl font-bold mb-4" style={{ color: '#1d3c5d' }}>
                                    {t('social_title')}
                                </h3>
                                <div className="flex space-x-4 justify-center">
                                    <a
                                        href="https://wa.me/573164953755"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        style={{ backgroundColor: '#25D366' }}
                                        title="WhatsApp"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/drandresperezcirujano"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                        style={{ backgroundColor: '#1877F2' }}
                                        title="Facebook"
                                    >
                                        <Facebook size={24} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/drandresperezcirujano/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                        style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
                                        title="Instagram"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@dr.andresperez"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                        style={{ backgroundColor: '#FF0000' }}
                                        title="YouTube"
                                    >
                                        <Youtube size={24} />
                                    </a>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4" style={{ color: '#1d3c5d' }}>
                                        {t('map_title')}
                                    </h3>
                                </div>
                                <div className="relative w-full h-96">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.524577!2d-74.056!3d4.697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDEnNDkuMiJOIDc0wrAwMyczNi4wIlc!5e0!3m2!1sen!2sco!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1d3c5d' }}>
                        {t('cta_title')}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        {t('cta_subtitle')}
                    </p>
                    <a
                        href="https://wa.me/573164953755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        style={{ backgroundColor: '#25D366' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                        </svg>
                        <span>{t('cta_button')}</span>
                    </a>
                </div>
            </section>

            <Footer />
            <FloatingContactButton />
        </main>
    );
}
