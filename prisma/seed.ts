import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authors = [
  {
    id: "89e91994-c59d-11ed-afa1-0242ac120002",
    name: "Sofia Barros",
    description:
      "Sofia Barros é uma escritora portuguesa apaixonada por histórias que misturam fantasia, romance e mistério. Desde criança, Sofia devorava livros de autores como J.K. Rowling, J.R.R. Tolkien e Neil Gaiman, e sonhava em criar mundos imaginários que encantassem os leitores. Com uma escrita cativante e uma imaginação fértil, Sofia já publicou vários livros que se tornaram best-sellers em Portugal e no Brasil. Seus leitores a consideram uma das novas promessas da literatura fantástica.",
    image: "/author1.jpg",
    books: {},
  },
  {
    id: "89e91de0-c59d-11ed-afa1-0242ac120002",
    name: "João Santos",
    description:
      "João Santos é um escritor português apaixonado por histórias que misturam aventura, mistério e história. Formado em História pela Universidade de Lisboa, João sempre se interessou por narrativas que exploram o passado e o desconhecido. Com uma escrita envolvente e detalhista, João já publicou diversos livros que conquistaram os leitores de Portugal e do Brasil. Seus livros são conhecidos por apresentar personagens marcantes e tramas surpreendentes.",
    image: "/author2.jpg",
    books: {},
  },
  {
    id: "89ea01ec-c59d-11ed-afa1-0242ac120002",
    name: "Maria Silva",
    description:
      "Maria Silva é uma escritora brasileira que se dedica à literatura infantojuvenil. Com formação em Pedagogia, ela acredita no poder da leitura como ferramenta de aprendizado e desenvolvimento pessoal. Seus livros são repletos de aventuras e valores como amizade, coragem e respeito. Maria já recebeu vários prêmios por suas obras, que encantam crianças de todas as idades.",
    image: "/author3.jpg",
    books: {},
  },
  {
    id: "89ea039a-c59d-11ed-afa1-0242ac120002",
    name: "Daniel Pereira",
    description:
      "Daniel Pereira é um escritor brasileiro que se dedica a romances contemporâneos. Com uma escrita poética e sensível, Daniel busca retratar as complexidades do amor e da vida moderna. Seus livros são conhecidos por explorar temas como identidade, família e superação. Daniel já foi finalista de vários prêmios literários e é considerado um dos novos talentos da literatura nacional.",
    image: "/author4.jpg",
    books: {},
  },
  {
    id: "89ea0606-c59d-11ed-afa1-0242ac120002",
    name: "Lena Costa",
    description:
      "Lena Costa é uma escritora portuguesa que se dedica à literatura erótica. Com uma escrita provocante e envolvente, Lena é conhecida por seus romances sensuais que exploram o desejo e a paixão. Seus livros já foram traduzidos para diversos idiomas e são sucesso em vários países. Lena é considerada uma das vozes mais importantes do gênero.",
    image: "/author5.jpg",
    books: {},
  },
  {
    id: "89ea0a2a-c59d-11ed-afa1-0242ac120002",
    name: "Marta Pereira",
    description:
      "Marta Pereira é uma escritora portuguesa que se dedica à literatura juvenil. Com uma escrita leve e divertida, Marta já publicou vários livros que se tornaram populares entre os jovens leitores. Suas histórias são cheias de aventuras, amizade e amor. Marta é uma das escritoras mais queridas pelos jovens portugueses.",
    image: "/author6.jpg",
    books: {},
  },
  {
    id: "89ea0bce-c59d-11ed-afa1-0242ac120002",
    name: "Pedro Lima",
    description:
      "Pedro Lima é um escritor brasileiro que se dedica a livros de não-ficção. Com formação em História e Jornalismo, Pedro busca sempre trazer para seus livros temas relevantes e atuais. Seus livros já abordaram temas como política, economia e sociedade. Pedro é considerado um dos escritores mais importantes da nova geração de autores de não-ficção.",
    image: "/author7.jpg",
    books: {},
  },
  {
    id: "89ea0d36-c59d-11ed-afa1-0242ac120002",
    name: "Ana Rodrigues",
    description:
      "Ana Rodrigues é uma escritora portuguesa que se dedica à literatura de ficção científica. Com uma escrita inventiva e surpreendente, Ana já publicou vários livros que exploram mundos imaginários e tecnologias futuristas. Seus livros são conhecidos por trazer questionamentos e reflexões sobre a sociedade e a tecnologia. Ana é uma das autoras mais importantes da literatura de ficção científica em Portugal.",
    image: "/author8.jpg",
    books: {},
  },
  {
    id: "89ea0eda-c59d-11ed-afa1-0242ac120002",
    name: "Gustavo Lima",
    description:
      "Gustavo Lima é um escritor brasileiro que se dedica a livros de terror. Com uma escrita sombria e perturbadora, Gustavo já publicou vários livros que levam o leitor a sentir medo e tensão. Seus livros são conhecidos por trazer personagens e situações que ficam gravados na mente do leitor. Gustavo é considerado um dos grandes nomes do terror brasileiro.",
    image: "/author9.jpg",
    books: {},
  },
  {
    id: "89ea1114-c59d-11ed-afa1-0242ac120002",
    name: "Carla Fernandes",
    description:
      "Carla Fernandes é uma escritora portuguesa que se dedica à literatura de poesia. Com uma escrita lírica e sensível, Carla busca trazer para seus leitores uma experiência poética e emocionante. Seus livros já foram premiados em vários concursos literários e são admirados por poetas e leitores de todo o mundo.",
    image: "/author10.jpg",
    books: {},
  },
];

