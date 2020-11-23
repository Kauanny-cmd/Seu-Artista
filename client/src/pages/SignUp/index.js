import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { AuthContext } from '../../contexts/auth';

import music from '../../assets/music.svg';

import '../../styles/auth.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authContext = useContext(AuthContext);

    const { signUp } = authContext;

    const history = useHistory();

    async function handleSignUp(event) {
        event.preventDefault();

        await signUp(email, password);

        const data = {
            name,
            email,
            isUserAuthenticated: true
        };

        localStorage.setItem('userData', JSON.stringify(data));

        setName('');
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

            <div className="box" id="sign-up-box">
                <div className="form-area">
                    <h1 className="page-title">Cadastro</h1>

                    <form className="form" onSubmit={handleSignUp}>

                        <input
                            className="page-input"
                            name="nome"
                            type="text"
                            placeholder="Digite seu nome..." 
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input
                            className="page-input"
                            name="email"
                            type="email"
                            placeholder="Digite seu email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                
                        <input
                            className="page-input"
                            name="senha"
                            type="password"
                            placeholder="Digite sua senha..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

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