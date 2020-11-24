import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { GrUserSettings } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import sair from "../../assets/sair.svg";
import perfil from "../../assets/Profile.svg";
import Modal from "../Modal";

import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

import "./styles.css";

function EditaConta() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [avatar, setAvatar] = useState(perfil);

  const { signOut } = useContext(AuthContext);
  const history = useHistory();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    api.get(`/artist/${userId}`)
    .then(response => {
      if (response.data) {
        setAvatar(response.data.avatar);
      }
    })
  }, []);

  async function handleSignOut() {
    await signOut();

    history.push('/');
  }

  async function handleDelete() {
    await api.delete(`/artist/${userId}`);

    history.push('/login');
  }

  return (
    <div id="edita-conta">
      <div id="foto-perfil">
        <img
          src={avatar}
          alt="Seu Artísta"
          onClick={() => setIsModalVisible(true)}
        />
      </div>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <form id="form-perfil">
            <div className="confi-conta">
              <label>
                <GrUserSettings />
              </label>
              <input
                type="Button"
                defaultValue="Atualizar minha conta"
                name="atualizar"
              />
            </div>

            <div className="confi-conta">
              <label>
                <GoTrashcan />
              </label>
              <input
                type="Button"
                defaultValue="Deletar minha conta"
                name="deletar"
                onClick={handleDelete}
              />
            </div>

            <div className="confi-conta">
              <label>
                <img src={sair} alt="sair" />
              </label>
              <input type="Button" defaultValue="Sair" name="sair" onClick={handleSignOut}/>
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}

export default EditaConta;
