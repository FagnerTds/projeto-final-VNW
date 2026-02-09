import instituto from "../../assets/imagens/cards/instituto.png";
import livros from "../../assets/imagens/cards/livros.png";
import computador from "../../assets/imagens/cards/computador-desmontado.png";

const dadosDoacao = [
  {
    id: 1,
    img: instituto,
    alt: "Homen segurando uma cesta básica",
    titulo: "Instituto Grande Familia",
    descricao: [
      "Contribua com alimentos não perecíveis e Ajude famílias em situação de vunerabilidade",
      "Contribua com alimentos não perecíveis",
    ],
    textoBotao: "Quero Doar",
  },
  {
    id: 2,
    img: livros,
    alt: "livros em destaque em uma biblioteca",
    titulo: "Projeto Futuro na Escola",
    descricao: [
      "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
    ],
    textoBotao: "Quero Doar",
  },
  {
    id: 3,
    img: computador,
    alt: "duas pessoas desmontando cpu de computadores em cima de uma bancada",
    titulo: "Instituto Conecta Jovem",
    descricao: [
      "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.",
    ],
    textoBotao: "Quero Doar",
  },
];

export default dadosDoacao;
