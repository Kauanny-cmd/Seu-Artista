import './styles.css';

function SignUp() {
    return (
        <div id="box" >
            
           <div id="image">
                <img src="music.svg" ></img>
           </div>
            
            <div>

                <p id="cadastro">Cadastro</p>

                <form action="" method="POST">
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
       
    );
}

export default SignUp;