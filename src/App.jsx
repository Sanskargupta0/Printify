import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pages } from './pages';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<pages.Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </>
  )
}

export default App