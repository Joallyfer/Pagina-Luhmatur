'use client';

import Link from 'next/link'; // Importar Link (embora não usado diretamente no card, é boa prática manter se houver links futuros)
import React, { useState } from 'react'; // Importar React e useState

// --- DADOS DAS VIAGENS ---

// --- VIAGENS DE 1 DIA (BATE E VOLTA) --- ATUALIZADO ---
const newOneDayTrips = [
  { 
    name: "Beto Carrero World 🎢", 
    imageFile: "/img/destinos/betocarrero.jpg", 
    dates: ["8 Set - FRET", "2 Nov", "8 Nov - Albert"]
  },
  { 
    name: "Ilha do Mel 🏝", 
    imageFile: "/img/destinos/ilhadomel.jpg", 
    dates: ["14 Set", "6 Dez - CMEI Olinda e Vó Nazareth", "13 Dez - EM Pilarzinho"]
  },
  { 
    name: "Octoberfest Blumenau 🍺", 
    imageFile: "/img/destinos/oktoberfest.webp",
    dates: ["11 Out", "25 Out"]
  },
  { 
    name: "Trem Morretes 🚞", 
    imageFile: "/img/destinos/trem_morretes.jpg",
    dates: ["12 Out", "30 Nov", "13 Dez - CMEI Porto Seguro", "27 Dez"]
  },
  { 
    name: "Chácara Paraíso 🏩", 
    imageFile: "/img/destinos/paraiso.jpeg", 
    dates: [
      "15 Out - CMEI Mª Amélia e Agência", 
      "14 Dez - CMEIs Jihad, Arapongas, Sonho de Criança e Dorothi", 
      "19 Dez - CMEI Santa Efigênia, Nori e Califórnia"
    ]
  },
  { 
    name: "Barco Príncipe ⛴", 
    imageFile: "/img/destinos/barco-principe.jpg",
    dates: ["15 Out - Esc. Ecológica, Angela e Agência", "10 Jan"]
  },
  { 
    name: "Cascanéia 🏖", 
    imageFile: "/img/destinos/cascaneia.jpg", 
    dates: ["25 Out", "26 Out", "18 Dez"]
  },
  { 
    name: "Fazenda Dona Francisca 🐎", 
    imageFile: "/img/destinos/donafrancisca.jpg", 
    dates: ["22 Nov", "6 Dez - CMEI Teruko e Maestrina", "13 Dez - CMEI Santa Clara"]
  },
  { 
    name: "La Dolce Vita 🏨", 
    imageFile: "/img/destinos/hotel-la-dolce-vita.jpg", 
    dates: ["6 Dez - CMEI Sônia, Balbina e Corbélia", "19 Dez - CMEI Ferdt"]
  },
  { 
    name: "Hotel Mata Atlântica 🏞", 
    imageFile: "/img/destinos/hotelmataatlantica.jpg", 
    dates: ["6 Dez - CMEI Cajuru e Salomé Viegas", "7 Dez - Agência, CMEI Ivo Ázua e Coqueiros"]
  },
  { 
    name: "Maria Fumaça Rio Negrinho 🚂🏞", 
    imageFile: "/img/destinos/mariafumacario.jpg", 
    dates: ["11 Out"]
  },
  { 
    name: "Rio de Janeiro Bate e Volta 🌆", 
    imageFile: "/img/destinos/riodejaneiro.jpeg", 
    dates: ["15 Out"]
  },
  { 
    name: "Caminho do Vinho 🍇🍷", 
    imageFile: "/img/destinos/caminhodovinho.jpg", 
    dates: ["1 Nov"]
  },
  { 
    name: "Capivari Ecoresort 🏩", 
    imageFile: "/img/destinos/capivari.jpg", 
    dates: ["9 Nov - CMEI Iodéia e Agência"]
  },
  { 
    name: "Recanto Saltinho 🌿🌅", 
    imageFile: "/img/destinos/saltinho.jpg", 
    dates: ["15 Nov"]
  },
  { 
    name: "Cânyon Guartelá 🌄", 
    imageFile: "/img/destinos/canion-guartela.jpg", 
    dates: ["15 Nov"]
  },
  { 
    name: "Tour Antonina e Morretes 🚌", 
    imageFile: "/img/destinos/antonina.jpg", 
    dates: ["23 Nov"]
  },
  { 
    name: "Nativa EcoResort 🏨", 
    imageFile: "/img/destinos/nativaresort.jpeg", 
    dates: ["14 Dez - CMEI Osternack, Olga Benário e N S Luz"]
  }
];

