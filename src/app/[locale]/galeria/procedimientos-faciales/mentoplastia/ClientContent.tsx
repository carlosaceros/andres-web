"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ClientContent({ procedureImages }) {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [currentPatientImages, setCurrentPatientImages] = useState([]);

    // Agrupar imágenes por paciente
    const groupedByPatient = procedureImages.reduce((acc, image, index) => {
        const patientName = image.patient;
        if (!acc[patientName]) {
            acc[patientName] = [];
        }
        acc[patientName].push({ ...image, originalIndex: index });
        return acc;
    }, {});

    const patientNames = Object.keys(groupedByPatient);

    // Inicializar con el primer paciente
    useEffect(() => {
        if (patientNames.length > 0 && !selectedPatient) {
            const firstPatient = patientNames[0];
            setSelectedPatient(firstPatient);
            setCurrentPatientImages(groupedByPatient[firstPatient]);
        }
    }, [patientNames, selectedPatient, groupedByPatient]);

    const currentImagePair = selectedPatient && currentPatientImages.length > 0
        ? currentPatientImages[selectedImage] || currentPatientImages[0]
        : procedureImages[0];

    const selectPatient = (patientName) => {
        setSelectedPatient(patientName);
        setCurrentPatientImages(groupedByPatient[patientName]);
        setSelectedImage(0);
    };

    const goBack = () => {
        router.push('/galeria');
    };

    const nextImage = () => {
        if (currentPatientImages.length > 0) {
            setSelectedImage((prev) =>
                prev >= currentPatientImages.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (currentPatientImages.length > 0) {
            setSelectedImage((prev) =>
                prev === 0 ? currentPatientImages.length - 1 : prev - 1
            );
        }
    };

    // Funciones para mover el slider de pacientes
    const scrollSlider = (direction) => {
        const slider = document.querySelector('.patient-slider');
        if (slider) {
            const scrollAmount = 150;
            slider.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Navegación superior */}
            <div className="bg-gray-100 py-3 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={goBack}
                        className="flex items-center text-gray-600 hover:text-gray-800 text-sm"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Volver a Galería
                    </button>

                    <div className="bg-gray-800 text-white px-4 py-2 rounded text-sm">
                        Mentoplastia
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Layout principal */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">

                    {/* Panel principal - 3 columnas */}
                    <div className="lg:col-span-3">
                        <div className="rounded-lg overflow-hidden border">
                            <div className="grid grid-cols-2">
                                {/* ANTES - Con imagen real */}
                                <div className="relative">
                                    <img
                                        src={currentImagePair.before}
                                        alt={`${currentImagePair.patient} - Antes`}
                                        className="w-full h-[500px] object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23e2e8f0'/%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='Arial' font-size='18' fill='%23334155'%3EANTES%3C/text%3E%3C/svg%3E`
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            ANTES
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0">
                                        <div
                                            className="text-white p-4 rounded-b-lg"
                                            style={{
                                                background: 'linear-gradient(to top, rgba(51, 65, 85, 0.85) 0%, rgba(71, 85, 105, 0.6) 40%, rgba(100, 116, 139, 0.3) 70%, rgba(0, 0, 0, 0) 100%)'
                                            }}
                                        >
                                            <p className="font-medium text-lg">{currentImagePair.view}</p>
                                            <p className="text-sm opacity-90">{currentImagePair.patient}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* DESPUÉS - Con imagen real */}
                                <div className="relative">
                                    <img
                                        src={currentImagePair.after}
                                        alt={`${currentImagePair.patient} - Después`}
                                        className="w-full h-[500px] object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f1f5f9'/%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='Arial' font-size='18' fill='%23475569'%3EDESPUÉS%3C/text%3E%3C/svg%3E`
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            DESPUÉS
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0">
                                        <div
                                            className="text-white p-4 rounded-b-lg"
                                            style={{
                                                background: 'linear-gradient(to top, rgba(71, 85, 105, 0.85) 0%, rgba(100, 116, 139, 0.6) 40%, rgba(148, 163, 184, 0.3) 70%, rgba(0, 0, 0, 0) 100%)'
                                            }}
                                        >
                                            <p className="font-medium text-lg">{currentImagePair.view}</p>
                                            <p className="text-sm opacity-90">Resultado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Información del procedimiento */}
                        <div className="mt-6">
                            <h1 className="text-3xl font-bold text-gray-800 mb-3">Mentoplastia</h1>
                            <p className="text-xl text-gray-600 mb-3">{currentImagePair.patient}</p>
                            <div className="text-gray-700 text-lg mb-3">
                                {currentImagePair.description}
                            </div>
                            <p className="text-sm text-gray-500 italic">Los resultados individuales pueden variar.</p>
                        </div>
                    </div>

                    {/* Panel "Otras Vistas" - 1 columna */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Otras Vistas</h3>

                        {/* Vistas del paciente seleccionado */}
                        {selectedPatient && currentPatientImages.length > 0 && (
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Vistas de {selectedPatient}:</h4>
                                <div className="space-y-3">
                                    {currentPatientImages.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`w-full bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 border-2 ${selectedImage === index ? 'border-slate-500 ring-1 ring-slate-200' : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="grid grid-cols-2 gap-0.5">
                                                <div className="w-full h-24 relative">
                                                    <img
                                                        src={image.before}
                                                        alt={`${image.view} - Antes`}
                                                        className="w-full h-full object-cover rounded-tl-lg"
                                                        onError={(e) => {
                                                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Crect width='60' height='96' fill='%23f3f4f6'/%3E%3Ctext x='30' y='48' text-anchor='middle' font-family='Arial' font-size='8' fill='%23666'%3EA%3C/text%3E%3C/svg%3E`
                                                        }}
                                                    />
                                                    <div className="absolute top-1 left-1">
                                                        <span className="text-white text-xs font-bold bg-slate-600 bg-opacity-90 px-1 py-0.5 rounded">A</span>
                                                    </div>
                                                </div>
                                                <div className="w-full h-24 relative">
                                                    <img
                                                        src={image.after}
                                                        alt={`${image.view} - Después`}
                                                        className="w-full h-full object-cover rounded-tr-lg"
                                                        onError={(e) => {
                                                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Crect width='60' height='96' fill='%23f3f4f6'/%3E%3Ctext x='30' y='48' text-anchor='middle' font-family='Arial' font-size='8' fill='%23666'%3ED%3C/text%3E%3C/svg%3E`
                                                        }}
                                                    />
                                                    <div className="absolute top-1 right-1">
                                                        <span className="text-white text-xs font-bold bg-gray-600 bg-opacity-90 px-1 py-0.5 rounded">D</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Mensaje cuando no hay paciente seleccionado */}
                        {!selectedPatient && (
                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <p className="text-gray-500 text-sm">Selecciona un paciente del slider inferior para ver sus vistas</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navegación entre imágenes */}
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => scrollSlider('prev')}
                        className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors"
                    >
                        ← Anterior
                    </button>
                    <div className="text-sm text-gray-600">
                        {selectedPatient && currentPatientImages.length > 0
                            ? `Vista ${selectedImage + 1} de ${currentPatientImages.length} - ${selectedPatient}`
                            : `Imagen ${selectedImage + 1} de ${procedureImages.length}`
                        }
                    </div>
                    <button
                        onClick={() => scrollSlider('next')}
                        className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors"
                    >
                        Siguiente →
                    </button>
                </div>

                {/* Slider horizontal de pacientes - SCROLL SIMPLE */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Todos los Pacientes de Mentoplastia</h2>
                    </div>

                    <div className="overflow-x-auto patient-slider">
                        <div className="flex space-x-2 pb-4">
                            {patientNames.map((patientName) => {
                                const patientImages = groupedByPatient[patientName];
                                const firstImage = patientImages[0];
                                return (
                                    <div key={patientName} className="flex-shrink-0">
                                        <div
                                            className={`cursor-pointer transition-all duration-200 ${selectedPatient === patientName ? 'transform scale-105' : 'hover:scale-102'}`}
                                            onClick={() => selectPatient(patientName)}
                                        >
                                            <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border-2 w-32 ${selectedPatient === patientName ? 'border-slate-500 ring-2 ring-slate-200' : 'border-gray-200'}`}>
                                                <div className="grid grid-cols-2">
                                                    <div className="w-full h-40 relative">
                                                        <img
                                                            src={firstImage.before}
                                                            alt="Antes"
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='160' viewBox='0 0 80 160'%3E%3Crect width='80' height='160' fill='%2364748b'/%3E%3Ctext x='40' y='80' text-anchor='middle' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EA%3C/text%3E%3C/svg%3E`
                                                            }}
                                                        />
                                                        <div className="absolute top-1 left-1">
                                                            <span className="text-white text-xs font-bold bg-slate-600 px-2 py-1 rounded">A</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-40 relative">
                                                        <img
                                                            src={firstImage.after}
                                                            alt="Después"
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='160' viewBox='0 0 80 160'%3E%3Crect width='80' height='160' fill='%236b7280'/%3E%3Ctext x='40' y='80' text-anchor='middle' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3ED%3C/text%3E%3C/svg%3E`
                                                            }}
                                                        />
                                                        <div className="absolute top-1 right-1">
                                                            <span className="text-white text-xs font-bold bg-gray-600 px-2 py-1 rounded">D</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-3 text-center">
                                                    <div className="text-sm font-medium text-gray-700 mb-1 truncate">{patientName}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
