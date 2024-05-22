import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./voltvitrinLogo.png";

function Navbar() {
  const [isCarsMenuOpen, setIsCarsMenuOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/?type=brands")
      .then((response) => response.json())
      .then((data) =>
        data.forEach((data) => {
          console.log(data);
        })
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCarsClick = () => {
    setIsCarsMenuOpen(!isCarsMenuOpen);
  };

  return (
    <nav className="border-2 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="VoltVitrin" />
        </div>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-000 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm border-black border-2 rounded-xl text-black placeholder-black"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-28 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-3xl">
            <li>
              <a href="#" className="block py-2 px-3 rounded md:p-0">
                Home
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="block py-2 px-3 md:p-0"
                onClick={handleCarsClick}
              >
                Cars
              </a>
              {isCarsMenuOpen && (
                <div className="absolute left-0 top-full w-full bg-white border-t-2 border-black shadow-lg">
                  <ul className="max-w-screen-xl mx-auto p-4 flex flex-row wrap gap-4">
                    <li>
                      <a className="logolink" href="">
                        <img
                          className="carlogo"
                          src="./Logos/audi-logo.png"
                          alt=""
                        />
                        <p>Audi</p>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">
                Compare
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