// --- ROTEIROS COM PERNOITE ---
const multiDayTrips = [
  { 
    name: "Bonito / MS - Carnaval", 
    imageFile: "/img/destinos/bonito.jpg", 
    dates: ["14 a 18 Fev"]
  },
  { 
    name: "Lençóis Maranhenses / MA", 
    imageFile: "/img/destinos/lencoismaranhenses.webp", 
    dates: ["12 a 18 Nov"]
  },
  { 
    name: "Rio de Janeiro / RJ", 
    imageFile: "/img/destinos/riodejaneiro.jpeg", 
    dates: ["9 a 11 Jan (Aéreo ✈)", "22 a 25 Jan (Rodoviário 🚎)", "27/02 a 01/03 (Rodoviário 🚎)"]
  },
  { 
    name: "Jalapão / TO", 
    imageFile: "/img/destinos/jalapao.jpg", 
    dates: ["29 Out a 2 Nov"]
  },
  { 
    name: "Jericoacoara / CE", 
    imageFile: "/img/destinos/jericoacara.jpg", 
    dates: ["21 a 24 Jan"]
  },
  { 
    name: "Capitólio / MG", 
    imageFile: "/img/destinos/capitolio.jpg", 
    dates: ["4 a 7 Jan"]
  },
  { 
    name: "Foz do Iguaçu / PR", 
    imageFile: "/img/destinos/fozdoiguacu.webp", 
    dates: ["25 a 28 Out (Aéreo ✈)", "28 a 30 Nov (Rodoviário 🚌)", "25 a 28 Jan (Aéreo ✈)"]
  },
  { 
    name: "Serras Gaúchas / RS - Natal Luz", 
    imageFile: "/img/destinos/natalluz.jpg", 
    dates: ["19 a 22 Dez", "29/01 a 01/02"]
  },
  { 
    name: "Aparecida / SP", 
    imageFile: "/img/destinos/aparecida.jpeg", 
    dates: ["26 a 28 Set", "7 a 9 Nov"]
  },
  { 
    name: "Cruzeiro MSC", 
    imageFile: "/img/destinos/cruzeiro.jpg", 
    dates: ["24 a 31 Jan (8 Dias)", "26 a 30 Jan (5 Dias)"]
  },
  { 
    name: "Ilha do Mel / PR", 
    imageFile: "/img/destinos/ilhadomel.jpg", 
    dates: ["14 e 15 Out", "18 e 19 Out", "1 e 2 Nov", "6 e 7 Dez", "12 a 14 Jan"]
  },
  { 
    name: "Termas de Marcelino / SC", 
    imageFile: "/img/destinos/termasmarcelino.jpg", 
    dates: ["5 a 8 Set"]
  },
  { 
    name: "Urubici e Serra do Rio do Rastro / SC", 
    imageFile: "/img/destinos/urubici.jpg", 
    dates: ["5 a 8 Set"]
  },
  { 
    name: "Manaus / Amazonas", 
    imageFile: "/img/destinos/amazonas.jpg", 
    dates: ["15 a 19 Set"]
  },
  { 
    name: "Salvador / BA", 
    imageFile: "/img/destinos/salvador.jpg", 
    dates: ["22 a 25 Set"]
  },
  { 
    name: "Ametista do Sul / RS", 
    imageFile: "/img/destinos/ametista.jpg", 
    dates: ["26 a 28 Set"]
  },
  { 
    name: "São Paulo / SP", 
    imageFile: "/img/destinos/saopaulo.jpg", 
    dates: ["18 e 19 Out"]
  },
  { 
    name: "Arraial do Cabo / RJ", 
    imageFile: "/img/destinos/arraialdocabo.jpg", 
    dates: ["24 a 26 Out", "12 a 14 Jan (Aéreo ✈)"]
  },
  { 
    name: "Camboriú e Beto Carrero / SC", 
    imageFile: "/img/destinos/camboriu.webp", 
    dates: ["26 e 27 Out"]
  },
  { 
    name: "Vitória / Espírito Santo", 
    imageFile: "/img/destinos/vitoria.webp", 
    dates: ["19 a 23 Nov"]
  },
  { 
    name: "Treze Tílias / SC", 
    imageFile: "/img/destinos/trezetilias.jpg", 
    dates: ["5 a 7 Jan"]
  },
  { 
    name: "Thermas de Piratuba / SC", 
    imageFile: "/img/destinos/termaspirituba.webp", 
    dates: ["16 a 18 Jan"]
  },
  { 
    name: "Salvador e Morro de São Paulo / BA", 
    imageFile: "/img/destinos/morrodesp.webp", 
    dates: ["3 a 10 Fev"]
  },
  { 
    name: "Costão do Santinho / SC - All Inclusive", 
    imageFile: "/img/destinos/costaosaltinho.jpg", 
    dates: ["19 a 21 Abr"]
  }
];

