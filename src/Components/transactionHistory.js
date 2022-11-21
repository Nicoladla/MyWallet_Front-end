import styled from "styled-components";

export default function TransactionHistory() {
  return (
    <BoxTransactionHistory>
      <ul>
        <Transaction>
          <div>
            <Date>24/11</Date>
            <p>Almoço com mãe</p>
          </div>
          <Value>39,90</Value>
        </Transaction>
      </ul>
      <footer>
        <Saldo>SALDO</Saldo>
        <Value>2000,90</Value>
      </footer>
    </BoxTransactionHistory>
  );
}

const BoxTransactionHistory = styled.main`
  background-color: #ffffff;
  width: 85%;
  height: 68vh;
  margin-bottom: 13px;
  padding: 23px 12px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    width: 100%;
  }

  footer {
    display: flex;
    justify-content: space-between;
  }
`;

const Transaction = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const Saldo = styled.p`
  font-weight: bold;
`;

const Value = styled.p`
  font-weight: 400;
  color: red;
`;
const Date = styled.p`
  color: #c6c6c6;
  margin-right: 10px;
`;
