import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Multiselect } from 'multiselect-react-dropdown';

import PageContainer from "../../components/PageContainer";

import { AuthContext } from '../../contexts/auth';
import api from "../../services/api";

import { GrUserSettings } from "react-icons/gr";
import { GoTrashcan } from "react-icons/go";
import { BiLeftArrowAlt } from "react-icons/bi";
import sair from "../../assets/sair.svg";
import perfil from "../../assets/Profile.svg";

import { genresOptions } from './utils/selectOptions';

import "./styles.css";

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [genres, setGenres] = useState([]);
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState(
    'https://images.unsplash.com/photo-1566721311190-fe0cda2f6a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  )
  const [isFirstAuth, setIsFirstAuth] = useState(false);
  const [preselectedValues, setPreselectedValues] = useState([]);
  const [newPic, setNewPic] = useState(undefined);

  const authContext = useContext(AuthContext);

  const { isUserAuthenticated, userId, setUserId } = authContext;

  const history = useHistory();

  useEffect(() => {
    if (!isUserAuthenticated) {
      history.push('/login');
    }
    
    const localUserId = localStorage.getItem('userId')

    api.get(`/artist/${localUserId}`)
    .then(response => {
      if (!response.data) {
        setIsFirstAuth(true);
        setUserId(localUserId);
      } else {
        setAvatar(response.data.avatar);
        setDescription(response.data.description);
        setEmail(response.data.email);
        setName(response.data.name);
        setWhatsapp(response.data.whatsapp);
        setPreselectedValues(
          response.data.genres.map(genre => {
            return {
              name: genre,
              id: response.data.genres.indexOf(genre)
            }
          })
        );
      }
    })

    if (isFirstAuth) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        
        setName(userData.name);
        setEmail(userData.email);
    }
    
  }, [isUserAuthenticated, history, isFirstAuth]);

  function handleSelectGenreChange(selectedList) {
    const names = selectedList.map(item => item.name)
    setGenres(names);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const genresArrayAsString = genres.join(', ');

    const newArtist = {
      name,
      email,
      whatsapp,
      genres: genresArrayAsString,
      description,
      avatar,
      userId
    };

    await api.post('/artist', newArtist);
    history.push('/');
  }

  function handleNewPic(event) {
    setNewPic(event.target.files[0]);
  }

  return (
    <PageContainer>
      <header id="perfil-header">
        <div className="auth">
          <Link to="/" className="home-perfil">
            <BiLeftArrowAlt />
          </Link>
        </div>

        <img src={perfil} alt="Seu Artísta" />
      </header>
      <div id="edita-conta">
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
            <input type="Button" defaultValue="Deletar minha conta" name="deletar" />
          </div>

          <div className="confi-conta">
            <label>
              <img src={sair} alt="sair" />
            </label>
            <input type="Button" defaultValue="Sair" name="sair" />
          </div>
        </form>
      </div>
      <h1 id="title-perfil">Minha Conta</h1>

      <div id="linha-perfil"></div>

      <div id="perfil">
        <div className="profile-pic">
          <img src={avatar} alt="Perfil" className="profile" />

          <input type="file" name="update" id="imgUpdate" value={newPic} onChange={handleNewPic} disabled={!isFirstAuth}/>
        </div>

        <form id="form-conta" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            id="nome"
            disabled={!isFirstAuth}
            placeholder="Nome" 
          />

          <div className="contact-perfil">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email" 
              placeholder="Email"
              disabled={!isFirstAuth}
            />

            <input
              type="text"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              id="whatsapp"
              placeholder="Whatsapp"
              disabled={!isFirstAuth}
            />
          </div>

          
          <div className="selects-container">
            <Multiselect
              className="multi-select"
              options={genresOptions}
              onSelect={handleSelectGenreChange}
              onRemove={handleSelectGenreChange}
              selectedValues={preselectedValues}
              displayValue="name"
              closeOnSelect={false}
              placeholder="Seus gêneros musicais"
              disable={!isFirstAuth}
            />
          </div>

          <textarea 
            name="textarea"
            rows="5" cols="30"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Fale um pouco sobre você"
            disabled={!isFirstAuth}
          />
            
          <div id="button-perfil">
            <input
              type="submit"
              defaultValue="Salvar"
              name="button"
              className="button-salvar"
              disabled={!isFirstAuth}
            />
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

export default Profile;
