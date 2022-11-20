import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./Components/Style/globalStyles";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import HomePage from "./Pages/homePage";
import DoTransaction from "./Pages/doTransaction";


export default function App() {
  return(
    <BrowserRouter>
      <GlobalStyle/>

      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="home-page" element={<HomePage/>}/>
        <Route path="transaction" element={<DoTransaction/>}/>
      </Routes>
    </BrowserRouter>
  );
}
