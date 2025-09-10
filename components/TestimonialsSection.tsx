'use client';

// Importe o Link no topo do arquivo
import Link from 'next/link';

export default function TestimonialsSection() {
  // 1. Corrigi os caminhos para serem absolutos a partir da pasta 'public'
  // Garanta que suas imagens estejam em: public/img/provasocial/prova01.png, etc.
  const reviewImages = [
    "/img/provasocial/prova01.png",
    "/img/provasocial/prova02.png",
    "/img/provasocial/prova03.png",
    "/img/provasocial/prova04.png",
    "/img/provasocial/prova05.png",
    "/img/provasocial/prova06.png",
    "/img/provasocial/prova07.png",
    "/img/provasocial/prova08.png",
    "/img/provasocial/prova09.png"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experiências Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nossos clientes dizem sobre suas aventuras conosco
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {reviewImages.map((imageName, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md group border border-gray-100">
              <img 
                // 2. Corrigido o src para usar diretamente o caminho do array
                src={imageName} 
                alt={`Foto de avaliação de cliente ${index + 1}`}
                // 3. Classe de enquadramento alterada para 'object-contain'
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://wa.me/5541997910450?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20viagens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"

          >
            Seja o próximo a viver essa experiência!
          </a>
        </div>
      </div>
    </section>
  );
}