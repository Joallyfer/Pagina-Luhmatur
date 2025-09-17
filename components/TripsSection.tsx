'use client';

import Link from 'next/link';
import React, { useState } from 'react';

// 1. IMPORTANDO OS DADOS DO SEU FICHEIRO CENTRALIZADO
import { newOneDayTrips, multiDayTrips, internationalTrips, Viagem } from '@/lib/data/dadosviagens';

// Datas que já estão esgotadas – devem ser idênticas ao que está em trip.dates
const soldOutDates: string[] = [
  "26 a 28 Set - Ametista do Sul 💎⛏️",
  "26 a 28 Set - Aparecida 💒📿",
  "11 Out - Octoberfest Blumenau 🍺🇩🇪",
  "11 Out - Maria Fumaça Rio Negrinho 🚂🏞️",
  "12 Out - Trem Morretes 🚞",
  "15 Out - Rio de Janeiro Bate e Volta 🌆",
  "15 Out - Barco Príncipe Esc. Ecológica, Angela e Agência ⛴️",
  "18 Out - Trem Morretes CMEI Gramado e Agência 🚞",
  "18 e 19 Out - São Paulo ⛪️ ✈️",
  "18 e 19 Out - Ilha do Mel 🏝️",
  "24 a 26 Out - Arraial do Cabo 🏝",
  "25 Out - Octoberfest Blumenau 🍺🇩🇪",
  "25 a 28 Out - Foz do Iguaçu ✈️",
  "26 Out - Cascanéia 🏖️",
  "26 e 27 Out - Camboriú e Beto Carrero",
  "29 Out a 2 Nov - Jalapão - TO 🏝",
  "1 e 2 Nov - Ilha do Mel 🏝️",
  "7 a 9 Nov - Aparecida FRET 🚐",
  "8 Nov - Beto Carrero Albert🎢",
  "8 Nov - Ilha do Mel CMEI Vera Cruz ll 🏝️",
  "12 a 18 Nov - Lençóis Maranhenses 🏝️✈️",
  "15 Nov - Recanto Saltinho 🌿🌅",
  "16 Nov - Trem Morretes Agência e Lika 🚞",
  "19 a 23 Nov - Vitória / Espírito Santo 🏖️✈️",
  "28 a 30 Nov - Foz do Iguaçu 🚌",
  "30 Nov - Trem Morretes 🚞",
  "6 e 7 Dez - Ilha do Mel CMEI Ordem🏝️",
  "6 Dez - La Dolce Vita CMEI Sônia, Balbina e Corbélia 🏨",
  "6 Dez - Ilha do Mel CMEI Olinda e Vó Nazareth🏝️",
  "6 Dez - Faz. Dona Francisca CMEI Teruko e Maestrina🐎",
  "6 Dez - Hotel Mata Atlântica CMEI Cajuru e Salomé Viegas 🏞️",
  "7 Dez - Hotel Mata Atlântica Agência, CMEI Ivo Ázua e Coqueiros 🏞️",
  "13 Dez - Ilha do Mel EM Pilarzinho🏝️",
  "13 Dez - Faz. Dona Francisca CMEI Santa Clara🐎",
  "13 Dez - Trem Morretes CMEI Porto Seguro 🚞",
  "14 Dez - Chácara Paraíso CMEIs Jihad, Arapongas, Sonho de Criança e Dorothi 🏩",
  "14 Dez - Nativa EcoResort CMEI Osternack, Olga Benário e N S Luz 🏨",
  "18 Dez - Cascanéia 🏖️",
  "19 Dez - La Dolce Vita CMEI Ferdt 🏨",
  "19 Dez - Chácara Paraíso CMEI Santa Efigênia, Nori e Califórnia 🏩",
  "27 Dez - Trem Morretes 🚞",
  "4 a 7 Jan - Capitólio 🌄",
  "9 a 11 Jan - Rio de Janeiro ✈️🌇",
  "12 a 14 Jan - Arraial do Cabo 🏝️✈️",
  "25 a 28 Jan - Foz do Iguaçu ✈️🏞️",
  "24 a 31 Jan - Cruzeiro MSC 8 Dias",
  "26 a 30 Jan - Cruzeiro MSC 5 Dias",
  "3 a 10 Fev - Salvador e Morro de São Paulo ✈️🏝️",
  "14 a 18 Fev - Bonito/MS Carnaval 🐟🤿🎭",
  "3 a 7 Jun - Buenos Aires Corpus Christi ✈️🇦🇷",
];

// --- COMPONENTE PRINCIPAL ---
export default function TripsSection() {
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
              {trip.dates.map((date: string, i: number) => {
                const isSoldOut = soldOutDates.includes(date);
                return (
                  <li key={i} className="flex items-center text-sm">
                    <i className="ri-calendar-check-line text-pink-500 mr-2"></i>
                    <span className={isSoldOut ? "font-bold text-red-600 line-through" : "text-gray-700"}>
                      {date}
                    </span>
                    {isSoldOut && (
                      <span className="ml-2 text-red-600 font-bold">
                        Não há vagas
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

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
