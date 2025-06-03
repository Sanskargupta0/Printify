import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { pages } from './pages';
import Products from "./constants/products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DownloadBtn from "./components/DownloadBtn/DownloadBtn";

// Styles
import { GlobalStyle } from './styles/GlobalStyle';

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
    <GlobalStyle />
    <Navbar/>
        <Routes>
          <Route path="/" element={<pages.Home/>} />
          <Route path="/about" element={<pages.About/>} />
          <Route path="/contact" element={<pages.Contact/>} />
          <Route path="/products" element={<pages.ProductListing/>} />
          {Products.map((product) => (
          <Route 
            key={product.id} 
            path={product.link} 
            element={<pages.ProductPage product={product} />} 
          />
        ))}
          <Route path="*" element={<pages.Error/>} />
        </Routes>
      <DownloadBtn />
      <Footer />
      </>
  )
}

export default App