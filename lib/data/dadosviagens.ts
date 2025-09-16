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
    detalhes: `
      <h3>Viva a Oktoberfest em Blumenau! 🍻</h3>
      <p>Participe da maior festa alemã das Américas com um pacote completo!</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚍 Transporte Exclusivo Ida e Volta</li>
        <li>🥤 Lanche Exclusivo na ida</li>
        <li>🎟️ Entrada Gratuita na Vila Germânica (até 12:00)</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Qualquer serviço não mencionado acima.</li>
      </ul>

      <h4>💰 Valor do Pacote</h4>
      <p><strong>R$ 180,00</strong> por pessoa.</p>
      <p><strong>Pagamento:</strong> À Vista ou 6x de R$ 35,00 no PIX ou Cartão.</p>

      <h4>🗓️ Embarque e Horários</h4>
      <ul>
        <li><strong>Embarque:</strong> UPA Pinheirinho e São José dos Pinhais.</li>
        <li><strong>Saída de Curitiba:</strong> 07:00</li>
        <li><strong>Retorno para Curitiba:</strong> 20:00</li>
      </ul>
    `,
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
        <li>🛡️ Seguro Viagem</li>
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
    detalhes: `
      <h3>Day Use na Chácara Paraíso do Sol!</h3>
      <p>Um dia para relaxar e se divertir com uma estrutura completa de lazer.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚍 Transporte Exclusivo Ida e Volta</li>
        <li>🥤 Lanchinho Exclusivo na Ida</li>
        <li>🍽️ Almoço Buffet Livre com Bebidas Soft inclusas por 2 horas</li>
        <li>🎟️ Ingresso para Acesso à Chácara e Parque</li>
        <li>🏊‍♀️ Atividades: Float, parquinho, praia, quadras de areia, piscina e bar molhado</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>Atividades não inclusas (opcionais):</h4>
      <ul>
        <li>❌ Paintball: R$ 50,00 por pessoa (equipamento + 100 bolinhas)</li>
        <li>❌ Wakeboard: R$ 110,00 por pessoa (sessão de 15 min)</li>
      </ul>

      <h4>💰 Valores do Pacote</h4>
      <p><strong>A partir de 5 anos:</strong> R$ 280,00 (à Vista ou 10x de R$ 30,00 no PIX).</p>
      <p><strong>Até 4 anos (no colo):</strong> FREE.</p>
      <p><em>Consulte condições de parcelamento no Cartão de Crédito.</em></p>

      <h4>🗓️ Embarque e Horários</h4>
      <ul>
        <li><strong>Embarque:</strong> A combinar</li>
        <li><strong>Saída de Curitiba:</strong> 08:00</li>
        <li><strong>Retorno:</strong> 17:00</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/paraiso.jpeg"]
  },
  {
    slug: "barco-principe",
    name: "Barco Príncipe ⛴",
    imageFile: "/img/destinos/barco-principe.jpg",
    dates: ["15 Out - Esc. Ecológica, Angela e Agência", "10 Jan"],
    description: `Navegue pelas águas da Baía da Babitonga a bordo do Barco Príncipe. Um passeio encantador com música ao vivo, almoço delicioso e uma parada na histórica cidade de São Francisco do Sul, a terceira mais antiga do Brasil.`,
    detalhes: `
      <h3>Passeio no Barco Príncipe em Joinville/SC!</h3>
      <p>Sol, mar, história e boa comida em um só passeio, com parada no Centro Histórico de São Francisco do Sul.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>✅ Transporte exclusivo ida e volta</li>
        <li>✅ Lanchinho na Ida com Refri</li>
        <li>✅ Almoço delicioso a bordo do barco</li>
        <li>✅ Coordenador de viagem</li>
        <li>✅ Seguro transporte</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Acima de 11 anos:</strong> R$ 300,00 à vista ou 5x R$ 60,00.</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 250,00 ou 5x R$ 50,00.</p>
      <p><strong>Até 5 anos (no colo):</strong> R$ 60,00.</p>
      <p><em>Consulte condições de parcelamento no cartão.</em></p>
      
      <h4>🗓️ Embarque e Horários</h4>
      <ul>
        <li><strong>Embarque:</strong> UPA Pinheirinho (Rua Leon Nicolas, 2081)</li>
        <li><strong>Saída de Curitiba:</strong> 06:30</li>
        <li><strong>Retorno para Curitiba:</strong> 16:00 (chegada prevista às 19:00)</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/barco-principe.jpg"]
  },
  {
    slug: "cascaneia",
    name: "Cascanéia 🏖",
    imageFile: "/img/destinos/cascaneia.jpg",
    dates: ["25 Out", "26 Out", "18 Dez"],
    description: `Prepare-se para um dia de muita diversão aquática no Parque Aquático Cascanéia! Com toboáguas emocionantes para todas as idades, piscinas relaxantes e uma infraestrutura completa, é o destino ideal para se refrescar e criar memórias.`,
    detalhes: `
      <h3>Excursão para o Parque Aquático Cascanéia! 🏖️</h3>
      <p>Reserve sua poltrona, aperte o cinto e partiu diversão!</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚍 Transporte ida e volta</li>
        <li>🌭 Lanchinho na ida</li>
        <li>🎟️ Passaporte do Parque</li>
        <li>👩🏼‍💼 Guia da Agência</li>
        <li>🛡️ Seguro Viagem</li>
        <li>🍽️ Almoço (opcional)</li>
      </ul>

      <h4>💰 Valores</h4>
      <p><strong>Acima de 12 anos:</strong> R$ 280,00 ou em até 8x de R$ 35,00.</p>
      <p><strong>Crianças (4 a 11 anos):</strong> R$ 240,00 ou em até 8x de R$ 30,00.</p>
      
      <h4>🗓️ Embarque</h4>
      <p><strong>Local:</strong> UPA Pinheirinho</p>
    `,
    galleryImages: ["/img/destinos/cascaneia.jpg"]
  },
  {
    slug: "fazenda-dona-francisca",
    name: "Fazenda Dona Francisca 🐎",
    imageFile: "/img/destinos/donafrancisca.jpg",
    dates: ["22 Nov", "6 Dez - CMEI Teruko e Maestrina", "13 Dez - CMEI Santa Clara"],
    description: `Viva a autêntica experiência do campo na Fazenda Dona Francisca. Um dia de lazer com passeios a cavalo, comida caseira, piscinas e contato direto com a natureza e os animais. Ideal para recarregar as energias e aproveitar a tranquilidade da vida rural.`,
    detalhes: `
      <h3>Day Use no Hotel Fazenda Dona Francisca!</h3>
      <p>Um dia completo de lazer e gastronomia no campo.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚍 Transporte Exclusivo Ida e Volta</li>
        <li>🎟️ Passaporte Day Use para recreação externa</li>
        <li>☕ Café da Manhã</li>
        <li>🍺 Chopp e Aperitivos antes do Almoço</li>
        <li>🍛 Almoço</li>
        <li>☕ Café da Tarde Colonial</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Acesso aos quartos e uso de roupa de cama e banho.</li>
        <li>❌ Bebidas não discriminadas como inclusas.</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Acima de 11 anos:</strong> R$ 600,00 (à Vista ou 10x de R$ 60,00).</p>
      <p><strong>De 6 a 10 anos:</strong> R$ 480,00 (à Vista ou 10x de R$ 48,00).</p>
      <p><strong>Até 5 anos:</strong> R$ 60,00 (à Vista).</p>

      <h4>🗓️ Embarque e Horários</h4>
      <ul>
        <li><strong>Embarque:</strong> A combinar</li>
        <li><strong>Saída:</strong> 06:00</li>
        <li><strong>Retorno:</strong> 18:00</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/donafrancisca.jpg"]
  },
  {
    slug: "la-dolce-vita",
    name: "La Dolce Vita 🏨",
    imageFile: "/img/destinos/hotel-la-dolce-vita.jpg",
    dates: ["6 Dez - CMEI Sônia, Balbina e Corbélia", "19 Dez - CMEI Ferdt"],
    description: `Desfrute de um dia de lazer e conforto no Hotel La Dolce Vita. Com uma estrutura completa, piscinas, atividades recreativas e uma gastronomia de qualidade, é o lugar perfeito para relaxar e se divertir em um ambiente sofisticado.`,
    detalhes: `
      <h3>Day Use no Hotel La Dolce Vita! ⛱️</h3>
      <p>Aproveite um dia com tudo incluso em um resort incrível!</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚐 Transporte de Ida e Volta</li>
        <li>🍔 Lanchinho especial na ida</li>
        <li>🍽️ Almoço italiano</li>
        <li>☕ Chá da tarde</li>
        <li>🍹 Bebidas All Inclusive</li>
        <li>🎟️ Acesso às Dependências Externas e Recreações</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Acesso aos Apartamentos e Uso de Roupas de Banho.</li>
        <li>❌ Qualquer outro serviço não mencionado.</li>
      </ul>

      <h4>💰 Valor do Pacote</h4>
      <p><strong>A partir de 13 anos:</strong> R$ 620,00 (à Vista ou 10x de R$ 62,00).</p>
      <p><strong>De 6 a 12 anos:</strong> R$ 520,00 (à Vista ou 10x de R$ 52,00).</p>
      <p><strong>De 0 a 5 anos:</strong> R$ 60,00 (à Vista).</p>
      <p><em>Pagamento em até 10x no PIX ou Cartão de Crédito.</em></p>

      <h4>🗓️ Embarque e Horários</h4>
      <p><strong>Embarque:</strong> A Combinar (Grupos a partir de 14 pessoas) ou UPA Pinheirinho.</p>
      <p><strong>Saída:</strong> 07:00 | <strong>Retorno:</strong> 18:00</p>
    `,
    galleryImages: ["/img/destinos/hotel-la-dolce-vita.jpg"]
  },
  {
    slug: "hotel-mata-atlantica",
    name: "Hotel Mata Atlântica 🏞",
    imageFile: "/img/destinos/hotelmataatlantica.jpg",
    dates: ["6 Dez - CMEI Cajuru e Salomé Viegas", "7 Dez - Agência, CMEI Ivo Ázua e Coqueiros"],
    description: `Relaxe em um refúgio cercado pela exuberante Mata Atlântica. O hotel oferece piscinas, trilhas ecológicas e um ambiente tranquilo para um dia de descanso e contato direto com a natureza, longe da agitação da cidade.`,
    detalhes: `
      <h3>Day Use no Mata Atlântica Park Hotel! ⛱️</h3>
      <p>Um dia de lazer e natureza com gastronomia completa.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚐 Transporte de Ida e Volta</li>
        <li>☕ Café da Manhã</li>
        <li>🍛 Almoço (bebidas não inclusas)</li>
        <li>☕ Café da Tarde</li>
        <li>🎟️ Acesso às Dependências Externas e Recreações</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Acesso aos Apartamentos e Roupas de Banho.</li>
        <li>❌ Bebidas e produtos de comanda.</li>
      </ul>

      <h4>💰 Valor do Pacote</h4>
      <p><strong>A partir de 6 anos:</strong> R$ 550,00 (à Vista ou 10x de R$ 55,00).</p>
      <p><strong>De 0 a 5 anos:</strong> R$ 60,00 (à Vista).</p>
      <p><em>Pagamento em até 10x no PIX ou Cartão de Crédito.</em></p>
      
      <h4>🗓️ Embarque e Horários</h4>
      <p><strong>Embarque:</strong> A Combinar (Grupos a partir de 14 pessoas) ou UPA Pinheirinho.</p>
      <p><strong>Saída:</strong> 06:30 (dia 06/12) / 07:30 (dia 07/12)</p>
      <p><strong>Retorno:</strong> 17:00 (dia 06/12) / 18:00 (dia 07/12)</p>
    `,
    galleryImages: ["/img/destinos/hotelmataatlantica.jpg"]
  },
  {
    slug: "maria-fumaca-rio-negrinho",
    name: "Maria Fumaça Rio Negrinho 🚂🏞",
    imageFile: "/img/destinos/mariafumacario.jpg",
    dates: ["11 Out"],
    description: `Faça uma viagem no tempo a bordo de uma autêntica locomotiva a vapor. O passeio de Maria Fumaça em Rio Negrinho encanta com suas paisagens rurais, música e a nostalgia de uma era dourada da ferrovia.`,
    detalhes: `
      <h3>Passeio de Maria Fumaça em Rio Negrinho! 🚂</h3>
      <p>Um bate e volta nostálgico e cheio de charme.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚌 Transporte Executivo (micro/van)</li>
        <li>🎟️ Ingresso para o Trem</li>
        <li>🍽️ Almoço (bebidas à parte)</li>
        <li>🥤 Lanche e água no ônibus</li>
        <li>🙋‍♂️ Guia da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Adulto:</strong> R$ 400,00 (ou 8x de R$ 50,00).</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 360,00 (ou 8x de R$ 45,00).</p>
      <p><strong>Crianças de colo (0 a 2 anos):</strong> Grátis.</p>
      <p><em>Pagamento em até 10x sem juros no cartão para compras acima de R$ 500.</em></p>
      
      <h4>🗓️ Embarque e Horários</h4>
      <p><strong>Embarque:</strong> UPA Pinheirinho</p>
      <p><strong>Saída:</strong> 06:30 | <strong>Retorno:</strong> 18:00</p>
    `,
    galleryImages: ["/img/destinos/mariafumacario.jpg"]
  },
  {
    slug: "rio-de-janeiro-bate-e-volta",
    name: "Rio de Janeiro Bate e Volta 🌆",
    imageFile: "/img/destinos/riodejaneiro.jpeg",
    dates: ["15 Out"],
    description: `Descubra a Cidade Maravilhosa em um dia intenso e inesquecível! Conheça os principais cartões-postais do Rio de Janeiro, sinta a energia contagiante da cidade e aproveite cada momento nesta metrópole cheia de vida.`,
    detalhes: `
      <h3>Bate e Volta Aéreo para o Rio de Janeiro! ✈️</h3>
      <p>Um dia intenso para conhecer os principais pontos turísticos da Cidade Maravilhosa.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Transporte Aéreo Ida e Volta (CWB ↔ RIO)</li>
        <li>🏙️ City Tour completo com guia</li>
        <li>🚌 Transfer de ônibus para os roteiros</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>📍 Roteiro Previsto</h4>
      <ul>
        <li>Sambódromo Sapucaí</li>
        <li>Estádio Maracanã (visita externa)</li>
        <li>Escadaria Selarón</li>
        <li>Catedral do Rio</li>
        <li>Boulevard Olímpico, Pier Mauá e Museu do Amanhã (visita externa)</li>
        <li>Cristo Redentor (com Ingresso Incluso)</li>
      </ul>

      <h4>💰 Valor por Pessoa</h4>
      <p><strong>R$ 1.350,00</strong> (ou 10x de R$ 135,00 no PIX ou Cartão).</p>

      <h4>✈️ Informações de Voo (15/10/2025)</h4>
      <ul>
        <li><strong>Ida:</strong> Saída CWB 07:15 -> Chegada RIO 08:40</li>
        <li><strong>Volta:</strong> Saída GIG 21:10 -> Chegada CWB 00:00 (com conexão)</li>
        <li><em>Embarque no Aeroporto Afonso Pena.</em></li>
      </ul>
    `,
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
        <li>🛡️ Seguro Viagem</li>
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
    detalhes: `
      <h3>Day Use no Capivari EcoResort (Mabu)! ⛱️</h3>
      <p>Relaxe e aproveite um dia com estrutura completa de lazer e gastronomia.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚐 Transporte de Ida e Volta</li>
        <li>☕ Café da Manhã</li>
        <li>🍽️ Almoço (não inclui bebidas)</li>
        <li>☕ Café da Tarde</li>
        <li>🎟️ Acesso às Dependências Externas e Recreações</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Acesso aos Apartamentos e Uso de Roupas de Banho.</li>
      </ul>

      <h4>💰 Valor do Pacote</h4>
      <p><strong>A partir de 11 anos:</strong> R$ 585,00 (à Vista ou 10x de R$ 58,50).</p>
      <p><strong>De 6 a 10 anos:</strong> R$ 480,00 (à Vista ou 10x de R$ 48,00).</p>
      <p><strong>De 0 a 5 anos:</strong> R$ 60,00 (à Vista).</p>
      <p><em>Pagamento parcelado no PIX ou Cartão de Crédito.</em></p>
      
      <h4>🗓️ Embarque e Horários</h4>
      <p><strong>Embarque:</strong> A combinar</p>
      <p><strong>Saída:</strong> 07:00 | <strong>Retorno:</strong> 18:00</p>
    `,
    galleryImages: ["/img/destinos/capivari.jpg"]
  },
  {
    slug: "recanto-saltinho",
    name: "Recanto Saltinho 🌿🌅",
    imageFile: "/img/destinos/saltinho.jpg",
    dates: ["15 Nov"],
    description: `Passe um dia em um paraíso natural com cachoeiras e paisagens de tirar o fôlego. O Recanto Saltinho é perfeito para quem busca paz, ar puro e um mergulho refrescante em águas naturais.`,
    detalhes: `
      <h3>Um dia no paraíso do Recanto Saltinho! 🏞️</h3>
      <p>Aproveite um dia com muita diversão, natureza e cachoeiras encantadoras em Tijucas do Sul.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚍 Transporte Exclusivo Ida e Volta</li>
        <li>🎟️ Ingresso Day Use para o Parque da Cachoeira</li>
        <li>🍽️ Almoço Buffet Livre (não inclui bebidas)</li>
        <li>🎟️ Visita ao Museu Sérgius Erdelyi</li>
        <li>🙋‍♂️ Coordenador Acompanhante da Agência</li>
        <li>🛡️ Seguro Transporte</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>A partir de 11 anos:</strong> R$ 180,00 (à Vista ou 4x de R$ 45,00 no PIX).</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 140,00 (à Vista ou 4x de R$ 35,00 no PIX).</p>
      <p><strong>Até 5 anos (no colo):</strong> FREE.</p>

      <h4>📍 Roteiro Previsto</h4>
      <p>Manhã de caminhada contemplativa pela cachoeira Saltinho, Ilha dos Namorados e trilha do Morro do Cristo. Tarde livre para banho de rio e visita ao Museu e Capela.</p>

      <h4>🚌 Embarque (15/11)</h4>
      <ul>
        <li><strong>08:00:</strong> UPA Pinheirinho</li>
        <li><strong>08:40:</strong> São José dos Pinhais (Posto Pinheirão)</li>
        <li><strong>Retorno:</strong> 18:00</li>
      </ul>
    `,
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
    detalhes: `
      <h3>Encantos de Morretes e Antonina! 🌄</h3>
      <p>Conheça as 2 cidades históricas mais belas do Paraná em um dia.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚍 Transporte Exclusivo Ida e Volta</li>
        <li>🥤 Lanchinho Especial na Ida</li>
        <li>🍽️ Almoço em Morretes com Sobremesa (não inclui bebidas)</li>
        <li>📍 Tour por Morretes (Lojinhas, Artesanatos, Sorveterias)</li>
        <li>📍 Tour por Antonina (Fábrica de Bala de Banana, Igreja)</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Transporte</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>A partir de 11 anos:</strong> R$ 180,00 (ou 4x de R$ 45,00 no PIX).</p>
      <p><strong>De 6 a 10 anos:</strong> R$ 160,00 (ou 4x de R$ 40,00 no PIX).</p>
      <p><strong>Até 5 anos (no colo):</strong> FREE.</p>

      <h4>🗓️ Embarque e Horários</h4>
      <p><strong>Embarque:</strong> UPA Pinheirinho</p>
      <p><strong>Saída:</strong> 07:00 | <strong>Retorno:</strong> 16:00</p>
    `,
    galleryImages: ["/img/destinos/antonina.jpg"]
  },
  {
    slug: "nativa-ecoresort",
    name: "Nativa EcoResort 🏨",
    imageFile: "/img/destinos/nativaresort.jpeg",
    dates: ["14 Dez - CMEI Osternack, Olga Benário e N S Luz"],
    description: `Um dia de imersão na natureza com o conforto de um resort. O Nativa EcoResort oferece atividades de lazer, piscinas e uma atmosfera relaxante, ideal para quem quer escapar da rotina e se reconectar.`,
    detalhes: `
      <h3>Day Use no Nativa Eco Hotel! ⛱️</h3>
      <p>Um dia de imersão na natureza com o conforto de um resort.</p>

      <h4>O que está incluso?</h4>
      <ul>
        <li>🚐 Transporte de Ida e Volta</li>
        <li>☕ Café da Manhã</li>
        <li>🍽️ Almoço (não inclui bebidas)</li>
        <li>☕ Café da Tarde</li>
        <li>🎟️ Acesso às Dependências Externas e Recreações</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Bebidas e produtos de comanda.</li>
        <li>❌ Acesso aos Apartamentos e Uso de Roupas de Banho.</li>
      </ul>

      <h4>💰 Valor do Pacote</h4>
      <p><strong>A partir de 11 anos:</strong> R$ 450,00 (à Vista ou 10x de R$ 45,00).</p>
      <p><strong>De 6 a 10 anos:</strong> R$ 400,00 (à Vista ou 10x de R$ 40,00).</p>
      <p><strong>De 0 a 5 anos:</strong> R$ 60,00 (à Vista).</p>
      <p><em>Pagamento em até 10x no PIX ou Cartão de Crédito.</em></p>
      
      <h4>🗓️ Embarque e Horários</h4>
      <p><strong>Embarque:</strong> A Combinar (Grupos a partir de 14 pessoas) ou UPA Pinheirinho.</p>
      <p><strong>Saída:</strong> 07:00 | <strong>Retorno:</strong> 18:00</p>
    `,
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
        <li>🛡️ Seguro Aéreo</li>
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
    detalhes: `
      <h3>Explore São Luís e os Lençóis Maranhenses!</h3>
      <p>Uma viagem para um dos cenários mais espetaculares do Brasil.</p>

      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Passagem Aérea Ida e Volta</li>
        <li>🚌 Transfer São Luís / Barreirinhas</li>
        <li>🏨 Hospedagem com café da manhã</li>
        <li>🚙 Passeio 4x4 no Parque Nacional dos Grandes Lençóis Maranhenses</li>
        <li>🚤 Passeio de lancha pelo Rio Preguiça</li>
      </ul>

      <h4>Passeios Opcionais:</h4>
      <ul>
        <li>🏝️ Passeio em Atins</li>
        <li>🏞️ Passeio em Salto Amoro</li>
      </ul>

      <h4>💰 Valor por Pessoa</h4>
      <p>Entrada de R$ 150,00 + 10x de R$ 340,00.</p>
      
      <h4>✈️ Informações de Voo</h4>
      <ul>
        <li><strong>Ida (12/11):</strong> Saída 11:05 -> Chegada 17:05</li>
        <li><strong>Volta (18/11):</strong> Saída 17:50 -> Chegada 00:05 (+1)</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/lencoismaranhenses.webp"]
  },
  {
    slug: "rio-de-janeiro-rj",
    name: "Rio de Janeiro / RJ",
    imageFile: "/img/destinos/riodejaneiro.jpeg",
    dates: ["9 a 11 Jan (Aéreo ✈)", "22 a 25 Jan (Rodoviário 🚌)", "27/02 a 01/03 (Aéreo ✈)"],
    description: `Visite a Cidade Maravilhosa e seus pontos turísticos mundialmente famosos. Do Cristo Redentor ao Pão de Açúcar, passando pelas praias de Copacabana e Ipanema, o Rio de Janeiro oferece uma experiência vibrante e inesquecível.`,
    detalhes: `
      <h3>Conheça a Cidade Maravilhosa!</h3>
      <p>Uma viagem completa para explorar os principais cartões-postais do Rio de Janeiro com conforto e segurança.</p>
      
      <h4>O que está incluso no pacote?</h4>
      <ul>
        <li>✈️ Transporte Aéreo ou 🚍 Rodoviário Exclusivo (conforme data)</li>
        <li>🛏️ 2 Diárias de Hotel em Copacabana</li>
        <li>☕ 2 Cafés da Manhã</li>
        <li>🏙️ City Tour pela cidade com guia</li>
        <li>🎟️ 1 Ingresso para o Cristo Redentor</li>
        <li>🎟️ 1 Ingresso para o Pão de Açúcar (somente no pacote rodoviário)</li>
        <li>🚌 Transfer para os roteiros</li>
        <li>🙋‍♂️ Guia de Turismo da Agência e Guia Local</li>
        <li>🛡️ Seguro Viagem/Transporte</li>
      </ul>

      <h4>📍 Roteiro Previsto (Sábado)</h4>
      <ul>
        <li>Sambódromo Sapucaí</li>
        <li>Estádio Maracanã (visita externa)</li>
        <li>Catedral do Rio e Arco da Lapa</li>
        <li>Escadaria Selarón</li>
        <li>Cristo Redentor (ingresso incluso)</li>
        <li>Pão de Açúcar (ingresso incluso no pacote rodoviário)</li>
      </ul>

      <h4>💰 Valores por Pessoa (Rodoviário 22-25/01)</h4>
      <p><strong>A partir de 11 anos:</strong> R$ 1.294,00 à vista ou Entrada de R$ 100,00 + 6x de R$ 199,00 no PIX.</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 1.174,00 à vista ou Entrada de R$ 100,00 + 6x de R$ 179,00 no PIX.</p>
      <p><strong>Crianças de colo (até 5 anos):</strong> R$ 360,00 à vista ou 6x de R$ 60,00.</p>
      <p><em>Consulte os valores para os pacotes aéreos e condições no cartão de crédito.</em></p>
    `,
    galleryImages: ["/img/destinos/riodejaneiro.jpeg"]
  },
  {
    slug: "jalapao-to",
    name: "Jalapão / TO",
    imageFile: "/img/destinos/jalapao.jpg",
    dates: ["29 Out a 2 Nov"],
    description: `Aventure-se no coração do Brasil em uma expedição pelo Jalapão. Conheça os fervedouros, onde é impossível afundar, cachoeiras de água esmeralda e as dunas douradas que compõem um dos cenários mais selvagens e belos do país.`,
    detalhes: `
      <h3>Uma expedição ao paraíso chamado Jalapão! ❤️</h3>
      <p>Viva uma aventura inesquecível no coração do Brasil durante o feriado.</p>

      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Passagem Aérea para Palmas</li>
        <li>🏨 Hospedagem em Palmas e no Jalapão</li>
        <li>🍽️ Pensão Completa (Café, Almoço e Jantar) durante a expedição</li>
        <li>🚙 Veículo 4x4 para todo o roteiro</li>
        <li>🥤 Serviço de bordo com água e lanches</li>
        <li>🎟️ Entrada em todos os atrativos</li>
        <li>🧍🏽 Motorista e Guia Local</li>
        <li>📸 Fotógrafo para registrar os momentos</li>
      </ul>

      <h4>💰 Valor por Pessoa</h4>
      <p><strong>Quarto Triplo:</strong> Entrada de R$ 100,00 + 12x de R$ 305,00.</p>
      <p><strong>Quarto Duplo:</strong> Entrada de R$ 100,00 + 12x de R$ 315,00.</p>
      
      <h4>✈️ Informações de Voo</h4>
      <ul>
        <li><strong>Ida (29/10):</strong> Saída 18:50 -> Chegada 01:55 (+1)</li>
        <li><strong>Volta (02/11):</strong> Saída 03:15 -> Chegada 11:00</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/jalapao.jpg"]
  },
  {
    slug: "jericoacoara-ce",
    name: "Jericoacoara / CE",
    imageFile: "/img/destinos/jericoacara.jpg",
    dates: ["21 a 24 Jan"],
    description: `Relaxe em um paraíso de ventos fortes, dunas e lagoas de águas claras. Jericoacoara é o destino perfeito para quem busca tranquilidade, esportes aquáticos e um pôr do sol espetacular na famosa Duna do Pôr do Sol.`,
    detalhes: `
      <h3>Férias de Janeiro em Jericoacoara! 🌴</h3>
      <p>Um dos destinos mais desejados do Brasil com um pacote completo.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Passagem Aérea Ida e Volta</li>
        <li>🏨 3 diárias de hospedagem com café da manhã</li>
        <li>🚙 Passeio de 4x4</li>
        <li>🎟️ Entradas para os passeios mencionados</li>
      </ul>

      <h4>📍 Roteiro Previsto</h4>
      <ul>
        <li>Alchymist Beach Club na Lagoa do Paraíso</li>
        <li>Buraco Azul</li>
        <li>Caminhada da Pedra Furada</li>
        <li>Árvore da Preguiça</li>
        <li>Pôr do sol nas Dunas</li>
      </ul>
      <p><em>Obs: Taxa ambiental de R$ 60,00 (opcional) não inclusa.</em></p>

      <h4>💰 Valor por Pessoa</h4>
      <p><strong>Quarto Triplo/Quádruplo:</strong> Entrada de R$ 199,90 + 10x de R$ 380,00.</p>
      <p><strong>Quarto Duplo:</strong> Entrada de R$ 199,90 + 10x de R$ 390,00.</p>

      <h4>✈️ Informações de Voo</h4>
      <ul>
        <li><strong>Ida (21/01):</strong> Saída 06:00 -> Chegada 12:10</li>
        <li><strong>Volta (24/01):</strong> Saída 12:50 -> Chegada 23:55</li>
      </ul>
    `,
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
    detalhes: `
      <h3>Descubra Foz do Iguaçu, Paraguai e Argentina! 🌈</h3>
      <p>Uma viagem para a tríplice fronteira com pacotes aéreos e rodoviários completos.</p>
      
      <h4>Pacote Aéreo (25 a 28/01)</h4>
      <ul>
        <li>✈️ Transporte Aéreo Ida e Volta</li>
        <li>🏨 3 Diárias de Hotel com café da manhã</li>
        <li>🚌 Transfers para todos os roteiros</li>
        <li>🎟️ Ingresso Dreams Park (6 atrações)</li>
        <li>🎟️ Ingresso para o Parque das Aves</li>
        <li>🎟️ Ingresso para as Cataratas do Iguaçu</li>
        <li>🙋 Guia Acompanhante e Seguro Viagem</li>
      </ul>
      <p><strong>💰 Valor (Aéreo):</strong> A partir de R$ 2.100,00 (ou 10x de R$ 210,00).</p>

      <h4>Pacote Rodoviário (28 a 30/11)</h4>
      <ul>
        <li>➡ Transporte em ônibus executivo</li>
        <li>➡ 1 Diária com café da manhã</li>
        <li>➡ Translado para compras no Paraguai</li>
        <li>➡ Translado para a Argentina (Puerto Iguazú)</li>
        <li>➡ Guia de Turismo</li>
      </ul>
      <p><strong>💰 Valor (Rodoviário):</strong> R$ 700,00 por pessoa (ou 10x de R$ 70,00).</p>
    `,
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
    detalhes: `
      <h3>Excursão para Aparecida do Norte ⛪</h3>
      <p>Uma viagem de fé e devoção ao maior santuário mariano do mundo.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚎 Transporte em ônibus ida e volta</li>
        <li>🛏️ Hospedagem em apartamento (duplo, triplo ou quádruplo)</li>
        <li>☕ 2 cafés da manhã</li>
        <li>🍝 2 almoços</li>
        <li>🥘 1 Jantar</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Adulto:</strong> 10x de R$ 80,00.</p>
      <p><strong>Crianças (6 a 10 anos):</strong> 10x de R$ 55,00.</p>
      <p><strong>Até 4 anos (no colo):</strong> Grátis.</p>
      
      <h4>🗓️ Embarque (26/09)</h4>
      <p><strong>Horário:</strong> 18:30</p>
    `,
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
    dates: ["5 a 8 Set", "21 a 23 Fev"],
    description: `Relaxe nas águas termais de Marcelino Ramos. Com propriedades terapêuticas, as piscinas do balneário são um convite ao descanso e ao bem-estar, em meio a uma paisagem natural encantadora.`,
    detalhes: `
      <h3>Relaxe nas Termas de Marcelino Ramos! 💦</h3>
      <p>Um lugar incrível com águas termais e muita natureza.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚌 Transporte Ida e Volta</li>
        <li>🏨 Hospedagem</li>
        <li>☕ 2 cafés da manhã</li>
        <li>🍽️ 2 almoços</li>
        <li>🎵 1 jantar com música ao vivo</li>
        <li>🎟️ 1 ingresso para as piscinas termais</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Adulto:</strong> R$ 760,00 (ou 8x de R$ 95,00).</p>
      <p><strong>Crianças (6 a 10 anos):</strong> R$ 500,00.</p>
      <p><strong>Crianças (5 anos):</strong> R$ 150,00.</p>
      
      <h4>🗓️ Embarque</h4>
      <p><strong>Local:</strong> UPA Pinheirinho | <strong>Horário:</strong> 22:00</p>
    `,
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
    detalhes: `
      <h3>Descubra a magia de Ametista do Sul! ✨💎</h3>
      <p>Uma viagem para a capital mundial da pedra ametista.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚍 Transporte ida e volta</li>
        <li>🛏️ 1 Pernoite em Hotel com café da manhã</li>
        <li>⛪ Visita à Igreja revestida de Ametista</li>
        <li>💎 Visita ao Museu de Mineralogia e Pirâmide Esotérica</li>
        <li>🚂 Passeio de Trenzinho</li>
        <li>💦 Ingresso para o Parque Aquático Belvedere</li>
        <li>🙋‍♂️ Guia Local e da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Refeições e bebidas não mencionadas.</li>
        <li>❌ Almoço opcional no restaurante subterrâneo.</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Acima de 11 anos:</strong> R$ 1.220,00 (Entrada R$ 20 + 10x de R$ 120,00 no PIX).</p>
      <p><strong>De 6 a 10 anos:</strong> R$ 970,00 (Entrada R$ 20 + 10x de R$ 95,00 no PIX).</p>
      <p><strong>Até 5 anos (no colo):</strong> R$ 60,00.</p>

      <h4>🗓️ Embarque (26/09)</h4>
      <p><strong>Local:</strong> UPA Pinheirinho | <strong>Horário:</strong> 19:30</p>
    `,
    galleryImages: ["/img/destinos/ametista.jpg"]
  },
  {
    slug: "sao-paulo-sp",
    name: "São Paulo / SP",
    imageFile: "/img/destinos/saopaulo.jpg",
    dates: ["18 e 19 Out"],
    description: `Mergulhe na capital cultural e gastronômica do Brasil. São Paulo oferece uma infinidade de opções, desde museus e teatros até parques e uma culinária diversificada que agrada a todos os gostos.`,
    detalhes: `
      <h3>Descubra São Paulo em 2 dias! 🏙️</h3>
      <p>Um roteiro cultural e gastronômico pela maior cidade do Brasil.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Passagem Aérea Ida e Volta</li>
        <li>🏨 1 noite de hotel no centro com café da manhã</li>
        <li>🙋‍♂️ Guia credenciado</li>
        <li>🎟️ Passeios inclusos</li>
      </ul>

      <h4>📍 Roteiro Previsto</h4>
      <ul>
        <li>Museu do Ipiranga e Mosteiro da Luz</li>
        <li>MASP e Parque Ibirapuera</li>
        <li>Pinacoteca e Catedral da Sé</li>
        <li>Mercado Municipal e a famosa 25 de Março</li>
        <li><em>Jantar opcional no Bexiga.</em></li>
      </ul>
      
      <h4>💰 Valor por Pessoa</h4>
      <p><strong>10x de R$ 148,00.</strong></p>

      <h4>✈️ Informações de Voo</h4>
      <ul>
        <li><strong>Ida (18/10):</strong> Saída 06:50 -> Chegada 07:55</li>
        <li><strong>Volta (19/10):</strong> Saída 18:50 -> Chegada 19:55</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/saopaulo.jpg"]
  },
  {
    slug: "arraial-do-cabo-rj",
    name: "Arraial do Cabo / RJ",
    imageFile: "/img/destinos/arraialdocabo.jpg",
    dates: ["24 a 26 Out", "12 a 14 Jan (Aéreo ✈)", "27/02 a 01/03 (Aéreo ✈)"],
    description: `Conheça o 'Caribe Brasileiro' e suas praias de areia branca e águas transparentes. Arraial do Cabo é o paraíso dos mergulhadores e um destino perfeito para quem busca paisagens de tirar o fôlego.`,
    detalhes: `
      <h3>Venha para o Caribe Brasileiro: Arraial do Cabo! 🏝️</h3>
      <p>Pacotes aéreos para você curtir o paraíso de águas cristalinas.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Transporte Aéreo Ida e Volta</li>
        <li>🛏️ 2 Diárias de Hospedagem em Pousada</li>
        <li>☕ 2 Cafés da Manhã</li>
        <li>🚌 Transfer para os Passeios</li>
        <li>🎟️ Passeio de Barco (60 min)</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem Aérea</li>
      </ul>

      <h4>📍 Roteiro do Passeio de Barco</h4>
      <ul>
        <li>Praia da Ilha do Farol</li>
        <li>Fenda da Aparição e Gruta Azul (panorâmico)</li>
        <li>Pontal do Atalaia</li>
        <li>Praia do Forno com parada para mergulho</li>
      </ul>
      <p><em>Passeio de buggy é opcional e não incluso.</em></p>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Acima de 11 anos:</strong> R$ 1.990,00 (à Vista ou 10x de R$ 199,00 no PIX).</p>
      <p><strong>De 0 a 10 anos:</strong> R$ 1.890,00 (à Vista ou 10x de R$ 189,00 no PIX).</p>
      <p><em>Consulte condições no Cartão de Crédito.</em></p>
    `,
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
    detalhes: `
      <h3>Descubra as maravilhas de Vitória e Guarapari/ES! 🌄</h3>
      <p>Embarque em um feriadão prolongado para conhecer as belezas do Espírito Santo, visitando Vitória, Vila Velha e Guarapari.</p>

      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Transporte Aéreo de Ida e Volta</li>
        <li>🛏️ 4 Diárias de Hospedagem com café da manhã</li>
        <li>🚌 Transfer para aeroporto e passeios</li>
        <li>🙋‍♂️ Guia de Turismo da Agência e Guia Local</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>

      <h4>📍 Roteiro de Passeios Inclusos:</h4>
      <ul>
        <li>⛰️ <strong>Montanhas Capixabas:</strong> Explore a charmosa cidade de Domingos Martins e admire a famosa Pedra Azul.</li>
        <li>🏙️ <strong>City Tour em Vila Velha e Vitória:</strong> Visite o Convento da Penha, a Catedral, o Hortomercado e outros pontos históricos.</li>
        <li>🏖️ <strong>Praia de Guarapari:</strong> Curta um dia de sol e mar em uma das praias mais famosas do estado.</li>
      </ul>
      
      <h4>💰 Valor por Pessoa:</h4>
      <p><strong>R$ 2.980,00</strong> (à vista no PIX ou em até 10x sem juros no Cartão de Crédito).</p>
      <p>Ou <strong>6x de R$ 530,00</strong> no PIX.</p>

      <h4>✈️ Informações de Voo (sujeito a alterações):</h4>
      <ul>
        <li><strong>Ida (19/11):</strong> Saída CWB 19:20 -> Chegada VIX 23:40 (com conexão)</li>
        <li><strong>Volta (23/11):</strong> Saída VIX 11:20 -> Chegada CWB 16:10 (com conexão)</li>
      </ul>
    `,
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
        <li>🛡️ Seguro Transporte</li>
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
    detalhes: `
      <h3>Salvador e Morro de São Paulo: O melhor da Bahia!</h3>
      <p>Um roteiro completo unindo a cultura de Salvador com o paraíso de Morro de São Paulo.</p>

      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Transporte Aéreo de Ida e Volta</li>
        <li>🛏️ 6 Diárias em Salvador + 2 Diárias em Morro de São Paulo</li>
        <li>☕ 6 Cafés da Manhã</li>
        <li>🚌 Transfer Terrestre e Semi-Terrestre para todos os deslocamentos</li>
        <li>🙋‍♂️ Guia de Turismo da Agência e Local</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>
      
      <h4>📍 Passeios Inclusos:</h4>
      <ul>
        <li>Praia do Forte e Guarajuba</li>
        <li>Ilha do Frade e Itaparica (de barco)</li>
        <li>Morro de São Paulo</li>
        <li>City Tour de 8 horas em Salvador</li>
      </ul>

      <h4>💰 Valor do Pacote por Pessoa</h4>
      <p><strong>R$ 3.980,00</strong> (à Vista ou 12x de R$ 333,00 no PIX).</p>
      <p><em>Consulte parcelamento em até 10x sem juros no Cartão de Crédito.</em></p>
    `,
    galleryImages: ["/img/destinos/morrodesp.webp"]
  },
  {
    slug: "costao-do-santinho-sc-all-inclusive",
    name: "Costão do Santinho / SC - All Inclusive",
    imageFile: "/img/destinos/costaosaltinho.jpg",
    dates: ["19 a 21 Abr"],
    description: `Desfrute de uma experiência de luxo e conforto em um dos resorts mais premiados do Brasil. Com sistema All Inclusive, o Costão do Santinho oferece gastronomia de alta qualidade, lazer e uma vista espetacular para o mar.`,
    detalhes: `
      <h3>Feriadão no Costão do Santinho All Inclusive! 🏖️</h3>
      <p>Aproveite uma experiência de luxo com tudo incluso em um dos melhores resorts do Brasil.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>🚐 Transporte de Ida e Volta</li>
        <li>🛏️ 2 Diárias em Hospedagem ALL INCLUSIVE</li>
        <li>🍽️ Todas as refeições, lanches e aperitivos</li>
        <li>🍸 Bebidas alcoólicas e não alcoólicas à vontade</li>
        <li>🎟️ Acesso a toda a estrutura e atividades do resort</li>
        <li>🙋‍♂️ Guia de Turismo da Agência</li>
        <li>🛡️ Seguro Viagem</li>
      </ul>
      <p><em>Gastronomia e bebidas disponíveis das 07:00 da manhã às 02:00 da madrugada.</em></p>

      <h4>💰 Valores 2º Lote (por pessoa)</h4>
      <p><strong>Apartamento Luxo 2 Dorm (quarto duplo):</strong> R$ 2.350,00</p>
      <p><strong>Apartamento Luxo 3 Dorm (quarto duplo):</strong> R$ 2.250,00</p>
      <p><strong>Crianças (4 a 11 anos):</strong> R$ 999,00 (com 2 adultos no quarto).</p>
      <p><strong>Crianças (0 a 3 anos):</strong> R$ 60,00.</p>
      <p><em>Pagamento em até 10x sem juros no PIX ou Cartão.</em></p>

      <h4>🗓️ Embarque (19/04)</h4>
      <p><strong>Local:</strong> UPA Pinheirinho | <strong>Horário:</strong> 07:00</p>
    `,
    galleryImages: ["/img/destinos/costaosaltinho.jpg"]
  },
  {
    slug: "joao-pessoa-paraiba",
    name: "João Pessoa / Paraíba 🌴",
    imageFile: "/img/destinos/joaopessoa.jpg",
    dates: ["16 a 20 Jul"],
    description: "Descubra a capital paraibana, onde o sol nasce primeiro nas Américas. Conheça praias deslumbrantes como Coqueirinho e Tambaba, e mergulhe nas piscinas naturais do Seixas em uma viagem inesquecível.",
    detalhes: `
      <h3>Férias de Julho em João Pessoa! 🌴</h3>
      <p>Embarque para o coração do nordeste e viva dias inesquecíveis nesse paraíso brasileiro!</p>

      <h4>✅ O que está Incluso?</h4>
      <ul>
        <li>✈️ Passagem Aérea de ida e volta</li>
        <li>🛏️ 4 diárias de hospedagem em hotel</li>
        <li>☕ 3 cafés da manhã</li>
        <li>🚌 Transfer Aeroporto ↔️ Hotel</li>
        <li>🙋‍♂️ Guia acompanhante da Luhmatur</li>
      </ul>

      <h4>🎟️ Passeios Inclusos</h4>
      <ul>
        <li>Passeio Litoral Sul (Praia do Coqueirinho e Tambaba)</li>
        <li>Passeio às Piscinas Naturais do Seixas</li>
        <li>City Tour em João Pessoa</li>
      </ul>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Quarto Duplo:</strong> R$ 3.999,99 à vista (ou Entrada R$150 + 10x R$385).</p>
      <p><strong>Quarto Triplo:</strong> R$ 3.950,00 à vista (ou Entrada R$150 + 10x R$380).</p>

      <h4>✈️ Informações de Voo (Jul/2026)</h4>
      <ul>
        <li><strong>Ida (16/07):</strong> Saída CWB 19:55 -> Chegada JPA 01:30 (+1)</li>
        <li><strong>Volta (20/07):</strong> Saída JPA 02:10 -> Chegada CWB 09:50</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/joaopessoa.jpg"]
  },
  {
    slug: "maceio-e-maragogi-al",
    name: "Maceió & Maragogi / AL ✨🌴",
    imageFile: "/img/destinos/maceio-maragogi.jpg",
    dates: ["11 a 15 Jul"],
    description: "Explore o Caribe Brasileiro em um roteiro deslumbrante por Maceió e Maragogi. Relaxe em hotéis à beira-mar, visite as famosas piscinas naturais e encante-se com as praias de São Miguel dos Milagres e Francês.",
    detalhes: `
      <h3>Maceió & Maragogi: O Paraíso espera por você! ✨🌴</h3>
      <p>Suas férias de julho 2026 no Caribe Brasileiro, com um pacote completo para você só relaxar e aproveitar.</p>

      <h4>✅ O que está Incluso?</h4>
      <ul>
        <li>✈️ Passagem aérea de ida e volta</li>
        <li>🛏️ 4 diárias em hotel beira-mar com café da manhã</li>
        <li>🚌 Traslados Aeroporto ↔️ Hotel</li>
        <li>🙋‍♂️ Guia acompanhante da agência</li>
      </ul>
      
      <h4>🌊 Passeios Inclusos</h4>
      <ul>
        <li>Dia em Maragogi</li>
        <li>Dia em São Miguel dos Milagres</li>
        <li>Dia na Praia do Francês</li>
        <li>City Tour em Maceió</li>
      </ul>

      <h4>💰 Investimento por Pessoa</h4>
      <p><strong>Quarto Duplo:</strong> R$ 4.080,00 (Entrada R$100 + 10x R$398 no PIX).</p>
      <p><strong>Quarto Triplo:</strong> R$ 3.990,00 (Entrada R$100 + 10x R$389 no PIX).</p>
      <p><strong>Crianças (até 11 anos):</strong> R$ 3.300,00 (Entrada R$100 + 10x R$320 no PIX).</p>
      <p><em>Consulte condições no cartão de crédito.</em></p>

      <h4>✈️ Informações de Voo (Jul/2026)</h4>
      <ul>
        <li><strong>Ida (11/07):</strong> Saída CWB 12:15 -> Chegada MCZ 17:35</li>
        <li><strong>Volta (15/07):</strong> Saída MCZ 11:00 -> Chegada CWB 17:00</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/maceio-maragogi.jpg"]
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
    detalhes: `
      <h3>Realize seu sonho de conhecer Paris! 🗼🇫🇷</h3>
      <p>Um roteiro internacional incrível para a Cidade Luz.</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Transporte Aéreo de Ida e Volta</li>
        <li>🛏️ 6 Diárias de Hospedagem em Hotel</li>
        <li>☕ 6 Cafés da Manhã</li>
        <li>🚌 Transfer Aeroporto e Passeios</li>
        <li>🙋‍♂️ Guia de Turismo Local</li>
      </ul>

      <h4>📍 City Tour (2 dias)</h4>
      <ul>
        <li><strong>Dia 1:</strong> Sacré Cœur, Montmartre, Muro do Eu Te Amo, Moulin Rouge, Galeria Lafayette, Opera Garnier, Museu do Louvre, Jardim de Tuileries, Torre Eiffel.</li>
        <li><strong>Dia 2:</strong> Notre Dame, Igreja Medalha Milagrosa, Pantheon, Jardim de Luxemburgo, Ponte Alexandre III, Champs Élysées, Arco do Triunfo, Trocadero.</li>
      </ul>
      
      <h4>O que NÃO está incluso?</h4>
      <ul>
        <li>❌ Seguro Viagem Obrigatório.</li>
        <li>❌ Emissão de passaporte ou outros documentos.</li>
        <li>❌ Taxas, produtos e serviços não mencionados.</li>
      </ul>

      <h4>💰 Valor do Pacote por Pessoa</h4>
      <p><strong>R$ 13.500,00</strong> (à Vista no PIX ou 10x sem juros no Cartão de Crédito).</p>
      <p><em>Consulte financiamento via boleto bancário com entrada.</em></p>
    `,
    galleryImages: ["/img/destinos/paris.png"]
  },
  {
    slug: "buenos-aires-corpus-christi",
    name: "Buenos Aires Corpus Christi",
    imageFile: "/img/destinos/buenosaires.jpeg",
    dates: ["3 a 7 Jun"],
    description: `Descubra a 'Paris da América do Sul'! Buenos Aires encanta com sua arquitetura europeia, shows de tango apaixonantes, culinária saborosa e uma atmosfera cultural vibrante em cada esquina.`,
    detalhes: `
      <h3>Feriado de Corpus Christi em Buenos Aires! 🇦🇷</h3>
      <p>Aproveite 5 dias na cidade mais charmosa da América do Sul. (Não precisa de passaporte, apenas RG!)</p>
      
      <h4>O que está incluso?</h4>
      <ul>
        <li>✈️ Passagem aérea com conexão (ida e volta)</li>
        <li>🏨 4 noites em hotel bem localizado</li>
        <li>🥐 4 Cafés da manhã</li>
        <li>🚍 City Tour com guia especializado</li>
      </ul>

      <h4>📍 Roteiro Previsto</h4>
      <p><strong>Dia 1:</strong> Chegada e tarde livre (sugestão: Rua Florida).</p>
      <p><strong>Dia 2:</strong> City Tour (Plaza de Mayo, Casa Rosada, Puerto Madero, Rua Mafalda).</p>
      <p><strong>Dia 3 e 4:</strong> Dias livres para passeios opcionais (La Boca, Recoleta) e gastronomia.</p>
      <p><strong>Dia 5:</strong> Retorno para Curitiba.</p>

      <h4>💰 Valores por Pessoa</h4>
      <p><strong>Quarto Duplo:</strong> R$ 3.290,00 (à vista ou 10x de R$ 329,00).</p>
      <p><strong>Quarto Triplo:</strong> R$ 3.200,00 (à vista ou 10x de R$ 320,00).</p>
      <p><em>Pagamento no Cartão ou Boleto Sem Juros.</em></p>
      
      <h4>✈️ Informações de Voo (03/06 a 07/06)</h4>
      <ul>
        <li><strong>Ida:</strong> Saída 05:20 -> Chegada 12:00</li>
        <li><strong>Volta:</strong> Saída 11:45 -> Chegada 18:40</li>
      </ul>
    `,
    galleryImages: ["/img/destinos/buenosaires.jpeg"]
  }
];

// Junta todas as viagens num só array para facilitar a busca
export const todasAsViagens: Viagem[] = [...newOneDayTrips, ...multiDayTrips, ...internationalTrips];

// Função que encontra uma viagem específica pelo seu slug
export function getViagemPeloSlug(slug: string): Viagem | undefined {
  return todasAsViagens.find((viagem) => viagem.slug === slug);
}