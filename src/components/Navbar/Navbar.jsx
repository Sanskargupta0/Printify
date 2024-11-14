import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import styled from "styled-components";

const Menu = [
  {
    id: 1,
    name: "Corrugated boxes",
    link: "/#",
  },
  {
    id: 2,
    name: "Mono Cartons",
    link: "/#services",
  },
  {
    id: 3,
    name: "Labels and Stickers",
    link: "/#",
  },
  {
    id: 4,
    name: "Packaging Tape",
    link: "/#",
  },
  {
    id: 5,
    name: "Flexible Pouches",
    link: "/#",
  },
  {
    id: 6,
    name: "Shrink Sleeves",
    link: "/#",
  },
  {
    id: 7,
    name: "Rigid gift boxes",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Corrugated boxes",
    link: "/#",
  },
  {
    id: 2,
    name: "Mono Cartons",
    link: "/#",
  },
  {
    id: 3,
    name: "Labels and Stickers",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Print 365
            </a>
          </div>

          <div className="flex gap-2">
            {/* search bar */}
            <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
               </div>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
            {/* Get in touch Button */}
            <GetInTouch>
              <button>
                Get in touch
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </GetInTouch>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-2">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const GetInTouch = styled.div`
  button {
    position: relative;
    padding: 6px 15px;
    background: #4c83fa;
    font-size: 12px;
    font-weight: 1000;
    color: #ffffff;
    border: 3px solid #4c83fa;
    border-radius: 8px;
    box-shadow: 0 0 0 #ffffff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .star-1 {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 25px;
    height: auto;
    filter: drop-shadow(0 0 0 #4c83fa);
    z-index: -5;
    transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
  }

  .star-2 {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0 #4c83fa);
    z-index: -5;
    transition: all 1scubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-3 {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #4c83fa);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-4 {
    position: absolute;
    top: 20%;
    left: 40%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 0 #4c83fa);
    z-index: -5;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-5 {
    position: absolute;
    top: 25%;
    left: 45%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0 #4c83fa);
    z-index: -5;
    transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-6 {
    position: absolute;
    top: 5%;
    left: 50%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #4c83fa);
    z-index: -5;
    transition: all 0.8s ease;
  }

  button:hover {
    background: transparent;
    color: #4c83fa;
    box-shadow: 0 0 0px #4c83fa;
  }

  button:hover .star-1 {
    position: absolute;
    top: -80%;
    left: -30%;
    width: 25px;
    height: auto;
    filter: drop-shadow(0 0 0px #4c83fa);
    z-index: 2;
  }

  button:hover .star-2 {
    position: absolute;
    top: -0%;
    left: 10%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0px #4c83fa);
    z-index: 2;
  }

  button:hover .star-3 {
    position: absolute;
    top: 55%;
    left: 25%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0px #4c83fa);
    z-index: 2;
  }

  button:hover .star-4 {
    position: absolute;
    top: 30%;
    left: 80%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 0px #4c83fa);
    z-index: 2;
  }

  button:hover .star-5 {
    position: absolute;
    top: 25%;
    left: 115%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0px #4c83fa);
    z-index: 2;
  }

  button:hover .star-6 {
    position: absolute;
    top: 5%;
    left: 60%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0px #4c83fa);
    z-index: 2;
  }

  .fil0 {
    fill: #4c83fa;
  }
`;

const SearchBar = styled.div`
  .input {
    max-width: 190px;
  }

  .label {
    position: relative;
    display: block;
    width: 280px;
    border-radius: 10px;
    border: 2px solid #5e5757;
    padding: 15px 8px 15px 10px;
    text-align: left;
    box-shadow:
      20px 20px 60px #3853c7,
      -20px -20px 60px #19ad88;
  }

  .shortcut {
    position: absolute;
    top: 50%;
    right: -3%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    color: #c5c5c5;
    background-color: #5e5757;
    padding: 0.3em;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .search_bar {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    color: rgb(111, 115, 119);
  }`;


export default Navbar;
