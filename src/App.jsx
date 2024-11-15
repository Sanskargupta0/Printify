import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { pages } from './pages';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DownloadBtn from "./components/DownloadBtn/DownloadBtn";

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
        <Routes>
          <Route path="/" element={<pages.Home/>} />
          <Route path="/aboutUs" element={<pages.About/>} />
          <Route path="/contact" element={<pages.Contact/>} />
          <Route path="*" element={<pages.Error/>} />
        </Routes>
      <DownloadBtn />
      <Footer />
      </>
  )
}

export default App