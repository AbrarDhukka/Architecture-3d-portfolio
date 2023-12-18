/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Feedback = () => {
  const testimonials = [
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png",
      name: "Nattasha Mith",
      location: "Sydney, USA",
      quote:
        "Lorem Ipsum is simply dummy text of the typesetting industry.Lorem Ipsum is simply dummy text of the typesetting industry...",
    },
    {
      image: "https://i.pngimg.me/thumb/f/720/m2i8d3i8N4d3N4K9.jpg",
      name: "John Doe",
      location: "New York, USA",
      quote:
        "Another great quote about your service goes here.Another great quote about your service goes here...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLEziy2FWAM6Z0NT0yTmsmD2VySobPG4y7eWSEd4heKgu-cU0WCZLxn5Poox0Y9KYmyc&usqp=CAU",
      name: "Jane Smith",
      location: "London, UK",
      quote:
        "Your product was a game-changer for me!Your product was a game-changer for me!.Your product was a game-changer for me!",
    },
  ];
  return (
    <div className="w-[1200px] h-[550px] bg-slate-300 rounded-3xl flex flex-col items-center justify-center mt-28 gap-10">
      <p className=" text-gray-800 text-center font-serif text-5xl font-normal leading-125 tracking-wide">
        What People Thinks About Us!
      </p>
      <div className="flex gap-7">
        {/* <div className="flex flex-col rounded-lg shadow-md bg-white m-auto">
      <div className="flex items-center p-4 space-x-4">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src=""
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900">Nattasha Mith</h3>
          <p className="text-sm text-gray-500">Sydney, USA</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer scrambled pieces of type and arranged them to make a
          print specimen book. 
        </p>
      </div>

            </div>
            <div className="flex flex-col rounded-lg shadow-md bg-white m-auto">
      <div className="flex items-center p-4 space-x-4">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src=""
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900">Nattasha Mith</h3>
          <p className="text-sm text-gray-500">Sydney, USA</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer scrambled pieces of type and arranged them to make a
          print specimen book. 
        </p>
      </div>

            </div>
            <div className="flex flex-col rounded-lg shadow-md bg-white m-auto">
      <div className="flex items-center p-4 space-x-4">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src=""
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900">Nattasha Mith</h3>
          <p className="text-sm text-gray-500">Sydney, USA</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer scrambled pieces of type and arranged them to make a
          print specimen book. 
        </p>
      </div>

            </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-6">
          {testimonials.map((testimonial) => (
            <div className="flex flex-col items-center justify-center rounded-lg shadow-md bg-white p-6 md:p-8">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
