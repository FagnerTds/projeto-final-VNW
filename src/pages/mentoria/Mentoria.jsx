import PaginaPadrao from "../../components/cards/PaginaPadrao/PaginaPadrao";
import dados from "./dadosMentoria";

export default function Mentoria() {
  return (
    <PaginaPadrao
      titulo="Mentoria"
      dados={dados}
      mensagem={"Inscrito com Sucesso"}
    />
  );
}
