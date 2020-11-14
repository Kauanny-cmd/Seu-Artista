import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import PageContainer from '../../components/PageContainer';

import logo from '../../assets/logo.svg';

import './styles.css';

function Home() {
    return (
        <PageContainer>
            <header id="home-header">
                <img src={logo} alt="Seu Artísta"/>

                <div className="auth-container">
                    <Link to="/login" >
                        Entrar
                    </Link>

                    <Link className="sign-up-button" to="/signup">
                        <FiLogIn />

                        Fazer Cadastro
                    </Link>
                </div>
            </header>

            <h1>Home</h1>
        </PageContainer>        
    );
}

export default Home;