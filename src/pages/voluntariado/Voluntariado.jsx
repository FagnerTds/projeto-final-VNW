import PaginaPadrao from "../../components/cards/PaginaPadrao/PaginaPadrao";
import dados from "./dadosVoluntariado";

export default function Voluntariado() {
  return (
    <main>
      <PaginaPadrao
        titulo="Voluntariado"
        dados={dados}
        mensagem={"Inscrito com Sucesso"}
      />
    </main>
  );
}
