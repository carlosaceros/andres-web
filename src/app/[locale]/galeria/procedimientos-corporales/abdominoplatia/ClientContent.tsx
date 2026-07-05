"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Interfaces para TypeScript
interface ProcedureImage {
    before: string;
    after: string;
    view: string;
    patient: string;
    originalIndex?: number;
    description?: React.ReactNode;
}

export default function ClientContent() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
    const [currentPatientImages, setCurrentPatientImages] = useState<ProcedureImage[]>([]);

    const procedureImages: ProcedureImage[] = [
        {
            before: "/images/todos/Abdominoplastia/Paciente2FrenteDespues.webp",
            after: "/images/todos/Abdominoplastia/Paciente2FrenteDespues.webp",
            view: "Paciente 2 - Frontal",
            patient: "Paciente 2",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Mamoplastia de aumento</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente2LadoAntes.webp",
            after: "/images/todos/Abdominoplastia/Paciente2LadoDespues.webp",
            view: "Paciente 2 - Perfil",
            patient: "Paciente 2",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Mamoplastia de aumento</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente3Antes.webp",
            after: "/images/todos/Abdominoplastia/Paciente3Despues.webp",
            view: "Paciente 3 - Frontal",
            patient: "Paciente 3",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Pexia</li>
                        <li>Elevación de Senos</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente3LadoAntes.webp",
            after: "/images/todos/Abdominoplastia/Paciente3LadoDespues.webp",
            view: "Paciente 3 - Perfil",
            patient: "Paciente 3",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Pexia</li>
                        <li>Elevación de Senos</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/prepost1a.webp",
            after: "/images/todos/Abdominoplastia/prepost1b.webp",
            view: "Paciente 4 - Frontal",
            patient: "Paciente 4",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/prepost2a.webp",
            after: "/images/todos/Abdominoplastia/prepost2b.webp",
            view: "Paciente 4 - Lado",
            patient: "Paciente 4",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/prepost3a.webp",
            after: "/images/todos/Abdominoplastia/prepost3b.webp",
            view: "Paciente 4 - Lado",
            patient: "Paciente 4",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente5Antes.webp",
            after: "/images/todos/Abdominoplastia/Paciente5Despues.webp",
            view: "Paciente 5 - Frontal",
            patient: "Paciente 5",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Lipoescultura corporal</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente5LadoAntes.webp",
            after: "/images/todos/Abdominoplastia/Paciente5Despues.webp",
            view: "Paciente 5 - Lado",
            patient: "Paciente 5",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Lipoescultura corporal</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente6Antes.webp",
            after: "/images/todos/Abdominoplastia/Paciente6Despues.webp",
            view: "Paciente 6 - Frontal",
            patient: "Paciente 6",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Pexia</li>
                        <li>Elevacion de los senos</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente6frenteantes.webp",
            after: "/images/todos/Abdominoplastia/Paciente6LadoAntes.webp",
            view: "Paciente 6 - Frontal",
            patient: "Paciente 6",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Pexia</li>
                        <li>Elevacion de los senos</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente7FrenteAntes.webp",
            after: "/images/todos/Abdominoplastia/Paciente7FrenteDespues.webp",
            view: "Paciente 7 - Frontal",
            patient: "Paciente 7",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Mamoplastia de aumento</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente7Antes.webp",
            after: "/images/todos/Abdominoplastia/Paciente7Despues.webp",
            view: "Paciente 7 - Frontal",
            patient: "Paciente 7",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Mamoplastia de aumento</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente7LadoAntes.webp",
            after: "/images/todos/Abdominoplastia/Paciente7LadoDespues.webp",
            view: "Paciente 7 - Frontal",
            patient: "Paciente 7",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura</li>
                        <li>Mamoplastia de aumento</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente8FrenteAntes.webp",
            after: "/images/todos/Abdominoplastia/Paciente8FrenteDespues.webp",
            view: "Paciente 8 - Frontal",
            patient: "Paciente 8",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura corpora</li>
                    </ul>
                </div>
            )
        },
        {
            before: "/images/todos/Abdominoplastia/Paciente8LadoAntes.webp",
            after: "/images/todos/Abdominoplastia/Paciente8LadoDespues.webp",
            view: "Paciente 8 - Frontal",
            patient: "Paciente 8",
            description: (
                <div>
                    <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Abdominoplastia</li>
                        <li>Lipoescultura corporal</li>
                    </ul>
                </div>
            )
        },
    ];

    const groupedByPatient = procedureImages.reduce((acc: { [key: string]: ProcedureImage[] }, image, index) => {
        const patientName = image.patient;
        if (!acc[patientName]) {
            acc[patientName] = [];
        }
        acc[patientName].push({ ...image, originalIndex: index });
        return acc;
    }, {});

    const patientNames = Object.keys(groupedByPatient);

    useEffect(() => {
        if (patientNames.length > 0 && !selectedPatient) {
            const firstPatient = patientNames[0];
            setSelectedPatient(firstPatient);
            setCurrentPatientImages(groupedByPatient[firstPatient]);
        }
    }, [patientNames, selectedPatient, groupedByPatient]);

    const currentImagePair = selectedPatient && currentPatientImages.length > 0
        ? currentPatientImages[selectedImage] || currentPatientImages[0]
        : procedureImages[0] || { before: '', after: '', view: '', patient: '', description: '' };

    const selectPatient = (patientName: string) => {
        setSelectedPatient(patientName);
        setCurrentPatientImages(groupedByPatient[patientName]);
        setSelectedImage(0);
    };

    const goBack = () => {
        router.push('/galeria/procedimientos-corporales');
    };

    const scrollSlider = (direction: 'next' | 'prev') => {
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
            <div className="bg-gray-100 py-3 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={goBack}
                        className="flex items-center text-gray-600 hover:text-gray-800 text-sm"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Volver a Procedimientos Corporales
                    </button>
                    <div className="bg-gray-800 text-white px-4 py-2 rounded text-sm">
                        Abdominoplastia HD
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    <div className="lg:col-span-3">
                        <div className="rounded-lg overflow-hidden border">
                            <div className="grid grid-cols-2">
                                <div className="relative">
                                    <img
                                        src={currentImagePair.before}
                                        alt={`${currentImagePair.patient} - Antes`}
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            ANTES
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0">
                                        <div
                                            className="text-white p-4 rounded-b-lg"
                                            style={{ background: 'linear-gradient(to top, rgba(37, 99, 235, 0.85) 0%, rgba(59, 130, 246, 0.6) 40%, rgba(96, 165, 250, 0.3) 70%, rgba(0, 0, 0, 0) 100%)' }}
                                        >
                                            <p className="font-medium text-lg">{currentImagePair.view}</p>
                                            <p className="text-sm opacity-90">{currentImagePair.patient}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <img
                                        src={currentImagePair.after}
                                        alt={`${currentImagePair.patient} - Después`}
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            DESPUÉS
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0">
                                        <div
                                            className="text-white p-4 rounded-b-lg"
                                            style={{ background: 'linear-gradient(to top, rgba(8, 145, 178, 0.85) 0%, rgba(6, 182, 212, 0.6) 40%, rgba(34, 211, 238, 0.3) 70%, rgba(0, 0, 0, 0) 100%)' }}
                                        >
                                            <p className="font-medium text-lg">{currentImagePair.view}</p>
                                            <p className="text-sm opacity-90">Resultado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-3xl font-bold text-gray-800 mb-3">Abdominoplastia HD</h1>
                            <p className="text-xl text-gray-600 mb-3">{currentImagePair.patient}</p>
                            <div className="text-gray-700 text-lg mb-3">
                                {currentImagePair.description}
                            </div>
                            <p className="text-sm text-gray-500 italic">Los resultados individuales pueden variar.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Otras Vistas</h3>
                        {selectedPatient && currentPatientImages.length > 0 && (
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Vistas de {selectedPatient}:</h4>
                                <div className="space-y-3">
                                    {currentPatientImages.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`w-full bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 border-2 ${selectedImage === index ? 'border-blue-500 ring-1 ring-blue-200' : 'border-gray-200 hover:border-gray-300'}`}
                                        >
                                            <div className="grid grid-cols-2 gap-0.5">
                                                <div className="w-full h-24 relative">
                                                    <img src={image.before} alt={`${image.view} - Antes`} className="w-full h-full object-cover rounded-tl-lg" />
                                                    <div className="absolute top-1 left-1"><span className="text-white text-xs font-bold bg-blue-600 bg-opacity-90 px-1 py-0.5 rounded">A</span></div>
                                                </div>
                                                <div className="w-full h-24 relative">
                                                    <img src={image.after} alt={`${image.view} - Después`} className="w-full h-full object-cover rounded-tr-lg" />
                                                    <div className="absolute top-1 right-1"><span className="text-white text-xs font-bold bg-cyan-600 bg-opacity-90 px-1 py-0.5 rounded">D</span></div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {!selectedPatient && (
                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <p className="text-gray-500 text-sm">Selecciona un paciente del slider inferior para ver sus vistas</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <button onClick={() => scrollSlider('prev')} className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                        ← Anterior
                    </button>
                    <div className="text-sm text-gray-600">
                        {selectedPatient && currentPatientImages.length > 0
                            ? `Vista ${selectedImage + 1} de ${currentPatientImages.length} - ${selectedPatient}`
                            : `Imagen ${selectedImage + 1} de ${procedureImages.length}`
                        }
                    </div>
                    <button onClick={() => scrollSlider('next')} className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                        Siguiente →
                    </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Todos los Pacientes de Abdominoplastia HD</h2>
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
                                            <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border-2 w-32 ${selectedPatient === patientName ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
                                                <div className="grid grid-cols-2">
                                                    <div className="w-full h-40 relative"><img src={firstImage.before} alt="Antes" className="w-full h-full object-cover" /><div className="absolute top-1 left-1"><span className="text-white text-xs font-bold bg-blue-600 px-2 py-1 rounded">A</span></div></div>
                                                    <div className="w-full h-40 relative"><img src={firstImage.after} alt="Después" className="w-full h-full object-cover" /><div className="absolute top-1 right-1"><span className="text-white text-xs font-bold bg-cyan-600 px-2 py-1 rounded">D</span></div></div>
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
