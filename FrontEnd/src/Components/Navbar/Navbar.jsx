import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./voltvitrinLogo.png";
import { Link } from "react-router-dom";

function Navbar({}) {
  return (
    <nav className="border-b-2 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="VoltVitrin" />
        </div>
        <div className="flex lg:order-2">
          <div className="relative hidden lg:block">
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg lg:hidden"
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
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 lg:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          </div>
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium lg:space-x-28 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 text-3xl">
            <li>
              <Link to={"/"} className="block py-2 px-3 rounded lg:p-0">
                Home
              </Link>
            </li>
            <li className="">
              <Link to={"/cars"} className="block py-2 px-3 lg:p-0">
                Cars
              </Link>
            </li>
            <li>
              <Link to={"/compare"} className="block py-2 px-3 lg:p-0">
                Compare
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
