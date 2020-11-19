import './styles.css';

function Login() {
    return (
    <div id="setinha">
           
      
        <div id="box" >
           
            <div>
                <form action="" method="POST">
                    <div  id="login-email">
                        <input name="email" type="email" placeholder="Digite seu email..." id="input-email">
                        </input>
                    <div id="login-senha">
                        <input name="senha" type="password" placeholder="Digite sua senha..." id="input-senha">
                    </input>
                    <div id="botao">
                        <p id="entrar">Entrar</p>
                    </div>
                    <div id="botao" >
                        <button type="submit">
                            <a href="/" id="entrar">
                                Entrar
                            </a>
                        </button>
                    </div>
                    <p id="sem-conta">
                        <a href="/signup">Não tenho conta</a>
                    </p>
                    </div>
                    </div>
                </form> 
            </div>
        </div>
    </div>
    );
}

export default Login;