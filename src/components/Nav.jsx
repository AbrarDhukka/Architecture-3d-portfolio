/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Logo.png";
import search from "../assets/Search.png";

const Nav = () => {
  return (
    <div className="w-[1200px]  flex items-center justify-between gap-[399px] mt-[15px] flex-wrap">
      <div className="flex gap-2">
        <img src={logo} alt="logo" className="w-[33.9px] h-[34px]"></img>
        <p className="text-gray-800 font-serif text-4xl font-normal leading-tight">
          Interno
        </p>
      </div>
      <div>
        <ul className="flex gap-10">
          <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
            Home
          </li>
          <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
            Pages
          </li>
          <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
            Services
          </li>
          <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
            Project
          </li>
          <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
            Blogs
          </li>
          <img src={search} alt="search" className="w-[21px] h-[21px]"></img>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
