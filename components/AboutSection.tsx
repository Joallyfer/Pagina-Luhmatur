'use client';

export default function AboutSection() {
  return (
    // A única alteração foi adicionar overflow-hidden aqui
    <section id="sobre" className="relative py-20 overflow-hidden">
      {/* Background decorativo que estava causando o problema */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gray-100 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem */}
          <div className="relative">
            <img 
              src="/img/fotos/equipe-luhmatur.jpeg" 
              alt="Equipe Luhmatur" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Coluna do Texto */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Mais de 15 Anos Realizando Sonhos
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              A Luhmatur nasceu da paixão por viajar e conectar pessoas a lugares incríveis. Desde 2009, nossa missão é proporcionar experiências únicas, com a segurança e o conforto que você e sua família merecem.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Somos especialistas em criar roteiros que vão além do convencional, seja em uma excursão de um dia ou em uma grande aventura nacional e internacional. Cada detalhe é pensado para que sua única preocupação seja aproveitar o momento.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <i className="ri-shield-check-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Segurança em Primeiro Lugar</h4>
                  <p className="text-gray-600">Nossa frota é moderna e nossos guias são experientes para garantir uma viagem tranquila.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <i className="ri-map-pin-heart-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Roteiros Exclusivos</h4>
                  <p className="text-gray-600">Criamos pacotes que atendem a todos os gostos e sonhos, sempre com um toque especial.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}