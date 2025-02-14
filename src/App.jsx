import React from "react";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="pt-30"> {/* Adjust this padding based on the navbar height */}
        <Home />
      </div>
    </>

  );
};

export default App;
