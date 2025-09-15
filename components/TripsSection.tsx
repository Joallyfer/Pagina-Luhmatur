'use client';

import Link from 'next/link';
import React, { useState } from 'react';

// 1. IMPORTANDO OS DADOS DO SEU FICHEIRO CENTRALIZADO
// Certifique-se que este caminho está correto
import { newOneDayTrips, multiDayTrips, internationalTrips, Viagem } from '@/lib/data/dadosviagens';

// --- COMPONENTE PRINCIPAL ---
export default function TripsSection() {
  // 2. OS DADOS DAS VIAGENS FORAM REMOVIDOS DAQUI E AGORA SÃO IMPORTADOS ACIMA

  const [currentOneDayPage, setCurrentOneDayPage] = useState(0);
  const [currentMultiDayPage, setCurrentMultiDayPage] = useState(0); 
  const [currentInternationalPage, setCurrentInternationalPage] = useState(0);

  const tripsPerPage = 3; 

  const getCurrentTrips = (trips: Viagem[], currentPage: number) => {
    const startIndex = currentPage * tripsPerPage;
    return trips.slice(startIndex, startIndex + tripsPerPage);
  };

  const getTotalPages = (trips: Viagem[]) => Math.ceil(trips.length / tripsPerPage);

  // --- CARD UNIFICADO PARA TODOS OS ROTEIROS ---
  const renderTripCardWithDates = (trip: Viagem, index: number) => {
    // O link do WhatsApp foi removido daqui, pois o botão terá outra função.

    return (
      <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between">
        <img 
          src={trip.imageFile}
          alt={trip.name}
          className="w-full h-48 object-cover object-center"
        />
        <div className="p-5 flex flex-col flex-grow">
          <h4 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{trip.name}</h4>
          <div className="flex-grow mb-4">
            <h5 className="text-sm font-semibold text-pink-600 mb-2">PRÓXIMAS DATAS:</h5>
            <ul className="space-y-1.5">
              {trip.dates.map((date: string, i: number) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <i className="ri-calendar-check-line text-pink-500 mr-2"></i>
                  <span>{date}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 3. BOTÃO ALTERADO PARA USAR <Link> E DIRECIONAR PARA A PÁGINA DE DETALHES */}
          <Link 
            href={`/viagens/${trip.slug}`}
            className="w-full text-center bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow hover:shadow-md"
          >
            Ver Detalhes do Roteiro
          </Link>

        </div>
      </div>
    );
  };

  // --- LÓGICA DO CARROSSEL (sem alterações) ---
  const renderCarousel = (
    trips: Viagem[], 
    currentPage: number, 
    setCurrentPage: (page: number) => void, 
    title: string,
    renderer: (trip: Viagem, index: number) => React.ReactNode 
  ) => {
    const totalPages = getTotalPages(trips);
    const currentTrips = getCurrentTrips(trips, currentPage);

    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-pink-600">{title}</h3>
          <div className="flex items-center space-x-4">
            {totalPages > 1 && (
              <span className="text-sm text-gray-600 hidden sm:inline">
                Página {currentPage + 1} de {totalPages}
              </span>
            )}
            <div className="flex space-x-2">
              <button 
                onClick={() => setCurrentPage(currentPage > 0 ? currentPage - 1 : totalPages - 1)}
                className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors w-10 h-10 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default"
                disabled={totalPages <= 1}
              >
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button 
                onClick={() => setCurrentPage((currentPage + 1) % totalPages)}
                className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors w-10 h-10 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default"
                disabled={totalPages <= 1}
              >
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {currentTrips.map((trip, index) => renderer(trip, currentPage * tripsPerPage + index))}
        </div>
        
        {totalPages > 1 && (
            <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    i === currentPage ? 'bg-pink-500' : 'bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label={`Ir para a página ${i + 1}`}
                />
            ))}
            </div>
        )}
      </div>
    );
  };

  return (
    <section id="viagens" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Nossas Aventuras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Destinos cuidadosamente selecionados para todos os tipos de viajantes
          </p>
        </div>

        <div className="space-y-16">
          {renderCarousel(newOneDayTrips, currentOneDayPage, setCurrentOneDayPage, "Roteiros Bate e Volta", renderTripCardWithDates)}
          {renderCarousel(multiDayTrips, currentMultiDayPage, setCurrentMultiDayPage, "Roteiros com Pernoite", renderTripCardWithDates)}
          {renderCarousel(internationalTrips, currentInternationalPage, setCurrentInternationalPage, "Viagens Internacionais", renderTripCardWithDates)}
        </div>
      </div>
    </section>
  );
}