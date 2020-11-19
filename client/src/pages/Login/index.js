import './styles.css';

function Login() {
    return (
    <div >
           
               <img src="seta.svg" id="setinha"/>
           
      
        <div id="box" >
        
            <img src="melo" id="image"></img>

        <p id="login">LOGIN</p>

            <div>
                <form action="" method="POST">
                    <div>
                        <input name="email" type="email" placeholder="Digite seu email..." id="input-email">
                        </input>
                    <div>
                        <input name="senha" type="password" placeholder="Digite sua senha..." id="input-senha">
                    </input>
                    
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