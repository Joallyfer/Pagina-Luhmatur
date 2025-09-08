
'use client';

export default function FleetSection() {
  return (
    <section id="frota" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Viaje com Conforto e Segurança
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa frota moderna garante uma experiência excepcional em cada viagem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Ônibus de Última Geração</h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossos veículos são equipados com a mais moderna tecnologia de 
              segurança e conforto. Cada ônibus passa por rigorosas inspeções e 
              manutenções preventivas, garantindo que sua viagem seja não apenas 
              confortável, mas também totalmente segura.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-shield-check-line text-pink-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Segurança Total</h4>
                  <p className="text-sm text-gray-600">Veículos revisados e com seguro completo</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-temp-cold-line text-pink-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Ar Condicionado</h4>
                  <p className="text-sm text-gray-600">Climatização individual para seu conforto</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-cake-3-line text-pink-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Lanche disponivel</h4>
                  <p className="text-sm text-gray-600">Lanches Deliciosos disponiveis na viagem de ida e de volta</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-sofa-line text-pink-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Poltronas Reclináveis</h4>
                  <p className="text-sm text-gray-600">Assentos ergonômicos e confortáveis</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-usb-line text-pink-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Carregadores USB</h4>
                  <p className="text-sm text-gray-600">Portas USB individuais em todos os assentos para sua comodidade.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-temp-cold-line text-pink-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Refrigeador</h4>
                  <p className="text-sm text-gray-600">Bebidas e alimentos sempre fresquinhos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="../img/Onibus/onibusrosa.jpeg"
              alt="Ônibus Executivo Luhmatur"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="../img/Onibus/onibusdourado.jpeg"
              alt="Interior do Ônibus"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Interior Projetado para Você</h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              O interior dos nossos ônibus foi pensado nos mínimos detalhes para 
              proporcionar o máximo conforto durante sua jornada. Espaço amplo, 
              iluminação adequada e todos os equipamentos necessários para que 
              você chegue ao destino descansado e feliz.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-award-line text-pink-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Certificações de Qualidade</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Todos os nossos veículos possuem certificações ANTT e seguem 
                rigorosamente as normas de segurança do transporte rodoviário brasileiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}