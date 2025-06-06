import React from "react";
import Cocacola1 from "../assets/cocacola1.png";
import Cocacola2 from "../assets/cocacola2.png";
import Cocacola3 from "../assets/cocacola3.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const MotionDiv = motion.div;

const HeroData = [
  {
    id: 1,
    image: Cocacola1,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$40",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
  {
    id: 2,
    image: Cocacola2,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$100",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 3,
    image: Cocacola3,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(HeroData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <MotionDiv
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        {/* Navbar component */}
        <Navbar />
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-max">
          {/* Data inof */}
          <div className="flex flex-col justify-center  text-white py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div>
              <h1 className="text-3xl lg:text-6xl xl:text-7xl font-bold font-meri text-shadow">
                {activeData.title}
              </h1>
              <p className="text-sm leading-loose text-white/80">
                {activeData.subtitle}
              </p>
              <button className="px-4 py-2 text-red-700 bg-white inline-block font-normal rounded-sm my-5">
                Order Now
              </button>
              {/* List separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>TOP RECOMMENDATION</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* Image switcher */}
              <div className="grid grid-cols-3 gap-10">
                {HeroData.map((data) => {
                  return (
                    <div>
                      <div className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200">
                        <div className=" flex justify-center">
                          <img
                            src={data.image}
                            alt=""
                            className={`w-[80px] drop-shadow-img ${
                              activeData.image === data.image
                                ? " opacity-100 scale-110"
                                : " opacity-50"
                            }`}
                          />
                        </div>
                        <div className="text-center !mt-6 space-y-1">
                          <p className="text-base line-through opacity-50">
                            {data.price}
                          </p>
                          <p className="text-xl font-bold">{data.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
            <img
              src={activeData.image}
              alt=""
              className=" w-[150px] md:w-[200px] xl:w-[350px] drop-shadow-img relative z-10"
            />
            <div className="text-white/5 text-[300px] font-pop font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {activeData.modal}
            </div>
          </div>
          {/* Whatsapp icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default Hero;
