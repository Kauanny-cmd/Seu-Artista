import React, { useState } from "react";
import { GrUserSettings } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import sair from "../../assets/sair.svg";
import perfil from "../../assets/Profile.svg";
import Modal from "../Modal";

import "./styles.css";

function EditaConta() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div id="edita-conta">
      <div id="foto-perfil">
        <img
          src={perfil}
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
                name="arualizar"
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
              />
            </div>

            <div className="confi-conta">
              <label>
                <img src={sair} alt="sair" />
              </label>
              <input type="Button" defaultValue="Sair" name="sair" />
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}

export default EditaConta;
