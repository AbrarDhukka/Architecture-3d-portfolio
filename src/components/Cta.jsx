/* eslint-disable no-unused-vars */
import React from "react";

const Cta = () => {
  return (
    <div className="relative w-[1200px] m-auto mt-14">
      <div className="flex flex-col items-center gap-2 m-auto">
        <p
          className="text-gray-800 text-center font-serif text-5xl font-normal leading-5 tracking-wide"
          style={{ lineHeight: "125%", letterSpacing: "1px" }}
        >
          We Create The Art Of Stylish Living Stylishly
        </p>
        <p
          className="text-gray-700 text-center font-Jost text-lg font-normal leading-6 tracking-tight w-[737px] mb-8"
          style={{ letterSpacing: "0.22px" }}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
      </div>
      <div className="absolute top-[450px] left-0 right-0 bg-slate-200 opacity-80 p-12 w-full rounded-3xl z-10">
        <div className="flex justify-center items-center m-auto">
          <div className="w-[20%] flex flex-col justify-center items-center">
            <p className="text-black font-bold font-dm-serif-display text-5xl leading-125 tracking-wider">
              12
            </p>
            <p className="text-xl">Years of Experience</p>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            <p className="text-black font-bold font-dm-serif-display text-5xl leading-125 tracking-wider">
              85
            </p>
            <p className="text-xl">Success Project</p>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            <p className="text-black font-bold font-dm-serif-display text-5xl leading-125 tracking-wider">
              15
            </p>
            <p className="text-xl">Projects</p>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            <p className="text-black font-bold font-dm-serif-display text-5xl leading-125 tracking-wider">
              96
            </p>
            <p className="text-xl">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-full relative z-0">
        <img
          className="rounded-3xl"
          src="https://s3-alpha-sig.figma.com/img/1f8a/ebb2/d8e10f7f8c067f29ece3a917db6105c9?Expires=1703462400&Signature=XkXz~uc9h0CzDoh1I69eJnLEyleCtQxCLWuw-OLIxrKkfuGLAgt7vfHN2M4bDr3~DqV0lZf2c64sAb~Kd7euhhknb-0gJwWF1z-J1sGGbnbSaSvoBo3Kfs-WglVTPqQFMsgVLm-E-NQDSseHbxBAuPyLHVyIkOB22aWaO2UzZcF8LTcAXwnkFAed3ytMX8XD85IXOOJgY7wzUpg5NWQaKQKS-iw7j4WCG-pnOMc5j3qo8zON0TblEJ~VRWZ0-PD6wb3h8-JBoQCYcyis1zMK2BE14-9LLquZaMiLma6HAFX0ZafszBUdVNrr5M8EgMcZHQGr2fBmeWmGZDU3BnZBzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="image"
        ></img>
      </div>
    </div>
  );
};

export default Cta;
