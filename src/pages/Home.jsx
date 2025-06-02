import React from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/FAQ/FAQ";
import Trending from "../components/Trending/Trending";
import PackagingCategories from "../components/PackagingCategories/PackagingCategories";
import WhyChooseUsSection from "../components/WhyChooseUsSection/WhyChooseUsSection";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero />
      <PackagingCategories />
      <WhyChooseUsSection />
      <Trending />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Home