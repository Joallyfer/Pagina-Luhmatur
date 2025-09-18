'use client';

import Link from 'next/link';
import React, { useState } from 'react';

// 1) DADOS
import { newOneDayTrips, multiDayTrips, internationalTrips, Viagem } from '@/lib/data/dadosviagens';

/* 2) MAPA DE DATAS ESGOTADAS (por slug)
   -> Baseado exatamente na lista que você enviou.
   -> Use apenas a “parte da data” (antes de “ - …” ou “ (… )”).
*/
const soldOutByTrip: Record<string, string[]> = {
  // --- 1 dia ---
  'oktoberfest-blumenau': ['11 Out', '25 Out'],
  'maria-fumaca-rio-negrinho': ['11 Out'],
  'trem-morretes': ['12 Out', '30 Nov', '13 Dez', '27 Dez'], // “16 Nov” e “18 Out” não existem no seu dataset atual
  'rio-de-janeiro-bate-e-volta': ['15 Out'],
  'barco-principe': ['15 Out'],
  'cascaneia': ['26 Out', '18 Dez'],
  'caminho-do-vinho': [],
  'beto-carrero-world': ['8 Nov'], // “8 Set - FRET” não está na sua lista de esgotadas
  'ilha-do-mel': ['6 Dez', '13 Dez'], //  “8 Nov” não existe nas datas do 1-dia
  'fazenda-dona-francisca': ['6 Dez', '13 Dez'],
  'la-dolce-vita': ['6 Dez', '19 Dez'],
  'hotel-mata-atlantica': ['6 Dez', '7 Dez'],
  'chacara-paraiso': ['14 Dez', '19 Dez'],
  'nativa-ecoresort': ['14 Dez'],
  'recanto-saltinho': ['15 Nov'],
  // --- Com pernoite ---
  'ametista-do-sul-rs': ['26 a 28 Set'],
  'aparecida-sp': ['26 a 28 Set', '7 a 9 Nov'],
  'lencois-maranhenses-ma': ['12 a 18 Nov'],
  'jalapao-to': ['29 Out a 2 Nov'],
  'sao-paulo-sp': ['18 e 19 Out'],
  'arraial-do-cabo-rj': ['24 a 26 Out', '12 a 14 Jan'],
  'foz-do-iguacu-pr': ['25 a 28 Out', '28 a 30 Nov', '25 a 28 Jan'],
  'capitolio-mg': ['4 a 7 Jan'],
  'rio-de-janeiro-rj': ['9 a 11 Jan'],
  'cruzeiro-msc': ['24 a 31 Jan', '26 a 30 Jan'],
  'vitoria-espirito-santo': ['19 a 23 Nov'],
  'ilha-do-mel-pr': ['18 e 19 Out', '1 e 2 Nov', '6 e 7 Dez'],
  'termas-de-marcelino-sc': [], // não listada como esgotada
  'urubici-e-serra-do-rio-do-rastro-sc': [],
  'manaus-amazonas': [],
  'salvador-ba': [],
  'treze-tilias-sc': [],
  'termas-de-piratuba-sc': [],
  'salvador-e-morro-de-sao-paulo-ba': ['3 a 10 Fev'],
  'costao-do-santinho-sc-all-inclusive': [],
  'joao-pessoa-paraiba': [],
  'maceio-e-maragogi-al': [],
  // --- Internacionais ---
  'paris-franca': [],
  'buenos-aires-corpus-christi': ['3 a 7 Jun'],
  'bonito-ms-carnaval': ['14 a 18 Fev'],
};

/* 3) Helpers de normalização e checagem
   - Remove qualquer coisa após " - " ou " (", para comparar apenas a parte da data.
*/
function baseDatePart(s: string) {
  const cutDash = s.split(' - ')[0];
  const cutParen = cutDash.split(' (')[0];
  return cutParen.trim();
}

function isDateSoldOut(slug: string, dateLabel: string) {
  const list = soldOutByTrip[slug] || [];
  const normalized = baseDatePart(dateLabel);
  return list.some((d) => baseDatePart(d) === normalized);
}

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

  // 4) Card com marcação de esgotado
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
              {trip.dates.map((date, i) => {
                const soldOut = isDateSoldOut(trip.slug, date);
                return (
                  <li key={i} className="flex items-center text-sm">
                    <i className={`ri-calendar-check-line mr-2 ${soldOut ? 'text-red-600' : 'text-pink-500'}`}></i>

                    {/* Data com estilo condicional */}
                    <span
                      className={soldOut ? 'text-red-600 font-extrabold line-through' : 'text-gray-700'}
                    >
                      {date}
                    </span>

                    {/* Selo “Não há vagas” */}
                    {soldOut && (
                      <span className="ml-2 text-red-600 font-semibold">
                        — Não há vagas
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

  // --- Carrossel (inalterado) ---
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
          {renderCarousel(newOneDayTrips, currentOneDayPage, setCurrentOneDayPage, 'Roteiros Bate e Volta', renderTripCardWithDates)}
          {renderCarousel(multiDayTrips, currentMultiDayPage, setCurrentMultiDayPage, 'Roteiros com Pernoite', renderTripCardWithDates)}
          {renderCarousel(internationalTrips, currentInternationalPage, setCurrentInternationalPage, 'Viagens Internacionais', renderTripCardWithDates)}
        </div>
      </div>
    </section>
  );
}
