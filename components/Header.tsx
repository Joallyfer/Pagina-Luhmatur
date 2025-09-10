'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  // Renomeado para 'open' para maior clareza, como no exemplo
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <h1 className="font-['Pacifico'] text-2xl text-pink-600">Luhmatur</h1>
            </Link>
          </div>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#sobre" className="text-black font-bold hover:text-pink-600 transition-colors">
              Sobre Nós
            </Link>
            <Link href="#viagens" className="text-black font-bold hover:text-pink-600 transition-colors">
              Nossas Viagens
            </Link>
            <Link href="#galeria" className="text-black font-bold hover:text-pink-600 transition-colors">
              Galeria
            </Link>
            <Link href="#frota" className="text-black font-bold hover:text-pink-600 transition-colors">
              Nossa Frota
            </Link>
            <Link href="#contato" className="text-black font-bold hover:text-pink-600 transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Desktop (some no mobile) */}
          <a 
            href="https://wa.me/5541997910450?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20viagens"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap"
          >
            <i className="ri-whatsapp-line mr-2"></i>
            Fale Conosco
          </a>

          {/* Botão Hambúrguer/Fechar (só para mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                // Ícone "X"
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                // Ícone "Hambúrguer"
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="container mx-auto px-6 py-4">
            <ul className="space-y-1">
              <li>
                <Link href="#sobre" className="block py-2 text-black font-semibold hover:text-pink-600" onClick={() => setOpen(false)}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#viagens" className="block py-2 text-black font-semibold hover:text-pink-600" onClick={() => setOpen(false)}>
                  Nossas Viagens
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="block py-2 text-black font-semibold hover:text-pink-600" onClick={() => setOpen(false)}>
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#frota" className="block py-2 text-black font-semibold hover:text-pink-600" onClick={() => setOpen(false)}>
                  Nossa Frota
                </Link>
              </li>
              <li>
                <Link href="#contato" className="block py-2 text-black font-semibold hover:text-pink-600" onClick={() => setOpen(false)}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}