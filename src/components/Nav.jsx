/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import logo from "../assets/Logo.png";
// import search from "../assets/Search.png";

// const Nav = () => {
//   return (
//     <div className="w-[1200px]  flex items-center justify-between gap-[399px] mt-[15px] flex-wrap">
//       <div className="flex gap-2">
//         <img src={logo} alt="logo" className="w-[33.9px] h-[34px]"></img>
//         <p className="text-gray-800 font-serif text-4xl font-normal leading-tight">
//           Interno
//         </p>
//       </div>
//       <div>
//         <ul className="flex gap-10">
//           <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
//             Home
//           </li>
//           <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
//             Pages
//           </li>
//           <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
//             Services
//           </li>
//           <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
//             Project
//           </li>
//           <li className="text-gray-800 text-center font-jost text-base font-normal leading-tight">
//             Blogs
//           </li>
//           <img src={search} alt="search" className="w-[21px] h-[21px]"></img>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;




// eslint-disable-next-line no-unused-vars
// import React from "react";
// import logo from "../assets/Logo.png";
// import search from "../assets/Search.png";

// const Nav = () => {
//   return (
//     <nav className="flex items-center justify-between w-full max-w-[1200px] px-4 py-5">
//       <div className="flex gap-2">
//         <img src={logo} alt="logo" className="w-[33.9px] h-[34px]" />
//         <p className="text-gray-800 font-serif text-4xl font-normal leading-tight">
//           Interno
//         </p>
//       </div>
//       <div className="hidden md:flex items-center gap-10">
//         <ul className="flex gap-10 text-gray-800 text-center font-jost text-base font-normal leading-tight">
//           <li>Home</li>
//           <li>Pages</li>
//           <li>Services</li>
//           <li>Project</li>
//           <li>Blogs</li>
//         </ul>
//         <img src={search} alt="search" className="w-[21px] h-[21px]" />
//       </div>
//       <div className="md:hidden flex items-center gap-4">
//         <button className="text-gray-800 font-jost text-base font-normal leading-tight">Menu</button>
//         <img src={search} alt="search" className="w-[21px] h-[21px]" />
//       </div>
//     </nav>
//   );
// };

// export default Nav;




import React, { useState } from "react";
import ReactModal from "react-modal"; // Install and import ReactModal library

import logo from "../assets/Logo.png";
import search from "../assets/Search.png";

const Nav = () => {
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const toggleModal = () => setShowModal(!showModal);

  return (
    <nav className="flex items-center justify-between w-full max-w-[1200px] px-4 py-5">
      <div className="flex gap-2">
        <img src={logo} alt="logo" className="w-[33.9px] h-[34px]" />
        <p className="text-gray-800 font-serif text-4xl font-normal leading-tight">
          Interno
        </p>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-10 text-gray-800 text-center font-jost text-base font-normal leading-tight">
          <li>Home</li>
          <li>Pages</li>
          <li>Services</li>
          <li>Project</li>
          <li>Blogs</li>
        </ul>
        <img src={search} alt="search" className="w-[21px] h-[21px]" />
      </div>
      <div className="md:hidden flex items-center gap-4">
        <button
          className="text-gray-800 font-jost text-base font-normal leading-tight cursor-pointer"
          onClick={toggleModal}
        >
          Menu
        </button>
        <img src={search} alt="search" className="w-[21px] h-[21px]" />
      </div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={toggleModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
          content: {
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <ul className="flex flex-col gap-2 text-gray-800 text-center font-jost text-base font-normal leading-tight">
          <li onClick={() => setShowModal(false)}>Home</li>
          <li onClick={() => setShowModal(false)}>Pages</li>
          <li onClick={() => setShowModal(false)}>Services</li>
          <li onClick={() => setShowModal(false)}>Project</li>
          <li onClick={() => setShowModal(false)}>Blogs</li>
        </ul>
      </ReactModal>
    </nav>
  );
};

export default Nav;
