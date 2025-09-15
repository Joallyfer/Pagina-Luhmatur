// Define o "molde" para cada objeto de viagem, garantindo que todos tenham os mesmos campos.
export type Viagem = {
  slug: string;        // O URL único da viagem (ex: "beto-carrero-world")
  name: string;
  imageFile: string;
  dates: string[];
  description: string;   // A descrição curta para os cards da home
  detalhes: string;      // A descrição completa (com HTML) para a página de detalhes
  galleryImages: string[]; // Uma lista com os caminhos das imagens da galeria
};

// --- VIAGENS DE 1 DIA (BATE E VOLTA) ---
export const newOneDayTrips: Viagem[] = [
  {
  slug: "beto-carrero-world",
  name: "Beto Carrero World 🎢",
  imageFile: "/img/destinos/betocarrero.jpg",
  dates: ["8 Set - FRET", "2 Nov", "8 Nov - Albert"],
  description: `Prepare-se para um dia de pura adrenalina e diversão no maior parque temático da América Latina! Com mais de 100 atrações para todas as idades, o Beto Carrero World oferece desde montanhas-russas radicais até espetáculos incríveis e áreas temáticas que encantam a todos.`,
  detalhes: `
    <h3>Um dia de pura diversão no Beto Carrero World!</h3>
    <p>Garanta seu lugar para um dia inesquecível de adrenalina e magia no maior parque temático da América Latina.</p>
    
    <h4>O que está incluso no pacote?</h4>
    <ul>
      <li>🚍 Transporte em ônibus de turismo (ida e volta)</li>
      <li>🎟️ Passaporte de 1 dia para o parque</li>
      <li>🥤 Lanchinho especial com refrigerante</li>
      <li>🙋‍♀️ Guia de turismo acompanhante</li>
      <li>🎁 Brinde exclusivo Luhmatur</li>
      <li>🛡️ Seguro Transporte</li>
    </ul>

    <h4>Valores e Pagamento</h4>
    <p><strong>Valor por pessoa:</strong> R$ 280,00</p>
    <p><strong>Forma de Pagamento:</strong> Parcelado em até 4x de R$ 70,00. A reserva é confirmada mediante um sinal via PIX.</p>

    <h4>Embarque e Horários (02/Nov/2025)</h4>
    <ul>
      <li><strong>Local de Embarque:</strong> UPA do Pinheirinho</li>
      <li><strong>Horário de Saída:</strong> 05:30</li>
      <li><strong>Retorno:</strong> Saída do parque às 19:15, com chegada prevista em Curitiba às 22:00.</li>
    </ul>

    <h4>Recomendações Importantes</h4>
    <ul>
      <li>Levar documentos originais para o embarque.</li>
      <li>Ir com roupas leves, tênis confortáveis e levar capa de chuva.</li>
      <li>Não se esqueça do protetor solar, máscara e álcool em gel.</li>
    </ul>
  `,
  galleryImages: ["/img/destinos/betocarrero.jpg"]
},
  {
    slug: "ilha-do-mel",
    name: "Ilha do Mel 🏝",
    imageFile: "/img/destinos/ilhadomel.jpg",
    dates: ["14 Set", "6 Dez - CMEI Olinda e Vó Nazareth", "13 Dez - EM Pilarzinho"],
    description: `Explore praias paradisíacas e trilhas ecológicas em um refúgio de paz e natureza. Na Ilha do Mel, carros não entram, e a tranquilidade reina, oferecendo uma experiência única de conexão com o ambiente.`,
    detalhes: `
      <h3>Bate e Volta para a Ilha do Mel - PR ❤</h3>
      <p>Um dia incrível em um paraíso de natureza exuberante, praias e trilhas.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚌 Transporte em Ônibus Executivo (Ida e Volta)</li>
        <li>🥤 Lanchinho Exclusivo Luhmatur na ida</li>
        <li>🛥️ Travessia de Barco para a ilha</li>
        <li>🍽️ Almoço com Buffet Livre (bebidas não inclusas)</li>
        <li>☕ Café da tarde incluso</li>
        <li>🧑‍💼 Guia acompanhante da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>Valores</h4>
      <p><strong>R$ 280,00</strong> por pessoa, parcelado em até <strong>4x de R$ 70,00</strong>.</p>
      
      <h4>Embarque e Horários</h4>
      <p><strong>Data:</strong> 14/09/2025</p>
      <ul>
        <li><strong>07:00:</strong> UPA do Pinheirinho</li>
        <li><strong>07:30:</strong> São José dos Pinhais</li>
      </ul>
      <p>O retorno da ilha está programado para as <strong>18:00</strong>, com chegada prevista em Curitiba por volta das <strong>20:30</strong>.</p>
    `,
    galleryImages: ["/img/destinos/ilhadomel.jpg"]
  },
  {
    slug: "oktoberfest-blumenau",
    name: "Octoberfest Blumenau 🍺",
    imageFile: "/img/destinos/oktoberfest.webp",
    dates: ["11 Out", "25 Out"],
    description: `Vista seu traje típico e venha celebrar a maior festa alemã das Américas! A Oktoberfest de Blumenau é uma imersão na cultura germânica, com muito chope, música, danças folclóricas e gastronomia deliciosa.`,
    detalhes: '',
    galleryImages: ["/img/destinos/oktoberfest.webp"]
  },
  {
    slug: "trem-morretes",
    name: "Trem Morretes 🚞",
    imageFile: "/img/destinos/trem_morretes.jpg",
    dates: ["12 Out", "30 Nov", "13 Dez - CMEI Porto Seguro", "27 Dez"],
    description: `Embarque em uma das viagens de trem mais espetaculares do mundo pela Serra do Mar Paranaense. Desfrute de paisagens deslumbrantes, pontes e túneis históricos, finalizando com o charme da cidade de Morretes e sua culinária típica, como o famoso barreado.`,
    detalhes: `
      <h3>Um dia inesquecível pela Serra do Mar!</h3>
      <p>Aproveite um passeio maravilhoso pela serra paranaense, um pacote completo com 4 horas de viagem de trem para Morretes, contemplando as maravilhas da natureza.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚍 Transporte em Ônibus de Turismo (Ida e Volta)</li>
        <li>🥤 Lanchinho Especial na Ida</li>
        <li>🎟️ Passaporte para o Trem (classe turística/econômica)</li>
        <li>🍽️ Almoço delicioso em Morretes (Buffet Livre com Barreado, bebidas não inclusas)</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>👨‍👩‍👧 Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Bebidas durante o almoço.</li>
        <li>❌ Qualquer outro serviço não mencionado como incluso.</li>
      </ul>

      <h4>Valores (baseados no roteiro de 27/12)</h4>
      <p><strong>Adultos (a partir de 11 anos):</strong> R$ 280,00 à vista ou 5x de R$ 56,00 no PIX.</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 240,00 à vista ou 5x de R$ 48,00 no PIX.</p>
      <p><strong>Crianças de colo (até 5 anos):</strong> R$ 60,00 (taxa de seguro).</p>
      <p><em>Valores podem variar conforme a data. Consulte as condições de parcelamento no cartão de crédito.</em></p>

      <h4>Embarque e Horários</h4>
      <p><strong>Local de Embarque:</strong> UPA Pinheirinho (R. Leon Nicolas, S/N - Capão Raso)</p>
      <p><strong>Horário de Saída:</strong> 07:00</p>
      <p><strong>Horário de Retorno:</strong> Saída de Morretes às 16:00, com chegada prevista em Curitiba por volta das 18:30.</p>
    `,
    galleryImages: ["/img/destinos/trem_morretes.jpg"]
  },
  {
    slug: "chacara-paraiso",
    name: "Chácara Paraíso 🏩",
    imageFile: "/img/destinos/paraiso.jpeg",
    dates: ["15 Out - CMEI Mª Amélia e Agência", "14 Dez - CMEIs Jihad, Arapongas, Sonho de Criança e Dorothi", "19 Dez - CMEI Santa Efigênia, Nori e Califórnia"],
    description: `Um dia perfeito para relaxar e se divertir em meio à natureza. A Chácara Paraíso oferece piscinas, áreas de lazer e uma estrutura completa para você aproveitar momentos de descanso e alegria com a família e amigos.`,
    detalhes: '',
    galleryImages: ["/img/destinos/paraiso.jpeg"]
  },
  {
    slug: "barco-principe",
    name: "Barco Príncipe ⛴",
    imageFile: "/img/destinos/barco-principe.jpg",
    dates: ["15 Out - Esc. Ecológica, Angela e Agência", "10 Jan"],
    description: `Navegue pelas águas da Baía da Babitonga a bordo do Barco Príncipe. Um passeio encantador com música ao vivo, almoço delicioso e uma parada na histórica cidade de São Francisco do Sul, a terceira mais antiga do Brasil.`,
    detalhes: '',
    galleryImages: ["/img/destinos/barco-principe.jpg"]
  },
  {
    slug: "cascaneia",
    name: "Cascanéia 🏖",
    imageFile: "/img/destinos/cascaneia.jpg",
    dates: ["25 Out", "26 Out", "18 Dez"],
    description: `Prepare-se para um dia de muita diversão aquática no Parque Aquático Cascanéia! Com toboáguas emocionantes para todas as idades, piscinas relaxantes e uma infraestrutura completa, é o destino ideal para se refrescar e criar memórias.`,
    detalhes: '',
    galleryImages: ["/img/destinos/cascaneia.jpg"]
  },
  {
    slug: "fazenda-dona-francisca",
    name: "Fazenda Dona Francisca 🐎",
    imageFile: "/img/destinos/donafrancisca.jpg",
    dates: ["22 Nov", "6 Dez - CMEI Teruko e Maestrina", "13 Dez - CMEI Santa Clara"],
    description: `Viva a autêntica experiência do campo na Fazenda Dona Francisca. Um dia de lazer com passeios a cavalo, comida caseira, piscinas e contato direto com a natureza e os animais. Ideal para recarregar as energias e aproveitar a tranquilidade da vida rural.`,
    detalhes: '',
    galleryImages: ["/img/destinos/donafrancisca.jpg"]
  },
  {
    slug: "la-dolce-vita",
    name: "La Dolce Vita 🏨",
    imageFile: "/img/destinos/hotel-la-dolce-vita.jpg",
    dates: ["6 Dez - CMEI Sônia, Balbina e Corbélia", "19 Dez - CMEI Ferdt"],
    description: `Desfrute de um dia de lazer e conforto no Hotel La Dolce Vita. Com uma estrutura completa, piscinas, atividades recreativas e uma gastronomia de qualidade, é o lugar perfeito para relaxar e se divertir em um ambiente sofisticado.`,
    detalhes: '',
    galleryImages: ["/img/destinos/hotel-la-dolce-vita.jpg"]
  },
  {
    slug: "hotel-mata-atlantica",
    name: "Hotel Mata Atlântica 🏞",
    imageFile: "/img/destinos/hotelmataatlantica.jpg",
    dates: ["6 Dez - CMEI Cajuru e Salomé Viegas", "7 Dez - Agência, CMEI Ivo Ázua e Coqueiros"],
    description: `Relaxe em um refúgio cercado pela exuberante Mata Atlântica. O hotel oferece piscinas, trilhas ecológicas e um ambiente tranquilo para um dia de descanso e contato direto com a natureza, longe da agitação da cidade.`,
    detalhes: '',
    galleryImages: ["/img/destinos/hotelmataatlantica.jpg"]
  },
  {
    slug: "maria-fumaca-rio-negrinho",
    name: "Maria Fumaça Rio Negrinho 🚂🏞",
    imageFile: "/img/destinos/mariafumacario.jpg",
    dates: ["11 Out"],
    description: `Faça uma viagem no tempo a bordo de uma autêntica locomotiva a vapor. O passeio de Maria Fumaça em Rio Negrinho encanta com suas paisagens rurais, música e a nostalgia de uma era dourada da ferrovia.`,
    detalhes: '',
    galleryImages: ["/img/destinos/mariafumacario.jpg"]
  },
  {
    slug: "rio-de-janeiro-bate-e-volta",
    name: "Rio de Janeiro Bate e Volta 🌆",
    imageFile: "/img/destinos/riodejaneiro.jpeg",
    dates: ["15 Out"],
    description: `Descubra a Cidade Maravilhosa em um dia intenso e inesquecível! Conheça os principais cartões-postais do Rio de Janeiro, sinta a energia contagiante da cidade e aproveite cada momento nesta metrópole cheia de vida.`,
    detalhes: '',
    galleryImages: ["/img/destinos/riodejaneiro.jpeg"]
  },
  {
    slug: "caminho-do-vinho",
    name: "Caminho do Vinho 🍇🍷",
    imageFile: "/img/destinos/caminhodovinho.jpg",
    dates: ["1 Nov"],
    description: `Explore a tradição italiana em São José dos Pinhais no Caminho do Vinho. Visite vinícolas, deguste vinhos e sucos artesanais, e saboreie a deliciosa gastronomia local em um passeio rural cheio de cultura e sabor.`,
    detalhes: `
      <h3>Um dia de sabores e tradições no Caminho do Vinho!</h3>
      <p>O passeio conta com uma Guia/Sommelier, neta de imigrantes italianos e poloneses, que compartilha a história de seus antepassados e o desenvolvimento da agricultura familiar na região.</p>
      <p>Vamos conhecer o processo de vinificação e a produção de produtos coloniais, com degustação de queijos, vinhos, salames, chocolates e muito mais (conforme disponibilidade de cada adega).</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚌 Transporte saindo de Curitiba</li>
        <li>🧃 Lanche na Ida</li>
        <li>🍽️ Almoço no Café Colonial Casarão</li>
        <li>🧑🏻‍💼 Guia Local Credenciado</li>
        <li>🛅 Seguro Viagem</li>
      </ul>

      <h4>Valores por pessoa</h4>
      <p><strong>PIX ou Transferência:</strong> R$ 180,00 à vista ou 4x de R$ 45,00.</p>
      <p><strong>Cartão de Crédito:</strong> Consulte condições.</p>

      <h4>Embarque e Retorno</h4>
      <p><strong>Data:</strong> 01 de Novembro</p>
      <p><strong>Saída:</strong> 08:00 (do local combinado)</p>
      <p><strong>Retorno para Curitiba:</strong> 15:00</p>
    `,
    galleryImages: ["/img/destinos/caminhodovinho.jpg"]
  },
  {
    slug: "capivari-ecoresort",
    name: "Capivari Ecoresort 🏩",
    imageFile: "/img/destinos/capivari.jpg",
    dates: ["9 Nov - CMEI Iodéia e Agência"],
    description: `Um dia de tranquilidade e lazer em um ecoresort completo. Desfrute de piscinas, atividades ao ar livre e toda a infraestrutura de um resort integrado à natureza, ideal para relaxar e se divertir em família.`,
    detalhes: '',
    galleryImages: ["/img/destinos/capivari.jpg"]
  },
  {
    slug: "recanto-saltinho",
    name: "Recanto Saltinho 🌿🌅",
    imageFile: "/img/destinos/saltinho.jpg",
    dates: ["15 Nov"],
    description: `Passe um dia em um paraíso natural com cachoeiras e paisagens de tirar o fôlego. O Recanto Saltinho é perfeito para quem busca paz, ar puro e um mergulho refrescante em águas naturais.`,
    detalhes: '',
    galleryImages: ["/img/destinos/saltinho.jpg"]
  },
  {
    slug: "canyon-guartela",
    name: "Cânyon Guartelá 🌄",
    imageFile: "/img/destinos/canion-guartela.jpg",
    dates: ["15 Nov"],
    description: `Aventure-se pelo 6º maior cânion do mundo em extensão! O Parque Estadual do Guartelá oferece trilhas com vistas espetaculares, pinturas rupestres e a chance de se refrescar em suas piscinas naturais.`,
    detalhes: `
      <h3>Aventura no 6º maior Cânion do mundo!</h3>
      <p>Prepare-se para um dia de trilhas, paisagens espetaculares e banho de cachoeira em um dos parques mais bonitos do Paraná.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚌 Transporte executivo ida e volta</li>
        <li>🍽️ Almoço incluso</li>
        <li>🏞️ Passeio pelo Canyon Guartelá (Trilha da cachoeira e panelões para banho)</li>
        <li>🥤 Lanchinho Luhmatur</li>
        <li>🧑‍💼 Guia Credenciado pelo Ministério do Turismo</li>
        <li>🛡️ Seguro atividade</li>
      </ul>

      <h4>Valor por pessoa</h4>
      <p><strong>R$ 180,00</strong>, parcelado em até <strong>4x de R$ 45,00</strong>.</p>

      <h4>Embarque e Horários</h4>
      <p><strong>Data:</strong> 15 de Novembro</p>
      <p><strong>Saída de Curitiba:</strong> 06:30</p>
      <p><strong>Chegada prevista em Curitiba:</strong> 18:00</p>
    `,
    galleryImages: ["/img/destinos/canion-guartela.jpg"]
  },
  {
    slug: "tour-antonina-e-morretes",
    name: "Tour Antonina e Morretes 🚌",
    imageFile: "/img/destinos/antonina.jpg",
    dates: ["23 Nov"],
    description: `Descubra o charme das cidades históricas do litoral paranaense. Passeie pelas ruas de paralelepípedos, admire a arquitetura colonial de Antonina e Morretes e delicie-se com a culinária local.`,
    detalhes: '',
    galleryImages: ["/img/destinos/antonina.jpg"]
  },
  {
    slug: "nativa-ecoresort",
    name: "Nativa EcoResort 🏨",
    imageFile: "/img/destinos/nativaresort.jpeg",
    dates: ["14 Dez - CMEI Osternack, Olga Benário e N S Luz"],
    description: `Um dia de imersão na natureza com o conforto de um resort. O Nativa EcoResort oferece atividades de lazer, piscinas e uma atmosfera relaxante, ideal para quem quer escapar da rotina e se reconectar.`,
    detalhes: '',
    galleryImages: ["/img/destinos/nativaresort.jpeg"]
  }
];

