'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6"> 
        <div className="grid md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <i className="ri-map-2-line text-white text-lg"></i>
              </div>
              <h3 className="font-['Pacifico'] text-xl text-pink-400">Luhmatur</h3>
            </div>
            <p className="text-gray-300 mb-4 break-words">
              Conectando você aos melhores destinos com segurança, conforto e experiências inesquecíveis há mais de 15 anos.
            </p>
            <div className="flex space-x-3 flex-wrap">
              <a
                href="https://web.facebook.com/luhmatur/?locale=pt_BR&_rdc=1&_rdr"
                className="w-8 h-8 bg-gray-700 hover:bg-pink-500 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/luhmaturturismo/"
                className="w-8 h-8 bg-gray-700 hover:bg-pink-500 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-sm"></i>
              </a>
            </div>
          </div>

          {/* Coluna 2: Nossas Viagens */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Nossas Viagens</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Excursões de 1 Dia</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Viagens Nacionais</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Viagens Internacionais</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Pacotes Personalizados</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Informações */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Informações</h4>
            <ul className="space-y-2">
              <li><Link href="#sobre" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Sobre Nós</Link></li>
              <li><Link href="#frota" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Nossa Frota</Link></li>
              <li><Link href="#galeria" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Galeria</Link></li>
              <li><Link href="#contato" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Contato</h4>
            <div className="space-y-3">
              {/* Telefone Clicável */}
              <div className="flex items-center">
                <i className="ri-phone-line text-pink-400 mr-2"></i>
                <a 
                  href="tel:+554135889114" 
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  (41) 3588-9114
                </a>
              </div>

              {/* WhatsApp Clicável */}
              <div className="flex items-center">
                <i className="ri-whatsapp-line text-pink-400 mr-2"></i>
                <a 
                  href="https://wa.me/5541997910450?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20viagens" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  (41) 99791-0450
                </a>
              </div>

              
              {/* E-mail Clicável */}
              <div className="flex items-center">
                <i className="ri-mail-line text-pink-400 mr-2"></i>
                <a 
                  href="mailto:luhmaturturismo@gmail.com?subject=Contato%20pelo%20Site%20Luhmatur" 
                  className="text-gray-300 hover:text-pink-400 transition-colors break-words"
                >
                  luhmaturturismo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 break-words">
            © 2025 Luhmatur - Todos os direitos reservados 
          </p>
        </div>
      </div>
    </footer>
  );
}
