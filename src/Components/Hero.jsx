import React from "react";
import Cocacola1 from "../assets/cocacola1.png";
import Cocacola2 from "../assets/cocacola2.png";
import Cocacola3 from "../assets/cocacola3.png";
import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const slideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const MotionDiv = motion.div;

const HeroData = [
  {
    id: 1,
    image: Cocacola1,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$100",
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
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className=" bg-brandDark text-white">
        {/* Navbar component */}
        <Navbar />
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/* Data inof */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeData.id}
                  variants={slideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl xl:text-7xl font-bold font-meri text-shadow"
                >
                  {activeData.title}
                </motion.h1>

              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={slideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.button
                  key={activeData.id}
                  variants={slideRight(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="px-4 py-2 text-primary bg-white inline-block font-normal rounded-sm my-5 hover:bg-primary hover:text-white duration-200"
                >
                  Order Now
                </motion.button>
              </AnimatePresence>

              {/* List separator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p>TOP RECOMMENDATION</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>
              {/* Image switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {HeroData.map((data) => {
                  return (
                    <div
                      key={data.id}
                      onClick={() => handleActiveData(data)}>
                      <div className="cursor-pointer space-y-3 hover:scale-105 transition-all">
                        <div className=" flex justify-center">
                          <img
                            src={data.image}
                            alt=""
                            className={`w-[80px] drop-shadow-img ${activeData.image === data.image
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
              </motion.div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className=" w-[150px] md:w-[200px] xl:w-[350px] drop-shadow-img relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.0, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-pop font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 ">
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Whatsapp icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
