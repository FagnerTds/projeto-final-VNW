import s from "./usuario.module.scss";
import local from "../../assets/icones/localizacao.png";
import mail from "../../assets/icones/mail.png";
import calendario from "../../assets/icones/calendario.png";

export default function Usuario() {
  return (
    <main className={s.mainUser}>
      <section>
        <div >
          <img className={s.img}
            src="https://media.licdn.com/dms/image/v2/D4D03AQGFx8vO_Pg2pg/profile-displayphoto-shrink_200_200/B4DZdhZ_XfGkAY-/0/1749685893085?e=1772064000&v=beta&t=6YqX4W-bTJF8IzpyMC1HExt4U0zLyO7ZnMc9Own3a3g"
            alt="Imagem do usuário"
          />
        </div>
        <div className={s.descricoes}>
          <h3>Fagner Tranquilino dos Santos</h3>
          <span>Aluno em desenvolvimento</span>
          <h4>
            Buscando seu lugar no mundo da programação, embasando conhecimentos
            e explorando suas possibilidades. Programa um pouco em algumas linguagens, possui certificação Cloud Practitioner.
          </h4>
          <div className={s.container}>
            <div className={s.icones}>
              <img src={local} alt="incone de localização" />
              <p>Santo Andé, SP</p>
            </div>
            <div className={s.icones}>
              <img src={mail} alt="icone de mail" />
              <p>fagner.santo@gmail.com</p>
            </div>
            <div className={s.icones}>
              <img src={calendario} alt="incone de calendario" />
              <p>Membro desde de outrubro de 2025</p>
            </div>
          </div>
          <div className={s.skills}>
            <p>Educação</p>
            <p>Meio Ambiente</p>
            <p>Assistência Social</p>
            <p>Design</p>
          </div>
        </div>
      </section>
    </main>
  );
}
