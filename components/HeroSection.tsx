
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Breathtaking%20mountain%20landscape%20at%20sunset%20with%20serene%20lake%20reflecting%20mountains%2C%20dramatic%20sky%20with%20warm%20golden%20and%20purple%20colors%2C%20pristine%20wilderness%2C%20peaceful%20nature%20scene%2C%20majestic%20peaks%2C%20crystal%20clear%20water%20reflection%2C%20natural%20beauty%2C%20outdoor%20adventure%20destination%2C%20spectacular%20scenery%20for%20travel%20promotion&width=1920&height=1080&seq=hero-mountain-sunset&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-left relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Luhmatur: Sua Próxima
            <span className="block">Aventura Começa Aqui</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            Conectando você aos melhores destinos com segurança, conforto e experiências inesquecíveis. Há mais de 15 anos realizando sonhos de viagem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#viagens" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              Descubra Nossas Viagens
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
