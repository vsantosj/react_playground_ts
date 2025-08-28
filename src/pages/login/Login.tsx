import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function checkLogin() {
    if (password && name) {
      setIsLogged(true);
    } else {
      alert('Email e senha incorreto.');
    }
  }

  return (
    <>
      {isLogged ? (
        <Home />
      ) : (
        <div>
          <h2>Login</h2>

          <label htmlFor="name">Login</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Digite seu password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={checkLogin}>Entrar</button>
          <p>Digite qualquer senha</p>
        </div>
      )}

    </>
  );
}

export default Login;