// --- ROTEIROS COM PERNOITE ---
export const multiDayTrips: Viagem[] = [
  {
    slug: "bonito-ms-carnaval",
    name: "Bonito / MS - Carnaval",
    imageFile: "/img/destinos/bonito.jpg",
    dates: ["14 a 18 Fev"],
    description: `Descubra as águas cristalinas de Bonito, um dos melhores destinos de ecoturismo do Brasil. Flutue em rios repletos de peixes, explore grutas de beleza estonteante e renove suas energias em meio à natureza exuberante.`,
    detalhes: `
      <h3>Troque a folia pelo paraíso natural de Bonito!</h3>
      <p>Viva um Carnaval com experiências inesquecíveis e as mais belas paisagens da natureza brasileira.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>✈️ Transporte Aéreo de Ida e Volta (CWB-CGR)</li>
        <li>🛏️ 4 Diárias de Hospedagem em Hotel</li>
        <li>☕ 4 Cafés da Manhã</li>
        <li>🚌 Transfer de Van (Aeroporto x Hotel x Aeroporto)</li>
        <li>🎟️ Passeio à Praia da Figueira</li>
        <li>🎟️ Passeio à Gruta Catedral</li>
        <li>🙋‍♂️ Guia de Turismo Local</li>
        <li>👨‍👩‍👧 Seguro Aéreo</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Qualquer serviço não mencionado como incluso.</li>
        <li>🏝️ Passeio opcional para Nascente Azul (ingresso + almoço).</li>
      </ul>

      <h4>Valores por Pessoa</h4>
      <p><strong>No Cartão de Crédito:</strong> 10x de R$ 299,90 sem juros.</p>
      <p><strong>No PIX:</strong> Entrada de R$ 99,90 + 8x de R$ 362,50.</p>

      <h4>Informações de Voo (sujeito a alterações)</h4>
      <ul>
        <li><strong>Ida (14/02):</strong> Saída CWB 05:20 -> Chegada CGR 09:45</li>
        <li><strong>Volta (18/02):</strong> Saída CGR 18:50 -> Chegada CWB 00:25 (+1)</li>
      </ul>
      <p><em>Embarque no Aeroporto Afonso Pena. Voos com escala.</em></p>
    `,
    galleryImages: ["/img/destinos/bonito.jpg"]
  },
  {
    slug: "lencois-maranhenses-ma",
    name: "Lençóis Maranhenses / MA",
    imageFile: "/img/destinos/lencoismaranhenses.webp",
    dates: ["12 a 18 Nov"],
    description: `Prepare-se para um cenário de outro mundo! Os Lençóis Maranhenses formam um deserto de dunas brancas repletas de lagoas de água doce e cristalina, criando uma paisagem inesquecível e perfeita para fotos incríveis.`,
    detalhes: '',
    galleryImages: ["/img/destinos/lencoismaranhenses.webp"]
  },
  {
    slug: "rio-de-janeiro-rj",
    name: "Rio de Janeiro / RJ",
    imageFile: "/img/destinos/riodejaneiro.jpeg",
    dates: ["9 a 11 Jan (Aéreo ✈)", "22 a 25 Jan (Rodoviário 🚎)", "27/02 a 01/03 (Rodoviário 🚎)"],
    description: `Visite a Cidade Maravilhosa e seus pontos turísticos mundialmente famosos. Do Cristo Redentor ao Pão de Açúcar, passando pelas praias de Copacabana e Ipanema, o Rio de Janeiro oferece uma experiência vibrante e inesquecível.`,
    detalhes: `
      <h3>Conheça a Cidade Maravilhosa!</h3>
      <p>Uma viagem completa para explorar os principais cartões-postais do Rio de Janeiro com conforto e segurança.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚍 Transporte Rodoviário Exclusivo (Ida e Volta)</li>
        <li>🛏️ 2 Diárias de Hotel em Copacabana</li>
        <li>☕ 2 Cafés da Manhã</li>
        <li>🏙️ City Tour pela cidade com guia</li>
        <li>🎟️ 1 Ingresso para o Cristo Redentor (subida de trem)</li>
        <li>🎟️ 1 Ingresso para o Pão de Açúcar (bondinho)</li>
        <li>🚌 Transfer de ônibus para os roteiros</li>
        <li>🙋‍♂️ Guia de Turismo da Agência e Guia Local</li>
        <li>👨‍👩‍👧 Seguro Transporte</li>
      </ul>

      <h4>Roteiro Previsto (Sábado)</h4>
      <ul>
        <li>📍 Sambódromo Sapucaí</li>
        <li>📍 Estádio Maracanã (visita externa)</li>
        <li>📍 Catedral do Rio e Arco da Lapa</li>
        <li>📍 Escadaria Selarón</li>
        <li>📍 Cristo Redentor (ingresso incluso)</li>
        <li>📍 Pão de Açúcar (ingresso incluso)</li>
      </ul>

      <h4>Valores por Pessoa (Rodoviário 22-25/01)</h4>
      <p><strong>A partir de 11 anos:</strong> R$ 1.294,00 à vista ou Entrada de R$ 100,00 + 6x de R$ 199,00 no PIX.</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 1.174,00 à vista ou Entrada de R$ 100,00 + 6x de R$ 179,00 no PIX.</p>
      <p><strong>Crianças de colo (até 5 anos):</strong> R$ 360,00 à vista ou 6x de R$ 60,00.</p>
      <p><em>Parcelamos em até 10x no Cartão de Crédito sem juros.</em></p>

      <h4>Embarque e Horários</h4>
      <p><strong>Local:</strong> UPA Pinheirinho (Rua Leon Nícolas, 2081 – Capão Raso)</p>
      <ul>
        <li><strong>Saída de Curitiba:</strong> 22/01 às 19:00</li>
        <li><strong>Retorno para Curitiba:</strong> 25/01 às 08:00</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/riodejaneiro.jpeg"]
  },
  {
    slug: "jalapao-to",
    name: "Jalapão / TO",
    imageFile: "/img/destinos/jalapao.jpg",
    dates: ["29 Out a 2 Nov"],
    description: `Aventure-se no coração do Brasil em uma expedição pelo Jalapão. Conheça os fervedouros, onde é impossível afundar, cachoeiras de água esmeralda e as dunas douradas que compõem um dos cenários mais selvagens e belos do país.`,
    detalhes: '',
    galleryImages: ["/img/destinos/jalapao.jpg"]
  },
  {
    slug: "jericoacoara-ce",
    name: "Jericoacoara / CE",
    imageFile: "/img/destinos/jericoacara.jpg",
    dates: ["21 a 24 Jan"],
    description: `Relaxe em um paraíso de ventos fortes, dunas e lagoas de águas claras. Jericoacoara é o destino perfeito para quem busca tranquilidade, esportes aquáticos e um pôr do sol espetacular na famosa Duna do Pôr do Sol.`,
    detalhes: '',
    galleryImages: ["/img/destinos/jericoacara.jpg"]
  },
  {
    slug: "capitolio-mg",
    name: "Capitólio / MG",
    imageFile: "/img/destinos/capitolio.jpg",
    dates: ["4 a 7 Jan"],
    description: `Navegue pelo 'Mar de Minas' e encante-se com os cânions e cachoeiras de Capitólio. O Lago de Furnas oferece paisagens deslumbrantes, com águas verdes e formações rochosas que criam um cenário único.`,
    detalhes: `
      <h3>Venha conhecer o paraíso de Capitólio!</h3>
      <p>Explore as belezas do 'Mar de Minas' com um roteiro completo, incluindo os famosos passeios de lancha e 4x4.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚍 Transporte em ônibus semi leito (ida e volta)</li>
        <li>🏨 Duas diárias em hotel/pousada</li>
        <li>☕ 3 cafés da manhã</li>
        <li>🍽️ 2 jantares inclusos</li>
        <li>🚤 Passeio de lancha pelos cânions</li>
        <li>🚙 Passeio 4x4 na região</li>
        <li>🥤 Serviço de bordo na ida</li>
        <li>🙋‍♀️ Guia de turismo credenciada e guia local</li>
        <li>🛡️ Seguro viagem</li>
      </ul>
      <p><em>Obs: O passeio ao Mirante dos Cânions é opcional.</em></p>

      <h4>Valores por Pessoa</h4>
      <p><strong>Adultos:</strong> R$ 1.480,00 (Entrada de R$ 80,00 + 10x de R$ 140,00).</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 999,00.</p>
      <p><strong>Crianças de colo (3 a 5 anos):</strong> R$ 50,00.</p>
      <p><em>Acomodações em quartos coletivos para quem viaja sozinho, e quartos privativos para casais e famílias.</em></p>

      <h4>Embarque e Horários</h4>
      <p><strong>Local:</strong> UPA do Pinheirinho</p>
      <ul>
        <li><strong>Saída:</strong> 04/01/2026 às 20:00</li>
        <li><strong>Retorno:</strong> 07/01/2026 às 09:30</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/capitolio.jpg"]
  },
  {
    slug: "foz-do-iguacu-pr",
    name: "Foz do Iguaçu / PR",
    imageFile: "/img/destinos/fozdoiguacu.webp",
    dates: ["25 a 28 Out (Aéreo ✈)", "28 a 30 Nov (Rodoviário 🚌)", "25 a 28 Jan (Aéreo ✈)"],
    description: `Maravilhe-se com a força e a beleza de uma das Sete Maravilhas Naturais do Mundo. As Cataratas do Iguaçu proporcionam uma experiência imersiva e emocionante, com trilhas e vistas panorâmicas de tirar o fôlego.`,
    detalhes: '',
    galleryImages: ["/img/destinos/fozdoiguacu.webp"]
  },
  {
    slug: "serras-gauchas-rs-natal-luz",
    name: "Serras Gaúchas / RS - Natal Luz",
    imageFile: "/img/destinos/natalluz.jpg",
    dates: ["19 a 22 Dez", "29/01 a 01/02"],
    description: `Viva a magia do Natal em Gramado e Canela! As Serras Gaúchas se transformam durante o Natal Luz, com espetáculos, desfiles e decorações que encantam adultos e crianças, em meio ao charme da arquitetura europeia.`,
    detalhes: `
      <h3>A Magia do Natal Luz em Gramado e Canela!</h3>
      <p>Uma viagem encantadora para viver o sonho e a magia do Natal nas Serras Gaúchas.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚍 Ônibus semi leito de turismo</li>
        <li>🏨 3 dias com 2 pernoites em hotel em Canela</li>
        <li>☕ 2 cafés da manhã</li>
        <li>🍽️ 1 jantar incluso (Noite do Fondue)</li>
        <li>🎟️ Ingresso para o parque Acquamotion</li>
        <li>🥤 Serviço de bordo (água e refrigerante)</li>
        <li>🙋‍♀️ Guia acompanhante</li>
        <li>🚍 Translado para os pontos turísticos</li>
      </ul>

      <h4>Roteiro e Pontos Turísticos</h4>
      <ul>
        <li>❤ Pórtico de Gramado</li>
        <li>❤ Adegas de vinho</li>
        <li>❤ Fábricas de chocolate</li>
        <li>❤ Malharias</li>
        <li>❤ Igreja de Pedra (Canela)</li>
        <li>❤ Parque Lago Negro</li>
        <li>❤ Rua Torta</li>
      </ul>

      <h4>Valores por Pessoa</h4>
      <p><strong>Adultos:</strong> R$ 1.490,00 ou 10x de R$ 149,00.</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 990,00.</p>
      <p><strong>Crianças de colo (0 a 5 anos):</strong> R$ 60,00.</p>
    `,
    galleryImages: ["/img/destinos/natalluz.jpg"]
  },
  {
    slug: "aparecida-sp",
    name: "Aparecida / SP",
    imageFile: "/img/destinos/aparecida.jpeg",
    dates: ["26 a 28 Set", "7 a 9 Nov"],
    description: `Visite o maior santuário mariano do mundo e participe de um momento de fé e devoção. A Basílica de Nossa Senhora Aparecida recebe milhões de fiéis todos os anos, oferecendo uma experiência de paz e espiritualidade.`,
    detalhes: '',
    galleryImages: ["/img/destinos/aparecida.jpeg"]
  },
  {
    slug: "cruzeiro-msc",
    name: "Cruzeiro MSC",
    imageFile: "/img/destinos/cruzeiro.jpg",
    dates: ["24 a 31 Jan (8 Dias)", "26 a 30 Jan (5 Dias)"],
    description: `Embarque em uma jornada de luxo e diversão em alto mar. Os cruzeiros da MSC oferecem gastronomia internacional, entretenimento de primeira, piscinas e paradas em destinos incríveis pela costa brasileira.`,
    detalhes: '',
    galleryImages: ["/img/destinos/cruzeiro.jpg"]
  },
  {
    slug: "ilha-do-mel-pr",
    name: "Ilha do Mel / PR",
    imageFile: "/img/destinos/ilhadomel.jpg",
    dates: ["14 e 15 Out", "18 e 19 Out", "1 e 2 Nov", "6 e 7 Dez", "12 a 14 Jan"],
    description: `Explore com mais tempo as belezas de um paraíso ecológico. Com pernoite na Ilha do Mel, você poderá curtir praias, trilhas, o Farol das Conchas e a Fortaleza com toda a calma que este lugar mágico merece.`,
    detalhes: `
      <h3>Férias de Janeiro na Ilha do Mel ❤</h3>
      <p>Um lugar incrível com muita natureza para você relaxar e recarregar as energias.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚌 Transporte ida e volta</li>
        <li>🏨 Hospedagem em pousada</li>
        <li>☕ 2 cafés da manhã</li>
        <li>🍽️ 2 almoços</li>
        <li>🥩 1 churrasco no jantar</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>Valores por Pessoa</h4>
      <p><strong>Quartos para 2 pessoas:</strong> R$ 999,00 ou 8x de R$ 125,00.</p>
      <p><strong>Quartos para até 3 pessoas:</strong> R$ 960,00 ou 8x de R$ 120,00.</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 880,00.</p>
      <p><strong>Crianças de colo (5 anos):</strong> R$ 150,00.</p>
      <p><em>Aceitamos cartão de débito, crédito, depósito bancário e PIX.</em></p>

      <h4>Roteiro e Horários</h4>
      <p><strong>Saída:</strong> 12/01/2026 às 19:30 da UPA Pinheirinho</p>
      <p><strong>Terça-feira:</strong> Café da manhã, almoço na ilha e churrasco à noite.</p>
      <p><strong>Quarta-feira:</strong> Café da manhã e almoço inclusos.</p>
      <p><strong>Retorno:</strong> 14/01/2026 às 14:00, com previsão de chegada em Curitiba às 18:00.</p>
    `,
    galleryImages: ["/img/destinos/ilhadomel.jpg"]
  },
  {
    slug: "termas-de-marcelino-sc",
    name: "Termas de Marcelino / SC",
    imageFile: "/img/destinos/termasmarcelino.jpg",
    dates: ["5 a 8 Set"],
    description: `Relaxe nas águas termais de Marcelino Ramos. Com propriedades terapêuticas, as piscinas do balneário são um convite ao descanso e ao bem-estar, em meio a uma paisagem natural encantadora.`,
    detalhes: '',
    galleryImages: ["/img/destinos/termasmarcelino.jpg"]
  },
  {
    slug: "urubici-e-serra-do-rio-do-rastro-sc",
    name: "Urubici e Serra do Rio do Rastro / SC",
    imageFile: "/img/destinos/urubici.jpg",
    dates: ["5 a 8 Set"],
    description: `Prepare-se para as paisagens mais impressionantes da serra catarinense. Desça a famosa Serra do Rio do Rastro, com suas curvas sinuosas, e explore as belezas naturais de Urubici, como a Cascata do Avencal e o Morro da Igreja.`,
    detalhes: '',
    galleryImages: ["/img/destinos/urubici.jpg"]
  },
  {
    slug: "manaus-amazonas",
    name: "Manaus / Amazonas",
    imageFile: "/img/destinos/amazonas.jpg",
    dates: ["15 a 19 Set"],
    description: `Explore a porta de entrada para a maior floresta tropical do mundo. Conheça o Encontro das Águas, o Teatro Amazonas e mergulhe na cultura e na biodiversidade exuberante da Amazônia.`,
    detalhes: '',
    galleryImages: ["/img/destinos/amazonas.jpg"]
  },
  {
    slug: "salvador-ba",
    name: "Salvador / BA",
    imageFile: "/img/destinos/salvador.jpg",
    dates: ["22 a 25 Set"],
    description: `Sinta a energia contagiante da capital baiana. Caminhe pelo Pelourinho, conheça o Elevador Lacerda e mergulhe na rica cultura afro-brasileira, com sua música, gastronomia e história vibrantes.`,
    detalhes: '',
    galleryImages: ["/img/destinos/salvador.jpg"]
  },
  {
    slug: "ametista-do-sul-rs",
    name: "Ametista do Sul / RS",
    imageFile: "/img/destinos/ametista.jpg",
    dates: ["26 a 28 Set"],
    description: `Descubra a capital mundial da pedra ametista. Visite minas subterrâneas, veja pedras preciosas de perto e se encante com a energia única deste lugar, que possui até uma igreja revestida com 40 toneladas de ametista.`,
    detalhes: '',
    galleryImages: ["/img/destinos/ametista.jpg"]
  },
  {
    slug: "sao-paulo-sp",
    name: "São Paulo / SP",
    imageFile: "/img/destinos/saopaulo.jpg",
    dates: ["18 e 19 Out"],
    description: `Mergulhe na capital cultural e gastronômica do Brasil. São Paulo oferece uma infinidade de opções, desde museus e teatros até parques e uma culinária diversificada que agrada a todos os gostos.`,
    detalhes: '',
    galleryImages: ["/img/destinos/saopaulo.jpg"]
  },
  {
    slug: "arraial-do-cabo-rj",
    name: "Arraial do Cabo / RJ",
    imageFile: "/img/destinos/arraialdocabo.jpg",
    dates: ["24 a 26 Out", "12 a 14 Jan (Aéreo ✈)"],
    description: `Conheça o 'Caribe Brasileiro' e suas praias de areia branca e águas transparentes. Arraial do Cabo é o paraíso dos mergulhadores e um destino perfeito para quem busca paisagens de tirar o fôlego.`,
    detalhes: '',
    galleryImages: ["/img/destinos/arraialdocabo.jpg"]
  },
  {
    slug: "camboriu-e-beto-carrero-sc",
    name: "Camboriú e Beto Carrero / SC",
    imageFile: "/img/destinos/camboriu.webp",
    dates: ["26 e 27 Out"],
    description: `Combine a agitação de uma das praias mais famosas do Sul com a magia do maior parque temático da América Latina. Um roteiro que une diversão, adrenalina e as belas paisagens de Balneário Camboriú.`,
    detalhes: `
      <h3>Dois dias de pura diversão no Beto Carrero World!</h3>
      <p>Pensou em diversão, pensou em Beto Carrero World! Que tal um pacote completo com 2 dias de parque para aproveitar tudo ao máximo?</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚌 Transporte em ônibus de turismo</li>
        <li>🥤 Lanchinho a bordo</li>
        <li>🎟️ 2 passaportes para o parque (1 para cada dia)</li>
        <li>🏨 1 diária em hotel na região</li>
        <li>☕ 1 café da manhã</li>
        <li>🍽️ 1 jantar incluso</li>
      </ul>

      <h4>Valores</h4>
      <p><strong>Valor por pessoa:</strong> R$ 720,00.</p>
      <p><strong>Pagamento:</strong> 8x de R$ 90,00 no cartão de crédito ou PIX.</p>
      <p><strong>Crianças:</strong> Até 4 anos pagam apenas uma taxa de R$ 80,00 (seguro). Acima de 5 anos, o valor é integral.</p>
    `,
    galleryImages: ["/img/destinos/camboriu.webp"]
  },
  {
    slug: "vitoria-espirito-santo",
    name: "Vitória / Espírito Santo",
    imageFile: "/img/destinos/vitoria.webp",
    dates: ["19 a 23 Nov"],
    description: `Explore as belezas da capital capixaba, uma ilha cheia de charme. Visite praias, conheça o Convento da Penha e desfrute da famosa moqueca capixaba, um ícone da culinária local.`,
    detalhes: '',
    galleryImages: ["/img/destinos/vitoria.webp"]
  },
  {
    slug: "treze-tilias-sc",
    name: "Treze Tílias / SC",
    imageFile: "/img/destinos/trezetilias.jpg",
    dates: ["5 a 7 Jan"],
    description: `Sinta-se em um pedacinho da Áustria no Brasil. Treze Tílias encanta com sua arquitetura alpina, cultura, esculturas em madeira e uma forte tradição austríaca preservada em sua gastronomia e costumes.`,
    detalhes: `
      <h3>Conheça a Áustria Brasileira com um roteiro inesquecível!</h3>
      <p>Embarque em uma viagem cheia de encantos, cultura e gastronomia típica em Treze Tílias.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>🚐 Transporte Executivo (Ida e Volta)</li>
        <li>🥤 Lanchinho Exclusivo na Ida</li>
        <li>🏨 2 Diárias de Hospedagem em Hotel com Piscinas Térmicas</li>
        <li>☕ 2 Cafés da Manhã (sendo um brunch estendido no último dia)</li>
        <li>🍽️ 1 Almoço à Moda Mineira</li>
        <li>🍽️ 1 Jantar Típico Italiano</li>
        <li>🍽️ 1 Jantar Típico Austríaco</li>
        <li>🧋 Suco, Água e Refrigerante durante almoço e jantares inclusos</li>
        <li>📍 City Tour e todos os passeios do roteiro</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>👨‍👩‍👧 Seguro Transporte</li>
      </ul>

      <h4>Roteiro Detalhado</h4>
      <p><strong>05/01 (Segunda):</strong> Saída de Curitiba às 07:00. Chegada, check-in e tarde livre no hotel. À noite, Jantar Típico Italiano.</p>
      <p><strong>06/01 (Terça):</strong> Café da manhã, seguido de City Tour pela cidade. Almoço com Feijoada à Moda Mineira. Às 17h, 1 hora de Chopp Liberado no hotel. À noite, Jantar Típico Austríaco, apresentação de danças típicas e música ao vivo.</p>
      <p><strong>07/01 (Quarta):</strong> Alvorada Alpina às 06:00. Brunch (café da manhã farto estendido até meio-dia). Manhã livre. Check-out ao meio-dia e retorno para Curitiba.</p>

      <h4>Valores por Pessoa</h4>
      <p><strong>A partir de 13 anos:</strong> R$ 1.280,00 (Entrada de R$ 80 + 10x de R$ 120 no PIX).</p>
      <p><strong>Crianças (6 a 12 anos):</strong> R$ 980,00 (Entrada de R$ 80 + 10x de R$ 90 no PIX).</p>
      <p><strong>Crianças de colo (0 a 5 anos):</strong> R$ 60,00 à vista.</p>
      <p><em>Parcelamos em até 10x sem juros no cartão de crédito.</em></p>
    `,
    galleryImages: ["/img/destinos/trezetilias.jpg"]
  },
  {
    slug: "thermas-de-piratuba-sc",
    name: "Thermas de Piratuba / SC",
    imageFile: "/img/destinos/termaspirituba.webp",
    dates: ["16 a 18 Jan"],
    description: `Relaxe e divirta-se em um dos melhores parques de águas termais do Brasil. As Thermas de Piratuba oferecem piscinas para todos os gostos, com águas quentinhas e uma estrutura de lazer completa.`,
    detalhes: '',
    galleryImages: ["/img/destinos/termaspirituba.webp"]
  },
  {
    slug: "salvador-e-morro-de-sao-paulo-ba",
    name: "Salvador e Morro de São Paulo / BA",
    imageFile: "/img/destinos/morrodesp.webp",
    dates: ["3 a 10 Fev"],
    description: `Um roteiro que une a história e a cultura de Salvador com o paraíso tropical de Morro de São Paulo. Curta o agito da capital e depois relaxe nas praias sem carros e de águas cristalinas de Morro.`,
    detalhes: '',
    galleryImages: ["/img/destinos/morrodesp.webp"]
  },
  {
    slug: "costao-do-santinho-sc-all-inclusive",
    name: "Costão do Santinho / SC - All Inclusive",
    imageFile: "/img/destinos/costaosaltinho.jpg",
    dates: ["19 a 21 Abr"],
    description: `Desfrute de uma experiência de luxo e conforto em um dos resorts mais premiados do Brasil. Com sistema All Inclusive, o Costão do Santinho oferece gastronomia de alta qualidade, lazer e uma vista espetacular para o mar.`,
    detalhes: '',
    galleryImages: ["/img/destinos/costaosaltinho.jpg"]
  }
];

