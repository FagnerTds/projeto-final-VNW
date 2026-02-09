import PaginaPadrao from '../../components/cards/PaginaPadrao/PaginaPadrao'
import dados from "./dadosEventos"

export default function EventosEPalestras() {
  return (
    <main>
      <PaginaPadrao 
        titulo = "Eventos & Palestras"
        dados = {dados}
      />
    </main>
  )
}
