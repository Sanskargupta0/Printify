import React from "react";
import Hero from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/FAQ/FAQ";
import Trending from "../components/Trending/Trending";
import PackagingCategories from "../components/PackagingCategories/PackagingCategories";
import IndustriesWeServe from "../components/IndustriesWeServe/IndustriesWeServe";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero />
      <PackagingCategories />
      <IndustriesWeServe />
      <Trending />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Home