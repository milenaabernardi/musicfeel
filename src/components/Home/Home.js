import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png"; // Adicione sua imagem da logo aqui
import menuIcon from "../../assets/icone-menu.png"; // Adicione sua imagem do ícone aqui
import instagram from "../../assets/instagram.png"; // Adicione o arquivo PNG
import facebook from "../../assets/facebook.png"; // Adicione o arquivo PNG
import youtube from "../../assets/youtube.png"; // Adicione o arquivo PNG

const Home = () => {
  return (
    <div className="container">
      {/* Header com logo e ícone */}
      <header className="header">
        <img src={logo} alt="Logo MusicFeel" className="logo" />
        <img src={menuIcon} alt="Ícone do Menu" className="menu-icon" />
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <h1>Bem-vindo ao MusicFeel!</h1>
        <p>
          Aqui, a música ganha vida em suas mãos! Aprenda a tocar instrumentos
          musicais com lições interativas, dicas práticas e uma comunidade
          apaixonada por música. Seja você iniciante ou já experiente, temos o
          conteúdo certo para ajudar a transformar sua paixão pela música em
          habilidade.
        </p>
        <p>
          Escolha seu instrumento favorito e comece a jornada musical agora
          mesmo!
        </p>
        <div className="buttons">
          <button className="primary-button">Comece agora</button>
          <button className="secondary-button">Visualizar todos os planos</button>
        </div>
      </main>

      {/* Texto de Planos Acessíveis */}
      <aside className="side-content">
        <h2>Planos acessíveis para qualquer situação</h2>
        <p>
          Escolha o plano ideal e aprenda a tocar o instrumento dos seus sonhos.
          Vários métodos de pagamento. Cancele quando quiser.
        </p>
      </aside>

      {/* Rodapé */}
      <footer className="footer">
        <div>
          <h3>Empresa</h3> {/* Título em cinza escuro */}
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#empregos">Empregos</a></li>
          </ul>
        </div>
        <div>
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="#suporte">Suporte</a></li>
          </ul>
        </div>
        <div>
          <h3>Planos do MusicFeel</h3>
          <ul>
            <li><a href="#plano-individual">Plano Individual</a></li>
            <li><a href="#plano-banda">Plano Banda</a></li>
            <li><a href="#plano-duo">Plano Duo</a></li>
          </ul>
        </div>
        <div className="social-icons">
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={youtube} alt="YouTube" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
