import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { HIGHLIGHT_WORDS, SCREEN_BACKGROUND } from "../Constants/mainColors";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function updateRegistrationData(e) {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  }

  function registerUser(event) {
    event.preventDefault();
  }

  return (
    <ScreenSingUp>
      <header>MyWallet</header>
      <Form onSubmit={registerUser}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          minLength={3}
          value={registrationData.name}
          onChange={updateRegistrationData}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registrationData.email}
          onChange={updateRegistrationData}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          minLength={6}
          value={registrationData.password}
          onChange={updateRegistrationData}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha"
          minLength={6}
          value={registrationData.confirmPassword}
          onChange={updateRegistrationData}
          required
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </ScreenSingUp>
  );
}

const ScreenSingUp = styled.div`
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
