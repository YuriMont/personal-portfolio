import projImg1 from "../assets/img/image1.png";
import projImg2 from "../assets/img/image2.png";
import projImg3 from "../assets/img/image3.png";
import projImg4 from "../assets/img/image4.png";
import projImg5 from "../assets/img/Group5.png";

export class Projetos {
  static values = [
    {
      title: "Plataforma de eventos",
      imgUrl: projImg1,
      description: `Ignite Lab, foi um evento proporcionado pela equipe da Rocketseat com o intuito de introduzir o framework ReactJs para seus alunos. A plataforma de eventos tem o intuito de disponibilizar diversas aulas e materiais para aqueles que se cadastraram na plataforma. 
      Na criação desta plataforma de eventos foi utilizado: 
      Tailwind css, com o intuito de agilizar a estilização do projeto.
      Utilização de react hooks.
      Player de vídeo integrada a plataforma, a partir da api video.js.
      Requisição e integração com um banco de dados graphql.
      Boas práticas da criação de software, como clean code e possibilidade de expansão da plataforma.
      Portabilidade para vários dispositivos.
      `,
      linkGithub: "https://github.com/YuriMont/plataforma_de_evento",
      project: "https://plataforma-de-evento.vercel.app/",
    },
    {
      title: "Notifications Service",
      imgUrl: projImg2,
      description: `Notifications service é um projeto nodejs gerado a partir do framework NestJS. Este projeto usa o Prisma para manipulação dos dados. Jest para a realização de testes unitários. Esse serviço utiliza um banco gerado localmente pelo Prima, contudo permite a inserção de banco relacionais e não relacionais de maneira simplificada. A partir das rotas http é possível adicionar notificações, marcar como lidas, marcar como não lidas e visualizar todas as notificações. Utilizando um “banco de dados” in memory a realização de teste unitários ficou mais eficiente.`,
      linkGithub: "https://github.com/YuriMont/notifications-service",
      project: "https://github.com/YuriMont/notifications-service",
    },
    {
      title: "Galeria",
      imgUrl: projImg3,
      description: `Este projeto pessoal foi feito utilizando o framework Spring boot, na linguagem java, para o Backend, o framework ReactJS foi usado para criação do frontend e o serviço de banco de dados foi o MySQL. Neste projeto apresenta, criação de contas, serviço de login, além de várias funcionalidades, tais quais: adicionar imagem, visualizar imagem, excluir imagem, marcar imagem como favorita, visualizar imagens favoritas, pesquisar imagens por data de upload ou por título e excluir conta.`,
      linkGithub: "https://github.com/YuriMont/galeria",
      project: "https://github.com/YuriMont/galeria",
    },
    {
      title: "Habits",
      imgUrl: projImg4,
      description: `O projeto fullstack tratase de um app de monitoramento de hábitos com calendário mostrando hábitos por dia com tonalidades de cores diferentes para identificar a conclusão de hábitos a cada dia. Possibilidade de criação e edição de conclusão de hábitos diariamente. Para a criação deste projeto foi utilizado: TypeScript, NodeJS, Fastify, Prisma, SQLite, ReactJS, Tailwindcss, Vite, Radix, Axios, React Native, Expo, NativeWind`,
      linkGithub: "https://github.com/YuriMont/habits-platform",
      project: "https://github.com/YuriMont/habits-platform",
    },
    {
      title: "Serviço de autenticação",
      imgUrl: projImg5,
      description: `Este serviço de autenticação foi criado utilizando o Spring Boot e o armazenamento de usuários será feito em um banco de dados PostgreSQL. A autenticação será baseada em tokens JWT (JSON Web Tokens). As senhas dos usuários serão armazenadas de forma criptografada, utilizando a classe PasswordEncoder nativa do Spring Security.

      O serviço será protegido por autenticação baseada em token JWT. Quando um usuário fizer login, um token JWT será gerado e retornado na resposta. Esse token deverá ser incluído no cabeçalho das requisições posteriores para acessar os endpoints protegidos.
        
      Por fim, a autenticação do serviço será configurada utilizando o Spring Security.`,
      linkGithub: "https://github.com/YuriMont/autenticao-springboot",
      project: "https://github.com/YuriMont/autenticao-springboot"
    }
  ];
}
