// /* eslint-disable no-unused-vars */
// import React from "react";

// const WorkCards = () => {
//   return (
//     <div className="w-[1200px] flex justify-between items-center gap-8 text-center mt-28">
//       <div className="w-[25%]">
//         <p
//           className="text-gray-800 text-center font-DM-Serif-Display text-xl font-bold leading-5"
//           style={{ lineHeight: "125%" }}
//         >
//           Project Plan
//         </p>
//         <p
//           className="text-gray-700 text-center font-Jost text-base font-normal leading-6 tracking-tight  mt-5"
//           style={{ letterSpacing: "0.22px" }}
//         >
//           There are many variations of the passages of lorem Ipsum from
//           available, majority.
//         </p>
//         <p className="mt-6 underline">Read more </p>
//       </div>

//       <div className="w-[25%]">
//         <p
//           className="text-gray-800 text-center font-DM-Serif-Display text-xl font-bold leading-5"
//           style={{ lineHeight: "125%" }}
//         >
//           Interior Work
//         </p>
//         <p
//           className="text-gray-700 text-center font-Jost text-base font-normal leading-6 tracking-tight mt-5"
//           style={{ letterSpacing: "0.22px" }}
//         >
//           There are many variations of the passages of lorem Ipsum from
//           available, majority.
//         </p>
//         <p className="mt-6 underline">Read more </p>
//       </div>

//       <div className="w-[25%]">
//         <p
//           className="text-gray-800 text-center font-DM-Serif-Display text-xl font-bold leading-5 "
//           style={{ lineHeight: "125%" }}
//         >
//           Realization
//         </p>
//         <p
//           className="text-gray-700 text-center font-Jost text-base font-normal leading-6 tracking-tight mt-5"
//           style={{ letterSpacing: "0.22px" }}
//         >
//           There are many variations of the passages of lorem Ipsum from
//           available, majority.
//         </p>
//         <p className="mt-6 underline">Read more </p>
//       </div>
//     </div>
//   );
// };

// export default WorkCards;

/* eslint-disable no-unused-vars */
import React from "react";

const WorkCards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-28">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <p
          className="text-gray-800 text-center font-DM-Serif-Display text-xl font-bold leading-5"
          style={{ lineHeight: "125%" }}
        >
          Project Plan
        </p>
        <p
          className="text-gray-700 text-center font-Jost text-base font-normal leading-6 tracking-tight mt-5"
          style={{ letterSpacing: "0.22px" }}
        >
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <p className="mt-6 underline text-center">Read more </p>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/4">
        <p
          className="text-gray-800 text-center font-DM-Serif-Display text-xl font-bold leading-5"
          style={{ lineHeight: "125%" }}
        >
          Interior Work
        </p>
        <p
          className="text-gray-700 text-center font-Jost text-base font-normal leading-6 tracking-tight mt-5"
          style={{ letterSpacing: "0.22px" }}
        >
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <p className="mt-6 underline text-center">Read more </p>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/4">
        <p
          className="text-gray-800 text-center font-DM-Serif-Display text-xl font-bold leading-5"
          style={{ lineHeight: "125%" }}
        >
          Realization
        </p>
        <p
          className="text-gray-700 text-center font-Jost text-base font-normal leading-6 tracking-tight mt-5"
          style={{ letterSpacing: "0.22px" }}
        >
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <p className="mt-6 underline text-center">Read more </p>
      </div>
    </div>
  );
};

export default WorkCards;
