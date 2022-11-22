import { useEffect, useState } from "react";
import styled from "styled-components";

export default function TransactionHistory({ transactions }) {
  const haveTransactions = transactions.length !== 0;

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (haveTransactions) {
      let newBalance = 0;

      transactions.forEach((t) => {
        if (t.type === "deposit") {
          newBalance += t.value;
        } else {
          newBalance -= t.value;
        }
      });

      setBalance(newBalance);
    }
  }, [haveTransactions, transactions]);

  return (
    <BoxTransactionHistory haveTransactions={haveTransactions}>
      {!haveTransactions ? (
        <span>Não há registros de entrada ou saída</span>
      ) : (
        <>
          <ul>
            {transactions.map((transaction) => (
              <Transaction key={transaction._id}>
                <div>
                  <Date>{transaction.date}</Date>
                  <p>{transaction.description}</p>
                </div>
                <Value isPositive={transaction.type === "deposit"}>
                  {transaction.value.toFixed(2).replace(".", ",")}
                </Value>
              </Transaction>
            ))}
          </ul>
          <footer>
            <Saldo>SALDO</Saldo>
            <Value isPositive={balance >= 0}>
              {balance.toFixed(2).replace(".", ",")}
            </Value>
          </footer>
        </>
      )}
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
  align-items: center;
  justify-content: ${({ haveTransactions }) =>
    !haveTransactions ? "center" : "space-between"};

  ul {
    width: 100%;
  }

  span {
    width: 70%;
    color: #868686;
    font-size: 20px;
    text-align: center;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Transaction = styled.li`
  font-size: 16px;
  margin-bottom: 15px;
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
  color: ${({ isPositive }) => (isPositive ? "#03AC00" : "#C70000")};
`;
const Date = styled.p`
  color: #c6c6c6;
  margin-right: 10px;
`;
