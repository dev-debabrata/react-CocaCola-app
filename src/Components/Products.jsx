import React from "react";
import P1 from "../assets/cocacola1.png";
import P2 from "../assets/cocacola2.png";
import P3 from "../assets/cocacola3.png";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ProductsData = [
  {
    id: 1,
    title: "Coca Zero",
    image: P1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Orange Fanta",
    image: P2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Lemon Fanta",
    image: P3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 1.1,
  },
];

const Products = () => {
  return (
    <div className=" bg-gray-100 py-8">
      <div className=" container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView={"show"}
          className="text-3xl font-bold text-center pb-10"
        >
          Our Products
        </motion.h1>
        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt=""
                className=" w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-meri text-center">
                  {item.title}
                </h1>
                <p className=" text-center text-sm text-gray-600">
                  {item.desc}
                </p>
                <button className="!mt-5 border-2 border-paimary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
