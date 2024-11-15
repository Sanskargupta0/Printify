import React from "react";
import Bags from "../../assets/products/bags.png";
import Boxes from "../../assets/products/boxes.png";
import Gift from "../../assets/products/gift-Box.png";
import Labels from "../../assets/products/labels.png";
import Roll from "../../assets/products/roll.png";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Bags,
    title: "Mylar Bags",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Boxes,
    title: "Boxes & Packaging",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Gift,
    title: "Gift Boxes",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Labels,
    title: "Labels & Stickers",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Roll,
    title: "Roll Labels",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
          Let’s Adorn Your Brand
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          We Empower Small Business Owners, Luxury Retail Stores, and All-Inclusive Industries with Custom Packaging Solutions.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* view all products button */}
          <div className="flex justify-center">
            <Link to="/products">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Products
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
