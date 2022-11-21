import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./Components/Style/globalStyles";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import HomePage from "./Pages/homePage";
import DoTransaction from "./Pages/doTransaction";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SignIn setToken={setToken} />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="home-page" element={<HomePage token={token} />} />
        <Route path="transaction" element={<DoTransaction token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}
