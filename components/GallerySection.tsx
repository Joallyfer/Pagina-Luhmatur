'use client';
import Link from 'next/link';

export default function GallerySection() {
  // 1. Novos títulos e descrições baseados nas suas imagens reais
  const galleryImages = [
    { 
      title: "Roteiro Gramado e Canela", 
      description: "Nossos grupos aproveitando o charme da Serra Gaúcha.", 
      imageFile: "/img/fotosgrupos/grupo5.jpeg" 
    },
    { 
      title: "Aventura em Bonito", 
      description: "Explorando as águas cristalinas de um dos destinos mais incríveis do Brasil.", 
      imageFile: "/img/fotosgrupos/bonito.jpg" 
    },
    { 
      title: "Serra do Mar Paranaense", 
      description: "A beleza do pôr do sol no histórico passeio de trem para Morretes.", 
      imageFile: "/img/fotosgrupos/trem.jpeg" 
    },
    { 
      title: "Amizade e Boas Vistas", 
      description: "Celebrando a vida com amigos nos melhores destinos litorâneos.", 
      imageFile: "/img/fotosgrupos/grupo4.jpeg" 
    },
    { 
      title: "Conforto e Sabor", 
      description: "Começando o dia com um café da manhã completo nos melhores hotéis.", 
      imageFile: "/img/fotosgrupos/cafe.jpeg" 
    },
    { 
      title: "O Início da Aventura", 
      description: "Acompanhamento desde o aeroporto. O início de uma viagem inesquecível.", 
      imageFile: "/img/fotosgrupos/grupo1.jpeg" 
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Compartilhando Momentos Inesquecíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A beleza dos nossos destinos e a alegria dos nossos viajantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <img 
                src={item.imageFile}
                alt={item.title}
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}