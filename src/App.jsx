import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./globalStyles.scss"
import Doacao from "./pages/doacao/Doacao"
import EventosEPalestras from "./pages/eventosEPalestras/EventosEPalestras"
import Voluntariado from "./pages/voluntariado/Voluntariado"
import Usuario from "./pages/usuario/Usuario"
import PaginaInicial from "./pages/paginaInicial/PaginaInicial"
import Mentoria from "./pages/mentoria/Mentoria"
import Header from "./components/header/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/doacao" element={<Doacao/>}/>
        <Route path="/eventos" element={<EventosEPalestras />}/>
        <Route path="/mentoria" element={<Mentoria />}/>
        <Route path="/voluntariado" element={<Voluntariado/>}/>
        <Route path="/usuario" element={<Usuario/>}/>
      </Routes>
    </BrowserRouter>
  )
}
// https://www.figma.com/design/CwoQuNaBJRB3bwiAbUwuAr/Desafio-fim-de-ano-vini-e-jef?node-id=0-1&p=f&t=WgeyY3psmCedXB3h-0