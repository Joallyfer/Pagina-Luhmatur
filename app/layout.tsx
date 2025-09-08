import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// --- FONTES ---
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- METADADOS ---
export const metadata: Metadata = {
  // Título e descrição
  title: "Luhmatur - Sua Próxima Aventura Começa Aqui",
  description: "Conectando você aos melhores destinos com segurança, conforto e experiências inesquecíveis.",
  
  // Open Graph (para redes sociais)
  openGraph: {
    title: "Luhmatur - Sua Próxima Aventura Começa Aqui",
    description: "Conectando você aos melhores destinos com segurança, conforto e experiências inesquecíveis.",
    url: "https://www.luhmatur.com.br", 
    siteName: "Luhmatur",
    images: [
      {
        url: "/img/logo/Logo_agencia.png", 
        width: 1200, 
        height: 630, 
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // 👇 ADIÇÃO DO FAVICON AQUI 👇
  icons: {
    icon: '../img/logo/favicon.ico', 
    shortcut: '../img/logo/favicon-16x16.png', 
    apple: '../img/logo/apple-touch-icon.png', 
  },
};

// --- LAYOUT ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
        <Link
    // 1. O atributo href foi atualizado com a nova mensagem codificada.
    href="https://wa.me/554135889114?text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20as%20viagens"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    // 2. Adicionada a classe "animate-bounce" para fazer o botão pular.
    className="whatsapp-button fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce"
>
    <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M19.11 17.09a5.62 5.62 0 0 1-2.5-2.53c-.27-.53-.3-.95.17-1.36.29-.26.58-.58.58-.97 0-.26-.13-.62-.37-1.05-.26-.46-.6-1.12-1.18-1.12-.32 0-.63.06-.9.2-1.03.52-1.68 1.83-1.68 3.02 0 1.73 1.27 3.58 2.26 4.55.99.96 2.82 2.23 4.54 2.23 1.19 0 2.5-.64 3.02-1.66.14-.27.2-.58.2-.9 0-.59-.67-.93-1.13-1.18-.43-.24-.79-.37-1.05-.37-.39 0-.71.29-.97.58-.41.46-.83.43-1.36.15zM27.5 16c0 6.37-5.16 11.5-11.53 11.5-2.02 0-3.92-.53-5.58-1.47L4.5 27.5l1.49-5.8A11.42 11.42 0 0 1 4.97 16C4.97 9.63 10.13 4.5 16.5 4.5S27.5 9.63 27.5 16zm-2.25 0A9.28 9.28 0 0 0 16 6.73 9.28 9.28 0 0 0 6.73 16c0 1.69.46 3.27 1.26 4.62l-.82 3.2 3.28-.86A9.17 9.17 0 0 0 16 25.28 9.28 9.28 0 0 0 25.25 16z" />
    </svg>
</Link>

      </body>
    </html>
  );
}