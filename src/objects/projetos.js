import projImg1 from "../assets/img/image1.png";
import projImg2 from "../assets/img/image2.png";
import projImg3 from "../assets/img/image3.png";
import { Description1 } from "./description1";

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
      project: "https://github.com/YuriMont/plataforma_de_evento",
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
  ];
}
