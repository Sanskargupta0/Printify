import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Products from "../../constants/products";

// Map all products to the ImageList id , img , title , link and description
const ImageList = Products.map((product) => ({
  id: product.id,
  img: product.bgRemoveImage,
  title: product.name,
  description: product.description,
  link: product.link,
}));

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-lg sm:text-xl lg:text-2xl"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <StyledWrapper>
                      <button>
                        <Link to={data.link}>
                          <div className="default-btn">
                            <svg
                              className="css-i6dzq1"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                              strokeWidth={2}
                              stroke="#FFF"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle r={3} cy={12} cx={12} />
                            </svg>
                            <span>Quick View</span>
                          </div>
                          <div className="hover-btn">
                            <svg
                              className="css-i6dzq1"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                              strokeWidth={2}
                              stroke="#ffd300"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                            >
                              <circle r={1} cy={21} cx={9} />
                              <circle r={1} cy={21} cx={20} />
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            <span>Shop Now</span>
                          </div>
                        </Link>
                      </button>
                    </StyledWrapper>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={`src/assets/products/${data.img}`}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    border-radius: 50px;
    background-color: hsl(255deg 50% 40%);
    border: solid 4px hsl(50deg 100% 50%);
    font-family: inherit;
  }

  .default-btn,
  .hover-btn {
    background-color: hsl(255deg 50% 40%);
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    border-radius: 50px;
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  .hover-btn {
    position: absolute;
    inset: 0;
    background-color: hsl(255deg 50% 49%);
    transform: translate(0%, 100%);
  }

  .default-btn span {
    color: hsl(0, 0%, 100%);
  }

  .hover-btn span {
    color: hsl(50deg 100% 50%);
  }

  button:hover .default-btn {
    transform: translate(0%, -100%);
  }

  button:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`;

export default Hero;