// --- VIAGENS INTERNACIONAIS ---
const internationalTrips = [
  { 
    name: "Paris / França", 
    imageFile: "/img/destinos/paris.png", // Substitua pelo caminho correto da imagem
    dates: ["14 a 22 Jan"]
  },
  { 
    name: "Buenos Aires Corpus Christi", 
    imageFile: "/img/destinos/buenosaires.jpeg", // Substitua pelo caminho correto da imagem
    dates: ["3 a 7 Jun"]
  }
];


// --- COMPONENTE PRINCIPAL ---
export default function TripsSection() {
  const [currentOneDayPage, setCurrentOneDayPage] = useState(0);
  const [currentMultiDayPage, setCurrentMultiDayPage] = useState(0); 
  const [currentInternationalPage, setCurrentInternationalPage] = useState(0);

  // Ajuste para mostrar 3 itens por página, pode ser alterado conforme necessário
  const tripsPerPage = 3; 

  const getCurrentTrips = (trips: any[], currentPage: number) => {
    const startIndex = currentPage * tripsPerPage;
    return trips.slice(startIndex, startIndex + tripsPerPage);
  };

  const getTotalPages = (trips: any[]) => Math.ceil(trips.length / tripsPerPage);

  // --- CARD UNIFICADO PARA TODOS OS ROTEIROS ---
  const renderTripCardWithDates = (trip: { name: string; imageFile: string; dates: string[] }, index: number) => {
    const whatsappLink = `https://wa.me/554135889114?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre a viagem para ${trip.name}!`)}`;

    return (
      <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                  {/* Ícone de calendário - certifique-se que a biblioteca de ícones (ex: Remix Icon) está instalada */}
                  <i className="ri-calendar-check-line text-pink-500 mr-2"></i>
                  <span>{date}</span>
                </li>
              ))}
            </ul>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow hover:shadow-md whitespace-nowrap"
          >
            Consultar Valores e Vagas
          </a>
        </div>
      </div>
    );
  };

  // --- LÓGICA DO CARROSSEL ---
  const renderCarousel = (
    trips: any[], 
    currentPage: number, 
    setCurrentPage: (page: number) => void, 
    title: string,
    renderer: (trip: any, index: number) => React.ReactNode 
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