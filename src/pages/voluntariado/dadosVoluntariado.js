import instituto from "../../assets/imagens/cards/mutirao-reciclagem.png";
import tecnologia from "../../assets/imagens/cards/aulas-tecnologia.png";
import esporte from "../../assets/imagens/cards/esporte-inclusao.png";

const dadosVoluntariado = [
   {
      id: 1,
      img: instituto,
      alt: "Homen segurando uma cesta básica com simbolo de reciclagem",
      titulo: "Multirão de Reciclagem",
      descricao: [
        "Coletar materiais recicláveis e orientar sobre descarte consciente.",
      ],
      textoBotao: "Quero Participar",
    },
    {
      id: 2,
      img: tecnologia,
      alt: "Pessoas estudando em computadores",
      titulo: "Aulas de Tecnologia",
      descricao: [
        "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
      ],
      textoBotao: "Quero participar",
    },
    {
      id: 3,
      img: esporte,
      alt: "Pessoas praticando esporte",
      titulo: "Esporte e Inclusão",
      descricao: [
        "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
      ],
      textoBotao: "Quero participar",
    },
]

export default dadosVoluntariado;