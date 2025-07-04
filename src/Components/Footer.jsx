import React from 'react'
import Logo from "../assets/Logo.png"
import CardsImg from "../assets/credit-cards.webp";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import { motion } from "framer-motion";


const Footer = () => {
    return (
        <footer className="bg-primary pt-12 pb-8 text-white">
            <div className=" container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Company details section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration0: 0.6,
                        }}
                        className="space-y-6">
                        <img src={Logo} alt="" className="max-w-[115px] invert" />
                        <div>
                            <p className="flex items-center gap-2">
                                <FaPhone />
                                +1 (123) 456-7890
                            </p>
                            <p className="flex items-center gap-2 mt-2">
                                {" "}
                                <FaMapLocation /> Kolkata, West Bengal
                            </p>
                        </div>
                    </motion.div>
                    {/* Footer link section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration0: 0.6,
                        }}
                        className="space-y-6">
                        <h1 className="text-3xl font-bold">Quick Links</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <ul className="space-y-2">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contect Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contect Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* Social link section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration0: 0.6,
                        }}
                        className="space-y-6">
                        <h1 className="text-3xl font-bold">KEEP IN TOUCH</h1>
                        <div className="flex items-center gap-3">
                            <FaFacebook className="text-3xl cursor-pointer hover:scale-105 duration-300" />
                            <FaTwitter className="text-3xl cursor-pointer hover:scale-105 duration-300" />
                            <FaYoutube className="text-3xl cursor-pointer hover:scale-105 duration-300" />
                            <FaInstagram className="text-3xl cursor-pointer hover:scale-105 duration-300" />
                        </div>
                        <div className="space-y-2">
                            <p>Payment Methods</p>
                            <img src={CardsImg} alt="" />
                        </div>
                    </motion.div>
                </div>
                {/* Copyright section */}
                <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
                    Copyright &copy; 2025. All Rights Reserved - Debabrata
                </p>
            </div>
        </footer>
    )
}

export default Footer