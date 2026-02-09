import PaginaPadrao from '../../components/cards/PaginaPadrao/PaginaPadrao'
import dados from "./dadosDoacao"

export default function Doacao() {
  return (
    <PaginaPadrao 
      titulo="Doação"    
      dados={dados}
    />
  )
}
