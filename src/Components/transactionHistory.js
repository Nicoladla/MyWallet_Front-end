import styled from "styled-components";

export default function TransactionHistory() {
  return (
    <BoxTransactionHistory>
      <Transaction>
        <p>
          <span>24/11</span>Almoço com mãe
        </p>
        <p>39,90</p>
      </Transaction>
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
`;

const Transaction = styled.section`
  background-color: aquamarine;
  font-size: 16px;
  display: flex;
  justify-content: space-between;

  span {
    color: #C6C6C6;
    margin-right: 10px;
  }
`;
