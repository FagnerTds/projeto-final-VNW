import s from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // interação com o menu mobile
  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);

  //ref para conseguirmos o clickOutside
  const menuRef = useRef(null);
  const imgUserRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        imgUserRef.current &&
        !imgUserRef.current.contains(e.target)
      ) {
        setMenuAberto(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () =>{
      document.removeEventListener("click", handleClickOutside)
    };
  }, []);

  return (
    <>
      <header className={s.header}>
        <Link to={"/"}>
          <img
            className={s.imgLogo}
            src={logo}
            alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio"
          />
        </Link>
        {!isMobile && (
          <nav className={s.nav}>
            <Link className={s.Link} to={"/doacao"}>
              Doação
            </Link>
            <Link className={s.Link} to={"/voluntariado"}>
              Voluntariado
            </Link>
            <Link className={s.Link} to={"/mentoria"}>
              Mentoria
            </Link>
            <Link className={s.Link} to={"/eventos"}>
              Eventos
            </Link>
          </nav>
        )}

        <img
          ref={imgUserRef}
          className={s.imgUser}
          src="https://media.licdn.com/dms/image/v2/D4D03AQGFx8vO_Pg2pg/profile-displayphoto-shrink_200_200/B4DZdhZ_XfGkAY-/0/1749685893085?e=1772064000&v=beta&t=6YqX4W-bTJF8IzpyMC1HExt4U0zLyO7ZnMc9Own3a3g"
          alt="Imagem do usuário"
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav ref={menuRef} className={menuAberto ? s.navUser : s.closedNavUser}>
        <Link to={"/usuario"} onClick={() => setMenuAberto(false)}>
          Fagner Santos
        </Link>
        <Link onClick={() => setMenuAberto(false)}>Configurações da conta</Link>
        {isMobile && (
          <div>
            <Link to={"/doacao"} onClick={() => setMenuAberto(false)}>
              Doação
            </Link>
            <Link to={"/voluntariado"} onClick={() => setMenuAberto(false)}>
              Voluntariado
            </Link>
            <Link to={"/mentoria"} onClick={() => setMenuAberto(false)}>
              Mentoria
            </Link>
            <Link to={"/eventos"} onClick={() => setMenuAberto(false)}>
              Eventos
            </Link>
          </div>
        )}

        <Link onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </>
  );
}
