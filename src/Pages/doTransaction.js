import styled from "styled-components";

import { HIGHLIGHT_WORDS, SCREEN_BACKGROUND } from "../Constants/mainColors";

export default function DoTransaction({ token }) {
  return (
    <ScreenTransaction>
      <header>Nova entrada</header>
      <Form>
        <input type="number" placeholder="Valor" min={1} required />
        <input type="text" placeholder="Descrição" minLength={3} maxLength={20} required />
        <button type="submit">Salvar entrada</button>
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
`;
