/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import Bunglow1Canvas from "./canvas/Bunglow1";
import Bunglow2Canvas from "./canvas/Bunglow2";
import Bunglow3Canvas from "./canvas/Bunglow3";
import Bunglow4Canvas from "./canvas/Bunglow4";

const Projects = () => {
  return (
    <div className="flex flex-wrap w-[1200px] gap-8 justify-between items-center mt-16">
      <div className="flex flex-col items-center gap-2 m-auto">
        <p
          className="text-gray-800 text-center font-serif text-5xl font-normal leading-5 tracking-wide"
          style={{ lineHeight: "125%", letterSpacing: "1px" }}
        >
          Follow Our Projects
        </p>
        <p
          className="text-gray-700 text-center font-Jost text-lg font-normal leading-6 tracking-tight w-[737px] mb-8"
          style={{ letterSpacing: "0.22px" }}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="w-[46%] h-[550px] bg-slate-100 rounded-3xl">
        {/* <Bunglow1Canvas></Bunglow1Canvas> */}

        <div className="sketchfab-embed-wrapper w-full h-full">
  <iframe
    title="Chinese Old Wall Building-Freepoly.org"
    frameBorder="0"
    allowFullScreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen; xr-spatial-tracking"
    execution-while-out-of-viewport
    execution-while-not-rendered
    web-share
    src="https://sketchfab.com/models/70fda0cf110c4ccbb7de300560fc35a7/embed"
    className="w-full h-full"
  ></iframe>
  <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
    <a
      href="https://sketchfab.com/3d-models/chinese-old-wall-building-freepolyorg-70fda0cf110c4ccbb7de300560fc35a7?utm_medium=embed&utm_campaign=share-popup&utm_content=70fda0cf110c4ccbb7de300560fc35a7"
      target="_blank"
      rel="nofollow"
      style={{ fontWeight: 'bold', color: '#1CAAD9' }}
    >
      Chinese Old Wall Building-Freepoly.org
    </a>{' '}
    by{' '}
    <a
      href="https://sketchfab.com/blackrray?utm_medium=embed&utm_campaign=share-popup&utm_content=70fda0cf110c4ccbb7de300560fc35a7"
      target="_blank"
      rel="nofollow"
      style={{ fontWeight: 'bold', color: '#1CAAD9' }}
    >
      Freepoly.org
    </a>{' '}
    on{' '}
    <a
      href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=70fda0cf110c4ccbb7de300560fc35a7"
      target="_blank"
      rel="nofollow"
      style={{ fontWeight: 'bold', color: '#1CAAD9' }}
    >
      Sketchfab
    </a>
  </p>
</div>


        <div className="bg-slate-700 text-white -mt-28 flex items-center flex-col">
        <p className="z-30 font-serif font-bold text-2xl">Modern luxury villa house building</p>
        <a className="cursor-pointer z-30 hover:underline" target="_blank" rel="noreferrer" href="https://sketchfab.com/3d-models/modern-luxury-villa-house-building-2a07a4a90ae54dd6bba3e33862b266ef">Source - Sketchfab</a>
        <a className="z-30 hover:underline" href="https://sketchfab.com/saakbary64" target="_blank" rel="noreferrer">Author - Saeedakbari</a>
        </div>
      </div>
      <div className="w-[46%] h-[550px] bg-slate-100 rounded-3xl">
        <Bunglow2Canvas></Bunglow2Canvas>
        <div className="bg-slate-700 text-white -mt-28 flex items-center flex-col">
        <p className="z-30 font-serif font-bold text-2xl">Modern luxury villa house building</p>
        <a className="cursor-pointer z-30 hover:underline" target="_blank" rel="noreferrer" href="https://sketchfab.com/3d-models/modern-luxury-villa-house-building-2a07a4a90ae54dd6bba3e33862b266ef">Source - Sketchfab</a>
        <a className="z-30 hover:underline" href="https://sketchfab.com/saakbary64" target="_blank" rel="noreferrer">Author - Saeedakbari</a>
        </div>
      </div>
      <div className="w-[46%] h-[550px] bg-black rounded-3xl">
        <Bunglow3Canvas></Bunglow3Canvas>
        <div className="bg-slate-700 text-white -mt-28 flex items-center flex-col">
        <p className="z-30 font-serif font-bold text-2xl">Cozy Modern Living Room</p>
        <a className="cursor-pointer z-30 hover:underline" target="_blank" rel="noreferrer" href="https://sketchfab.com/3d-models/cozy-modern-living-room-6a030bdb839e4e74bb58d7edb8f329e7">Source - Sketchfab</a>
        <a className="z-30 hover:underline" href="https://sketchfab.com/dylanheyes" target="_blank" rel="noreferrer">Author - Dylanheyes</a>
        </div>
      </div>
      <div className="w-[46%] h-[550px] bg-black rounded-3xl">
        <Bunglow4Canvas></Bunglow4Canvas>
        <div className="bg-slate-700 text-white -mt-28 flex items-center flex-col">
        <p className="z-30 font-serif font-bold text-2xl">Beach restaurant</p>
        <a className="cursor-pointer z-30 hover:underline" target="_blank" rel="noreferrer" href="https://sketchfab.com/3d-models/beach-restaurant-4c249b79c79d41e697fa7e4e0a895007">Source - Sketchfab</a>
        <a className="z-30 hover:underline" href="https://sketchfab.com/AndresMora1" target="_blank" rel="noreferrer">Author - AndresMoral</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;






