import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import PageContainer from "../../components/PageContainer";
//import Modal from "../../components/Modal.js";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import perfil from "../../assets/Profile.svg";

import "./styles.css";

function Home() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <PageContainer>
      <header id="home-header">
        <img src={logo} alt="Seu Artísta" />

        <div className="auth-container">
          <Link to="/login" className="home-login">
            Entrar
          </Link>

          <Link className="sign-up-button" to="/signup">
            <FiLogIn />
            Fazer Cadastro
          </Link>
        </div>
      </header>

      <form className="pesquisa">
        <input
          type="search"
          id="text"
          list="sugestao"
          placeholder=" Procure por um artista ou banda..."
        />
        <div className="card-search">
          <div className="img-search">
            <img src={search} alt="search" />
          </div>
        </div>

        <datalist id="sugestao">
          <option value="text"></option>
          <option value={"test-var"}></option>
        </datalist>
      </form>

      <div id="resposta">
        <div className="card-busca">
          <div className="card-img">
            <img src={perfil} alt="perfil" />
          </div>
          <p id="title">Barões da pisadinha</p>
          <div className="card-text">
            <h4>Gênero: </h4>
            <p id="tipo-genero"> Forrô, tecnobrega</p>
          </div>
          <div className="contact">
            <div className="whats">
              <a href={"https://wa.me/5583911121314"} target="z-index">
                <p>
                  <FaWhatsapp />
                </p>
                {"(83) 1112-1314"}
              </a>
            </div>
            <div className="email">
              <a href={"https://wa.me/5583911121314"} target="z-index">
                <p>
                  <AiOutlineMail />
                </p>
                {"Email@.com"}
              </a>
            </div>
          </div>
          <div className="detalhes">
            <button>Mostrar mais...</button>
          </div>
          {/* {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)}>
              <div className="card-modal"></div>
            </Modal>
          ) : null} */}
        </div>
        <div className="card-busca">
          <div className="card-img">
            <img src={perfil} alt="perfil" />
          </div>
          <p id="title">Barões da pisadinha</p>
          <div className="card-text">
            <h4>Gênero: </h4>
            <p id="tipo-genero"> Forrô, tecnobrega</p>
          </div>
          <div className="contact">
            <div className="whats">
              <a href={"https://wa.me/5583911121314"} target="z-index">
                <p>
                  <FaWhatsapp />
                </p>
                {"(83) 1112-1314"}
              </a>
            </div>
            <div className="email">
              <a href={"https://wa.me/5583911121314"} target="z-index">
                <p>
                  <AiOutlineMail />
                </p>
                {"Email@.com"}
              </a>
            </div>
          </div>
          <div className="detalhes">
            <button>Mostrar mais...</button>
          </div>
          {/* {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)}>
              <div className="card-modal"></div>
            </Modal>
          ) : null} */}
        </div>
      </div>
    </PageContainer>
  );
}

export default Home;
