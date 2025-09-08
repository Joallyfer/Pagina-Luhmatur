
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
            <h1 className="font-['Pacifico'] text-2xl text-pink-600">Luhmatur</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
              <Link href="#sobre" className="text-black font-bold hover:text-pink-600 transition-colors cursor-pointer">
                Sobre Nós
              </Link>
              <Link href="#viagens" className="text-black font-bold hover:text-pink-600 transition-colors cursor-pointer">
                Nossas Viagens
              </Link>
              <Link href="#galeria" className="text-black font-bold hover:text-pink-600 transition-colors cursor-pointer">
                Galeria
              </Link>
              <Link href="#frota" className="text-black font-bold hover:text-pink-600 transition-colors cursor-pointer">
                Nossa Frota
              </Link>
              <Link href="#contato" className="text-black font-bold hover:text-pink-600 transition-colors cursor-pointer">
                Contato
              </Link>
            </nav>

         <a 
            href="https://wa.me/554135889114?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20viagens"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line mr-2"></i>
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}