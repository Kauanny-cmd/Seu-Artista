import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import EditaConta from "../../components/EditaConta";

import { BiLeftArrowAlt } from "react-icons/bi";

import Modal from "../../components/Modal";

import "./styles.css";

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <PageContainer>
      <header id="perfil-header">
        <div className="auth">
          <Link to="/" className="home-perfil">
            <BiLeftArrowAlt />
          </Link>
        </div>
        <EditaConta />
      </header>
      <h1 id="title-perfil">Minha Conta</h1>

      <div id="linha-perfil"></div>

      <div id="perfil">
        <form id="form-conta">
          <input type="text" defaultValue="Nome" id="nome" />
          <div className="contact-perfil">
            <input type="email" defaultValue="Email" id="email" />
            <input type="text" defaultValue="Whatsapp" id="whatsapp" />
          </div>

          <div className="contact-perfil">
            <select name="select-genero" className="option">
              <option defaultValue="Gênero">Gênero</option>
              <option defaultValue="Feminino">Rock</option>
              <option defaultValue="Masculino">Forró</option>
            </select>

            <select name="select-rede" className="option">
              <option defaultValue="Rede Social">Rede Social</option>
              <option defaultValue="Instagram">Instagram</option>
              <option defaultValue="Youtube">Youtube</option>
              <option defaultValue="Website">Website</option>
            </select>
          </div>
          <textarea
            name="textarea"
            rows="5"
            cols="30"
            defaultValue="
            Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec tincidunt venenatis diam, quis facilisis odio dictum at.
            Vestibulum sit amet lacus eget leo fringilla laoreet. Curabitur
            tempor felis nec sem consequat, ac tempor quam pellentesque. Ut
            sagittis magna sed tortor tincidunt faucibus. Sed et ipsum sit amet
            justo fermentum scelerisque.
            "
          />

          <div id="button-perfil">
            <input
              type="Button"
              defaultValue="Salvar"
              name="button"
              className="button-salvar"
            />
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

export default Profile;
