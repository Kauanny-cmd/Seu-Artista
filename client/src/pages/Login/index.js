import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import melo from '../../assets/melo.svg';

import '../../styles/auth.css';

function Login() {
    return (
    <div className="page-container">
        <header className="page-header">
            <Link to="/" className="setinha">
                <FiArrowLeft />
            </Link>
        </header>

        <div className="box">
            <img src={melo} className="page-image" alt="melo" />

            <div className="form-area">
                <h1 className="page-title">Login</h1>

                <form className="form">
                    <input className="page-input" name="email" type="email" placeholder="Digite seu email..." id="input-email" />
                
                    <input className="page-input" name="senha" type="password" placeholder="Digite sua senha..." id="input-senha" />
                    
                    <div className="actions-container">
                        <button className="action-button" type="submit">Entrar</button>

                        <Link className="link-text" to="/signup">
                            Não tenho conta
                        </Link>
                    </div>
                </form> 
            </div>
        </div>
    </div>
    );
}

export default Login;