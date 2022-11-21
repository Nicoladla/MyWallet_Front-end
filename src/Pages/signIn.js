import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { HIGHLIGHT_WORDS, SCREEN_BACKGROUND } from "../Constants/mainColors";

export default function SignIn() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);

  function updateLoginData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function connectUser(event) {
    event.preventDefault();
  }

  return (
    <ScreenSingIn>
      <header>MyWallet</header>
      <Form onSubmit={connectUser}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={updateLoginData}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          minLength={6}
          value={loginData.password}
          onChange={updateLoginData}
          required
        />
        <button type="submit">Entrar</button>
      </Form>
      <Link to="sign-up">Primeira vez? Cadastre-se!</Link>
    </ScreenSingIn>
  );
}

const ScreenSingIn = styled.div`
  background-color: ${SCREEN_BACKGROUND};
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    color: ${HIGHLIGHT_WORDS};
    font-family: "Saira Stencil One";
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 24px;
  }

  a {
    color: ${HIGHLIGHT_WORDS};
    font-family: "Raleway";
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
    margin-top: 36px;
  }
`;

const Form = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
`;
