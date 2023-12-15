/* eslint-disable no-unused-vars */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
//import Scene from '/bunglow/Scene.jsx'
import BunglowCanvas from "./canvas/BunglowMod";

const Model = () => {
  return (
    <div className="flex flex-row justify-center items-center w-[1200px] h-auto border rounded-3xl bg-slate-200 mt-10">
      <div className=" z-20 -mt-10">
        <p className="text-gray-800 font-serif text-6xl font-normal leading-125 w-[434px] h-[162px]">
          Let Your Home Be Unique
        </p>
        <p
          className="text-gray-700 font-Jost text-base font-normal leading-6 tracking-tight w-[443px] h-[63px]"
          style={{ letterSpacing: "0.22px" }}
        >
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <button className="bg-slate-700 text-white rounded-2xl px-12 py-5 text-lg mt-6">
          Get Started 
        </button>
      </div>
      <BunglowCanvas></BunglowCanvas>
    </div>
  );
};

export default Model;
