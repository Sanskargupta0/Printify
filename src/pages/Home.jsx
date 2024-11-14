import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar/>
      <Hero />
      <Products />
      <TopProducts />
    </div>
  )
}

export default Home