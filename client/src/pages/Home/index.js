import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import PageContainer from "../../components/PageContainer";
//import Modal from "../../components/Modal.js";

import api from '../../services/api';

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";

import "./styles.css";

function Home() {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  const [artists, setArtists] = useState([]);
  const [name, setName] = useState('');
  const [genres, setGenres] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function getArtists() {
      const artistsResponse = await api.get('/artists');

      setArtists(artistsResponse.data);
    }

    getArtists();
  }, []);

  function handleSearchInputChange(event) {
    if (isChecked) {
      setGenres(event.target.value);
    } else {
      setName(event.target.value);
    }
  }

  async function handleSearch(event) {
    event.preventDefault();

    const searchResponse = await api.get('/search', {
      params: {
        name,
        genres,
      }
    });

    setArtists(searchResponse.data)
  }

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

      <form className="pesquisa" onSubmit={handleSearch}>
        <input
          type="search"
          id="text"
          placeholder=" Procure por um artista ou banda..."
          className="search-input"
          value={isChecked ? genres : name}
          onChange={handleSearchInputChange}
        />

        <div className="card-search">
          <div className="img-search">
            <img src={search} alt="search" />
          </div>
        </div>
        
        <div className="check-container">
          <input type="checkbox" name="check" value={isChecked} onChange={e => setIsChecked(!isChecked)}/>

          <span>Filtrar por gênero musical</span>
        </div>
      </form>

      <div id="resposta">
        {artists.map(artist => (
          <div className="card-busca" key={artist._id}>
            <div className="card-img">
              <img src={artist.avatar} alt={artist.name} />
            </div>
            
            <p id="title">{artist.name}</p>
            
            <div className="card-text">
              <h4>Gêneros: </h4>

              <p id="tipo-genero">
                {artist.genres.join(', ')}
              </p>
            </div>
          
            <div className="contact">
              <div className="whats">
                  <p>
                    <FaWhatsapp />

                    <span>{artist.whatsapp}</span>
                  </p>
              </div>
              
              <div className="email">
                <p>
                  <AiOutlineMail />
                  <span>{artist.email}</span>
                </p>
              </div>
            </div>
            
            <div className="detalhes">
              <button>Mostrar mais...</button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default Home;
