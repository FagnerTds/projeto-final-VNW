import Card from "../Card/Card"
import s from "./CardList.module.scss"

export default function CardList({dados}) {
  return (
    <div className={s.grid}>
      {dados.map((item)=>(
        <Card 
          key={item.id}
          img={item.img}
          alt={item.alt}
          titulo={item.titulo}
          descricao={item.descricao}
          textoBotao={item.textoBotao}
        />
      ))}
      
    </div>
  )
}
