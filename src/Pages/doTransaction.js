import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { HIGHLIGHT_WORDS, SCREEN_BACKGROUND } from "../Constants/mainColors";
import URL_API from "../Constants/urlAPI";

export default function DoTransaction({ token }) {
  const { type } = useParams();
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [transactionData, setTransactionData] = useState({
    type,
    value: "",
    description: "",
  });
  const [isDoTransaction, setIsDoTransaction] = useState(false);

  function updateTransactionData(e) {
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  }

  function doTransaction(event) {
    event.preventDefault();

    setIsDoTransaction(true);

    axios
      .post(
        `${URL_API}/transaction`,
        { ...transactionData, value: Number(transactionData.value) },
        config
      )
      .then((res) => {
        setIsDoTransaction(false);
        navigate("/home-page");
      })
      .catch((error) => {
        setIsDoTransaction(false);

        if (error.response.status === 401) {
          navigate("/");
          return;
        }

        alert(error.response.data);
      });
  }

  return (
    <ScreenTransaction>
      <header>Nova {type === "deposit" ? "entrada" : "saída"}</header>
      <Form onSubmit={doTransaction}>
        <input
          type="number"
          name="value"
          placeholder="Valor"
          value={transactionData.value}
          onChange={updateTransactionData}
          disabled={isDoTransaction}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          minLength={3}
          maxLength={20}
          value={transactionData.description}
          onChange={updateTransactionData}
          disabled={isDoTransaction}
          required
        />
        <button type="submit" disabled={isDoTransaction}>
          {isDoTransaction ? (
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
            `Salvar ${type === "deposit" ? "entrada" : "saída"}`
          )}
        </button>
      </Form>
    </ScreenTransaction>
  );
}

const ScreenTransaction = styled.div`
  background-color: ${SCREEN_BACKGROUND};
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    color: ${HIGHLIGHT_WORDS};
    width: 85%;
    margin: 25px 0 40px;
    font-weight: 700;
    font-size: 26px;
  }
`;

const Form = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
