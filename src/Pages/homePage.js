import styled from "styled-components";
import {
  SignOutIcon,
  PlusCircleIcon,
  NoEntryIcon,
} from "@primer/octicons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TransactionHistory from "../Components/transactionHistory";
import { SCREEN_BACKGROUND, HIGHLIGHT_WORDS } from "../Constants/mainColors";
import URL_API from "../Constants/urlAPI";
import Loading from "../Components/loading";

export default function HomePage({ token }) {
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL_API}/transaction`, config)
      .then((res) => setTransactions(res.data))
      .catch((error) => navigate("/"));
  }, []);

  function signOut() {
    axios
      .delete(`${URL_API}/sign-out`, config)
      .then((res) => navigate("/"))
      .catch((error) => {
        if (error.response.status === 401) {
          navigate("/");
          return;
        }
        alert(error.response.data);
      });
  }

  if (transactions === null) {
    return <Loading />;
  }

  return (
    <ScreenHomePage>
      <header>
        <h1> Olá, {transactions.userName}</h1>
        <div onClick={signOut}>
          <SignOutIcon size={26} fill="#ffffff" />
        </div>
      </header>
      <TransactionHistory transactions={transactions.transactions} />
      <Footer>
        <button onClick={() => navigate("/transaction/deposit")}>
          <PlusCircleIcon size={20} />
          <p>
            Nova
            <br /> entrada
          </p>
        </button>

        <button onClick={() => navigate("/transaction/withdraw")}>
          <NoEntryIcon size={20} />
          <p>
            Nova
            <br /> saída
          </p>
        </button>
      </Footer>
    </ScreenHomePage>
  );
}

const ScreenHomePage = styled.div`
  background-color: ${SCREEN_BACKGROUND};
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 85%;
    margin: 25px 0 40px;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: ${HIGHLIGHT_WORDS};
    font-weight: 700;
    font-size: 26px;
  }
`;

const Footer = styled.footer`
  width: 85%;
  height: 18vh;
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    height: 100%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p {
    text-align: start;
  }
`;