const categories = [
  {
    id: "04596fb6-b630-42ce-a4d3-c1c5e891358c",
    name: "Romance",
    description: "Livros de romance",
    image: "",
  },
  {
    id: "94372e8b-9a35-4af9-ad5c-cd71223a1ba1",
    name: "Aventura",
    description: "Livros de aventura",
    image: "",
  },
  {
    id: "fb21d9c4-3592-4664-8a48-a4169b66a411",
    name: "Ficção científica",
    description: "Livros de ficção científica",
    image: "",
  },
  {
    id: "d495b7b6-a925-4f23-b5db-ce7b0fafe930",
    name: "Suspense",
    description: "Livros de suspense",
    image: "",
  },
  {
    id: "547bb015-4626-4d20-9e84-7227c6f8dae1",
    name: "Autoajuda",
    description: "Livros de autoajuda",
    image: "",
  },
  {
    id: "b433b8ca-cc6d-4d29-b791-2e3af554e62a",
    name: "Mistério",
    description: "Livros de mistério",
    image: "",
  },
];

const publishers = [
  {
    id: "89ea6402-c59d-11ed-afa1-0242ac120002",
    name: "Luminar Livros",
    description:
      "Luminar Livros é uma editora que tem como objetivo iluminar a mente dos leitores com obras que expandem horizontes e despertam a imaginação. Especializada em ficção científica, fantasia e literatura de terror, a Luminar Livros busca publicar autores inovadores e provocativos que desafiam os limites da literatura. Com uma equipe apaixonada por livros e uma abordagem criativa, a Luminar Livros é a escolha perfeita para os leitores que buscam novas experiências literárias.",
    image: "",
  },
  {
    id: "89ea6556-c59d-11ed-afa1-0242ac120002",
    name: "Palavras em Movimento",
    description:
      "Palavras em Movimento é uma editora dedicada a publicar livros que provocam reflexões e mudanças na sociedade. Com um catálogo diversificado em áreas como política, história, direitos humanos, meio ambiente e cultura, a Palavras em Movimento busca difundir ideias e promover debates relevantes. A editora valoriza a diversidade de pensamento e a representatividade em suas publicações, e trabalha em colaboração com autores que compartilham seus valores. Se você busca livros que vão além da superfície e tocam o cerne das questões contemporâneas, Palavras em Movimento é a editora ideal para você.",
    image: "",
  },
  {
    id: "89eac0d2-c59d-11ed-afa1-0242ac120002",
    name: "Universo dos Livros",
    description:
      "Universo dos Livros é uma editora que oferece uma experiência única de leitura. Com uma variedade de gêneros que vai desde romances até livros de não-ficção, Universo dos Livros se destaca por oferecer qualidade, criatividade e comprometimento com os leitores. Com obras para todos os gostos e idades, Universo dos Livros é uma excelente escolha para quem busca se aventurar pelo mundo da leitura.",
    image: "",
  },
  {
    id: "89eaf700-c59d-11ed-afa1-0242ac120002",
    name: "Livraria das Ideias",
    description:
      "Livraria das Ideias é uma editora que se dedica a publicar livros que fomentem a reflexão e a discussão em torno das grandes questões da sociedade. Com uma linha editorial que abrange temas como filosofia, política, psicologia e ciências sociais, a Livraria das Ideias busca oferecer obras que desafiem os leitores a pensar além dos lugares-comuns e das verdades estabelecidas. Se você é um leitor curioso e inquieto, a Livraria das Ideias é a editora certa para você.",
    image: "",
  },
];

