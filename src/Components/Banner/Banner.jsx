import React from 'react'
import BannerImg from "../../assets/Banner/juice.png";
import Splash from "../../assets/Banner/splash.png";
import { motion } from "framer-motion";
import { fadeUp } from '../Products';

const Banner = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
                {/* Banner image section */}
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                        src={BannerImg}
                        alt=""
                        className="w-[300px] md:w-[400px] mx-auto relative z-10"
                    />
                    <motion.img
                        initial={{ opacity: 0, x: -100, rotate: -180, scale: 0 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                        src={Splash}
                        alt=""
                        className="absolute bottom-0 z-0"
                    />
                </div>
                {/* Banner text info section */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                        <motion.h1
                            variants={fadeUp(0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            className="text-3xl lg:text-4xl font font-semibold">Refresh Your World with Coca cola</motion.h1>

                        <motion.p
                            variants={fadeUp(0.9)}
                            initial="hidden"
                            whileInView={"show"}
                            className="text-gray-500">
                            Coca-Cola, often referred to as Coke, is a sweet, carbonated beverage made primarily from carbonated water, high fructose corn syrup (or sugar in some regions), caramel color, caffeine, natural flavorings, and phosphoric acid. It has a distinctive taste that combines citrus and spice notes, making it both refreshing and addictive to many.
                        </motion.p>
                        <motion.button
                            variants={fadeUp(1.1)}
                            initial="hidden"
                            whileInView={"show"}
                            className="!mt-5 border-2 border-paimary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
                            Shop Now
                        </motion.button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Banner