import s from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
import { useEffect, useState } from "react";

export default function Header() {

  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <=768)

  useEffect(()=>{
    function menuMobile(){
      setIsMobile(window.innerWidth <= 768);
      if(window.innerWidth > 768){
        setMenuAberto(false)
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener('resize', menuMobile)
  }, [])
  
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

        <img
          className={s.imgUser}
          src="https://avatars.githubusercontent.com/u/133176621?v=4"
          alt="Imagem do usuário"
          onClick={()=>setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto? s.navUser : s.closedNavUser}>
        <Link>Fagner Santos</Link>
        <Link>Meu voluntariado</Link>
        <Link>Configurações da conta</Link>
        <Link>Sair</Link>
      </nav>
    </>
  );
}
