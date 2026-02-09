import CardList from "../CardList/CardList";
import s from "./PaginaPadrao.module.scss";

export default function PaginaPadrao({titulo, dados}) {
  return (
    <main className={s.main}>
      <h1>{titulo}</h1>
      <CardList dados={dados} />      
    </main>
  )
}
