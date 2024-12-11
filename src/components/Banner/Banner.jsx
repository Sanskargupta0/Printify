import React from "react";
import BannerImg from "../../assets/website/Offer.png";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Helping Small Businesses Grow Big
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Welcome to CorePac USA, your partner for precision printing and
              customized packaging solutions. Established in 2024, we&apos;ve
              quickly become known for our expertise, customer focus, and
              high-quality craftsmanship, turning your vision into impactful
              realities.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <span className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400">
                  &#128293;
                </span>
                <p>Innovative Solutions</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <span className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100 dark:bg-red-400">
                  &#128187;
                </span>
                <p>Customizable Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <span className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400">
                  &#9989;
                </span>
                <p>High-Quality Standards</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <span className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400">
                  &#128218;
                </span>
                <p>Industry Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
