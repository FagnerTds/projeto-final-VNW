import s from "./Toast.module.scss";
import checked from "../../assets/icones/checked.png";


export default function Toast({mensagem, visible}) {
  if (!visible) return null
  return (
    <div className={s.mentoria}>
      <div className={s.tooltbox}>
        <img className={s.tollImage} src={checked} alt="simbolo de check" />
        <p>{mensagem}</p>
        <span className={s.progress}></span>
      </div>
    </div>
  );
}
