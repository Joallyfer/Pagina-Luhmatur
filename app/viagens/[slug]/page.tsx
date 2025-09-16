import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getViagemPeloSlug, todasAsViagens } from '@/lib/data/dadosviagens';

export function generateStaticParams() {
  return todasAsViagens.map((viagem) => ({
    slug: viagem.slug,
  }));
}

// ✅ CORREÇÃO APLICADA AQUI
export default async function PaginaViagem({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const viagem = getViagemPeloSlug(slug);

  if (!viagem) {
    notFound();
  }

  const whatsappLink = `https://wa.me/5541997910450?text=${encodeURIComponent(
    `Olá! Gostaria de mais informações sobre a viagem para ${viagem.name}.`
  )}`;

  return (
    <>
      <Header />
      <main className="pt-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            {viagem.name}
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* LADO ESQUERDO */}
            <div className="flex flex-col">
              {viagem.detalhes ? (
                <div className="bg-white p-8 rounded-2xl shadow-lg text-gray-700 flex-1 flex flex-col">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Roteiro
                  </h2>
                  <div
                    className="prose lg:prose-xl max-w-none"
                    dangerouslySetInnerHTML={{ __html: viagem.detalhes }}
                  />
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg text-gray-700 flex-1 flex flex-col">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Sobre este Roteiro
                  </h2>
                  <p className="text-lg">{viagem.description}</p>
                </div>
              )}
            </div>

            {/* LADO DIREITO */}
            <div className="flex flex-col gap-6">
              <Image
                src={viagem.imageFile}
                alt={`Imagem principal de ${viagem.name}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-3xl shadow-xl"
                priority
              />
              
              {viagem.detalhes && (
                <div className="bg-white p-6 rounded-2xl shadow-lg text-gray-700 flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Sobre este Roteiro
                  </h2>
                  <p className="text-lg">{viagem.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* BOTÃO DE WHATSAPP */}
          <div className="text-center mt-16">
            <a
              href={whatsappLink}
              
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              <FaWhatsapp size={30} />
              <span>Garanta sua Vaga Agora!</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}