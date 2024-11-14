import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
const Home = () => {
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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar/>
    </div>
  )
}

export default Home