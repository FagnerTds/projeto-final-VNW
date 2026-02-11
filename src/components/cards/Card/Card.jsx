import S from "./Card.module.scss";

export default function Card({ img, alt, titulo, descricao, textoBotao, onAction }) {
  return (
    <>
      <article className={S.card}>
        <img src={img} alt={alt} />
        <h3>{titulo}</h3>
        <div className={S.descricao}>
          {descricao.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <button onClick={onAction}>{textoBotao}</button>
      </article>
    </>
  );
}