const books = [
  {
    title: "O Segredo do Templo",
    description:
      "Quando o arqueólogo Pedro recebe uma enigmática carta de um velho amigo, ele é levado a embarcar em uma jornada rumo ao coração da selva amazônica em busca de um antigo templo perdido. Com a ajuda de uma equipe de pesquisadores e guias locais, Pedro se lança em uma aventura perigosa e emocionante que o leva a desvendar segredos guardados há séculos. O Segredo do Templo é um romance de aventura que combina mistério, ação e suspense em uma trama eletrizante.",
    image: "/book1.jpg",
    price: 29.9,
    rating: 4.5,
    author: "89e91994-c59d-11ed-afa1-0242ac120002",
    publisher: "89eaf700-c59d-11ed-afa1-0242ac120002",
    categories: "04596fb6-b630-42ce-a4d3-c1c5e891358c",
  },
  {
    title: "O Lado Sombrio da Cidade",
    description:
      "Quando a jornalista Ana é escalada para investigar uma série de assassinatos brutais na cidade, ela descobre que a verdade por trás dos crimes é ainda mais sombria do que ela poderia imaginar. Em uma corrida contra o tempo, Ana precisa enfrentar seus próprios medos e os perigos da cidade para desvendar o mistério e salvar a vida dos inocentes. O Lado Sombrio da Cidade é um thriller eletrizante que prende a atenção do leitor do começo ao fim.",
    image: "/book2.jpg",
    price: 34.9,
    rating: 4.7,
    author: "89ea1114-c59d-11ed-afa1-0242ac120002",
    publisher: "",
    categories: "",
  },
  {
    title: "A Fortaleza dos Dragões",
    description:
      "Em um reino governado por um tirano cruel, a princesa Lívia é a única esperança de libertação do povo. Com a ajuda de um grupo de guerreiros destemidos, ela se lança em uma missão perigosa para recuperar a lendária Fortaleza dos Dragões e expulsar o tirano do trono. A Fortaleza dos Dragões é um romance de aventura e fantasia que transporta o leitor para um mundo imaginário repleto de magia e perigos.",
    image: "/book3.jpg",
    price: 27.9,
    rating: 4.4,
    author: "89ea1114-c59d-11ed-afa1-0242ac120002",
    publisher: "",
    categories: "",
  },
  {
    title: "A Arte de Lidar com Pessoas",
    description:
      "Em um mundo cada vez mais conectado e competitivo, saber lidar com pessoas é uma habilidade essencial para o sucesso. Neste livro, o autor apresenta as técnicas e estratégias mais eficazes para se relacionar de forma positiva e produtiva com colegas de trabalho, amigos e familiares. Com dicas práticas e exemplos reais, A Arte de Lidar com Pessoas é um guia indispensável para quem busca melhorar suas habilidades sociais e se destacar em qualquer ambiente.",
    image: "/book4.jpg",
    price: 19.9,
    rating: 4.1,
    author: "89ea0a2a-c59d-11ed-afa1-0242ac120002",
    publisher: "",
    categories: "",
  },
  {
    title: "As Lendas de Avalon",
    description:
      "As Lendas de Avalon é uma coletânea de contos e mitos que narram as aventuras dos heróis da lendária ilha de Avalon. Com personagens mágicos e enredos envolventes, esta obra é uma ode à imaginação e ao poder das histórias para encantar e inspirar os leitores de todas as idades. Se você é fã de fantasia e mitologia, não pode deixar de conhecer As Lendas de Avalon.",
    image: "/book5.jpg",
    price: 31.9,
    rating: 4.6,
    author: "89ea0a2a-c59d-11ed-afa1-0242ac120002",
    publisher: "",
    categories: "",
  },
  {
    title: "O Poder da Mente",
    description:
      "O Poder da Mente é um livro que explora o potencial da mente humana para transformar a realidade. Com base em estudos científicos e em sua própria experiência como terapeuta, o autor apresenta técnicas e exercícios para que o leitor possa desenvolver sua mente e alcançar seus objetivos. Este livro é uma ferramenta poderosa para quem busca transformar sua vida e atingir o sucesso em todas as áreas.",
    image: "/book6.jpg",
    price: 23.9,
    rating: 4.2,
    author: "89e91de0-c59d-11ed-afa1-0242ac120002",
    publisher: "",
    categories: "",
  },
  {
    title: "O Mistério do Castelo",
    description:
      "Quando o jovem detetive Arthur é contratado para investigar uma série de estranhos acontecimentos em um castelo abandonado, ele se vê envolvido em uma trama perigosa que envolve mistério, magia e intriga. Com a ajuda de uma equipe de especialistas em investigação paranormal, Arthur desvenda os segredos do castelo e enfrenta seus próprios medos. O Mistério do Castelo é um romance de suspense e mistério que prende a atenção do leitor até a última página.",
    image: "/book7.jpg",
    price: 28.9,
    rating: 4.4,
    author: "89e91de0-c59d-11ed-afa1-0242ac120002",
    publisher: "",
    categories: "",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const author of authors) {
    const newAuthor = await prisma.author.create({
      data: author,
    });
    console.log(`Created author with id: ${newAuthor.id}`);
  }
  for (const category of categories) {
    const newCategory = await prisma.categorie.create({
      data: category,
    });
    console.log(`Created category with id: ${newCategory.id}`);
  }
  for (const publisher of publishers) {
    const newPublisher = await prisma.publisher.create({
      data: publisher,
    });
    console.log(`Created publisher with id: ${newPublisher.id}`);
  }
  for (const book of books) {
    const newBook = await prisma.book.create({
      data: {
        description: book.description,
        image: book.image,
        price: book.price,
        rating: book.rating,
        title: book.title,
        author: {
          connect: {
            id: book.author,
          },
        },
        publisher: {
          connect: {
            id: book.publisher,
          },
        },
        categories: {
          connect: [
            {
              id: "89ea5d8e-c59d-11ed-afa1-0242ac120002",
            },
          ],
        },
      },
    });
    console.log(`Created book with id: ${newBook.id}`);
  }
  console.log(`Seeding finished.`);
}

main();
