import { useState } from "react";
import CardList from "../CardList/CardList";
import s from "./PaginaPadrao.module.scss";
import Toast from "../../toast/Toast";

export default function PaginaPadrao({ titulo, dados, mensagem }) {

  const[toastVisible, setToastVisible] = useState(false)

  function showToast(){
    setToastVisible(true);

    setTimeout(() =>{
      setToastVisible(false)
    }, 4000)
  }
  
  return (
    <>
      <main className={s.main}>
        <Toast 
          visible={toastVisible}
          mensagem={mensagem}
        />
        <h1>{titulo}</h1>
        <CardList dados={dados} onAction={showToast} />
      </main>
    </>
  );
}
