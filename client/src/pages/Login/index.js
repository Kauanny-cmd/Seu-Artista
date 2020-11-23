import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { AuthContext } from '../../contexts/auth';

import melo from '../../assets/melo.svg';

import '../../styles/auth.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authContext = useContext(AuthContext);

    const { signIn } = authContext;

    const history = useHistory();

    async function handleSignIn(event) {
        event.preventDefault();

        await signIn(email, password);

        const data = {
            name: '',
            email,
            isUserAuthenticated: true
        };

        localStorage.setItem('userData', JSON.stringify(data));

        setEmail('');
        setPassword('');

        history.push('/profile');
    }
    
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

                <form className="form" onSubmit={handleSignIn}>
                    <input
                        className="page-input"
                        name="email"
                        type="email"
                        placeholder="Digite seu email..."
                        id="input-email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                
                    <input
                        className="page-input"
                        name="senha"
                        type="password"
                        placeholder="Digite sua senha..."
                        id="input-senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
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