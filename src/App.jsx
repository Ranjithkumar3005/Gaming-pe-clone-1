import { Routes, Route, useLocation } from "react-router-dom";
import JoinEvent from "./components/JoinEvent/JoinEvent";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/newsletter" && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<JoinEvent />} />
        <Route path="/features/" element={<Features></Features>} />
      </Routes>
    </>
  );
};

export default App;
