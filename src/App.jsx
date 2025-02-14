import React from "react";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Home />
    </>

  );
};

export default App;
