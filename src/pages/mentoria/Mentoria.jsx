import PaginaPadrao from '../../components/cards/PaginaPadrao/PaginaPadrao'
import dados from "./dadosMentoria"

export default function Mentoria() {
  return (
    <main>
      <PaginaPadrao 
        titulo = "Mentoria"
        dados = {dados}
      />
    </main>
  )
}
