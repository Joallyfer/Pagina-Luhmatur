'use client';

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Planeje Sua Viagem Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato e comece a planejar sua próxima aventura
          </p>
        </div>

        {/* Layout de 2 colunas: Contato na esquerda, Mapa na direita */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Coluna 1: Bloco de Contatos e Redes Sociais */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <i className="ri-phone-line text-pink-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Telefone</div>
                    <a href="tel:+554135889114" className="text-gray-600 hover:text-pink-600 transition-colors">
                      (41) 3588-9114
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <i className="ri-whatsapp-line text-pink-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">WhatsApp</div>
                    <a href="https://wa.me/554135889114?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20viagens" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                      (41) 3588-9114
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <i className="ri-mail-line text-pink-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">E-mail</div>
                    <a href="mailto:luhmaturturismo@gmail.com" className="text-gray-600 hover:text-pink-600 transition-colors">
                      luhmaturturismo@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <i className="ri-map-pin-line text-pink-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Endereço</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=R.%20Jaime%20Rodrigues%20da%20Rocha%2C%20894%20-%20Cap%C3%A3o%20Raso%2C%20Curitiba%20-%20PR%2C%2081150-130" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                      R. Jaime Rodrigues da Rocha, 894 - Capão Raso, Curitiba - PR
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 👇 BOTÕES DAS REDES SOCIAIS DE VOLTA AQUI 👇 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Siga-nos nas Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/luhmaturturismo/" className="w-12 h-12 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-2xl flex items-center justify-center transition-all cursor-pointer">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a href="https://web.facebook.com/luhmatur/?locale=pt_BR&_rdc=1&_rdr" className="w-12 h-12 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-2xl flex items-center justify-center transition-all cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                               
              </div>
            </div>
          </div>

          {/* Coluna 2: Mapa Incorporado */}
          <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.76118223631!2d-49.30810162479429!3d-25.47959087752981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3b836410299%3A0x6273b53f47833074!2sR.%20Jaime%20Rodrigues%20da%20Rocha%2C%20894%20-%20Cap%C3%A3o%20Raso%2C%20Curitiba%20-%20PR%2C%2081150-130!5e0!3m2!1spt-BR!2sbr!4v1694200150311!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/554135889114?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20viagens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-colors cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl mr-2"></i>
            <span className="font-medium">Planeje a sua viagem agora!</span>
          </a>
        </div>
      </div>
    </section>
  );
}