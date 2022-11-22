import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import { HIGHLIGHT_WORDS, SCREEN_BACKGROUND } from "../Constants/mainColors";
import URL_API from "../Constants/urlAPI";

export default function SignIn({ setToken }) {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function updateLoginData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function connectUser(event) {
    event.preventDefault();
    setIsLogin(true);

    axios
      .post(`${URL_API}/sign-in`, loginData)

      .then((res) => {
        setIsLogin(false);
        setToken(res.data);
        navigate("/home-page");
      })

      .catch((error) => {
        setIsLogin(false);
        setErrorMessage(error.response.data.message);
      });
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
          disabled={isLogin}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          minLength={6}
          value={loginData.password}
          onChange={updateLoginData}
          disabled={isLogin}
          required
        />
        <p>{errorMessage}</p>

        <button type="submit" disabled={isLogin}>
          {isLogin ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Entrar"
          )}
        </button>
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

  p {
    color: #f75252;
    font-size: 15px;
    margin: -9px 0 13px 2px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