// --- VIAGENS INTERNACIONAIS ---
export const internationalTrips: Viagem[] = [
  {
    slug: "paris-franca",
    name: "Paris / França",
    imageFile: "/img/destinos/paris.png",
    dates: ["14 a 22 Jan"],
    description: `Viva o charme e o romance da Cidade Luz. Visite a icônica Torre Eiffel, explore os tesouros do Museu do Louvre e caminhe pelas charmosas ruas de Paris, em uma viagem que ficará para sempre na memória.`,
    detalhes: '',
    galleryImages: ["/img/destinos/paris.png"]
  },
  {
    slug: "buenos-aires-corpus-christi",
    name: "Buenos Aires Corpus Christi",
    imageFile: "/img/destinos/buenosaires.jpeg",
    dates: ["3 a 7 Jun"],
    description: `Descubra a 'Paris da América do Sul'! Buenos Aires encanta com sua arquitetura europeia, shows de tango apaixonantes, culinária saborosa e uma atmosfera cultural vibrante em cada esquina.`,
    detalhes: '',
    galleryImages: ["/img/destinos/buenosaires.jpeg"]
  }
];

// Junta todas as viagens num só array para facilitar a busca
export const todasAsViagens: Viagem[] = [...newOneDayTrips, ...multiDayTrips, ...internationalTrips];

// Função que encontra uma viagem específica pelo seu slug
export function getViagemPeloSlug(slug: string): Viagem | undefined {
  return todasAsViagens.find((viagem) => viagem.slug === slug);
}