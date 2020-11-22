import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import music from '../../assets/music.svg';

import '../../styles/auth.css';

function SignUp() {
    return (
        <div className="page-container">
            <header className="page-header">
                <Link to="/" className="setinha">
                    <FiArrowLeft />
                </Link>
            </header>

            <div className="box" id="sign-up-box">
                <div className="form-area">
                    <h1 className="page-title">Cadastro</h1>

                    <form className="form">
                        <input className="page-input" name="nome" type="text" placeholder="Digite seu nome..." />

                        <input className="page-input" name="email" type="email" placeholder="Digite seu email..." />
                
                        <input className="page-input" name="senha" type="password" placeholder="Digite sua senha..." />

                        <div className="actions-container">
                            <button className="action-button" type="submit">Cadastrar</button>

                            <Link className="link-text" to="/login">
                                Já tenho uma conta
                            </Link>
                        </div>
                    </form> 
                </div>

                <img src={music} className="page-image" id="sign-up-page-image" alt="music"/>
            </div>
        </div>
    );
}

export default SignUp;