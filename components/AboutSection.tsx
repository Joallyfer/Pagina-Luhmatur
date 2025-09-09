
'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [counts, setCounts] = useState({ years: 0, clients: 0, destinations: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { years: 15, clients: 5000, destinations: 200 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        destinations: Math.floor(targets.destinations * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <section id="sobre" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Nossa História
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Há mais de 15 anos, a <strong className="text-pink-600">Luhmatur</strong> tem sido sinônimo de aventura, 
                confiança e experiências memoráveis. Nascemos da paixão por conectar pessoas aos destinos 
                mais incríveis do Brasil e do mundo.
              </p>
              
              <p>
                Nossa missão é proporcionar experiências de viagem que transformam vidas, sempre priorizando 
                a segurança, o conforto e a satisfação dos nossos clientes. Cada roteiro é cuidadosamente 
                planejado para garantir momentos únicos e inesquecíveis.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-time-line text-pink-600 text-2xl"></i>
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-1">{counts.years}+</div>
                  <h3 className="font-semibold text-gray-800">Anos de Experiência</h3>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-user-heart-line text-pink-600 text-2xl"></i>
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-1">{counts.clients.toLocaleString()}+</div>
                  <h3 className="font-semibold text-gray-800">Clientes Satisfeitos</h3>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-map-pin-line text-pink-600 text-2xl"></i>
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-1">{counts.destinations}+</div>
                  <h3 className="font-semibold text-gray-800">Destinos Explorados</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="../img/sobrenos/sobrenos.jpeg"
              alt="Equipe Luhmatur"
              className="w-full rounded-lg shadow-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
