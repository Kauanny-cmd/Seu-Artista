import './styles.css';

function SignUp() {
    return (

        <div>
            <img src="./seta.svg" id="setinha" href="home"/>
        
        <div id="box" >
            
        <img src="./music.svg" id="image"></img>
            
            <div>

            <p id="cadastro">Cadastro</p>

                <form action="/profile" method="POST">
                    <div id="login-nome">
                        <input name="nome" type="text" placeholder="Digite seu nome..." id="input-nome">
                        </input>
                    <div  id="login-email">
                        <input name="email" type="email" placeholder="Digite seu email..." id="input-email">
                        </input>
                    <div id="login-senha">
                        <input name="senha" type="password" placeholder="Digite sua senha..." id="input-senha">
                        </input>
                        <div id="botao">
                        <button type="submit">
                            <a href="/" id="cadastrar">
                                Cadastrar
                            </a>
                        </button>
                        </div>
                        
                    <p id="com-conta">
                        <a href="login">Já tenho uma conta</a>
                    </p>
                    </div>
                    </div>
                    </div>
                </form> 
            </div>
        </div>
        </div>
    );
}

export default SignUp;