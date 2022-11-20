import { Link } from "react-router-dom";
import styled from "styled-components";

import { HIGHLIGHT_WORDS, SCREEN_BACKGROUND } from "../Constants/mainColors";

export default function SignIn() {
  return (
    <ScreenSingIn>
      <header>MyWallet</header>
      <Form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" minLength={6} required />
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
