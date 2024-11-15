import React from "react";
import styled from 'styled-components';
import Sticker from "../../assets/products/Stickers.png";
import Tape from "../../assets/products/tape.png";
import Gift from "../../assets/products/gift-Box2.png";
import Img1 from "../../assets/products/gallery/img1.png";
import Img2 from "../../assets/products/gallery/img2.png";
import Img3 from "../../assets/products/gallery/img3.png";
import Img4 from "../../assets/products/gallery/img4.png";
import Img5 from "../../assets/products/gallery/img5.png";
import Img6 from "../../assets/products/gallery/img6.png";
import Img7 from "../../assets/products/gallery/img7.png";
import Img8 from "../../assets/products/gallery/img8.png";
import Img9 from "../../assets/products/gallery/img9.png";
import Img10 from "../../assets/products/gallery/img10.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Sticker,
    title: "Sticker & Labels",
    description:
      "Make your products pop with our product labels that combine eye-catching design and essential information.",
  },
  {
    id: 2,
    img: Tape,
    title: "Packaging Tapes",
    description:
      "Boxes and packaging serve as the silent guardians of products. It is ensuring they reach their destination unscathed. Beyond practicality, packaging is a canvas for brand identity and storytelling. ",
  },
  {
    id: 3,
    img: Gift,
    title: "Custom Gift Boxes",
    description:
      "You can also get plain boxes from us. But if you need totally 100% 'custom gift boxes,' you are at the best place with all the packaging possibilities.",
  },
];
const TopProducts = () => {
  return (
    <div>
      <div className="container">
        
      <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
        Endless Printing And Packaging Possibilities
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-2"
        data-aos="fade-up"
        data-aos-delay={200}
        >
          <img
            src={Img1}
            alt="Disposable cups and containers"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1"
        data-aos="fade-up"
        data-aos-delay={400}
        >
          <img
            src={Img2}
            alt="Colorful stand-up pouches"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1"
        data-aos="fade-up"
        data-aos-delay={600}
        >
          <img
            src={Img3}
            alt="Promotional posters"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1" 
        data-aos="fade-up"
        data-aos-delay={800}
        >
          <img
            src={Img4}
            alt="Sticker rolls"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1" data-aos="fade-up"
                data-aos-delay={1000} >
          <img
            src={Img5}
            alt="Brochures or catalogs"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-2" data-aos="fade-up"
                data-aos-delay={1000} >
          <img
            src={Img6}
            alt="Food packaging"
            width={150}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1"
        data-aos="fade-up"
        data-aos-delay={1000}
        >
          <img
            src={Img7}
            alt="Bottles and labels"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1"
        data-aos="fade-up"
        data-aos-delay={1000}
        >
          <img
            src={Img8}
            alt="Small boxes"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1"
        data-aos="fade-up"
        data-aos-delay={1000}
        >
          <img
            src={Img9}
            alt="Stand banners"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1"
        data-aos="fade-up"
        data-aos-delay={1000}
        >
          <img
            src={Img10}
            alt="Business cards or postcards"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8 md:mt-12">
      <StyledWrapper>
      <button className="cta flex items-center" style={{"marginBottom":"4rem"}}>
        <span>About Us</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
      </div>
    </div>


        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl  bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #fea928;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: #fea928;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }`;

export default TopProducts;
