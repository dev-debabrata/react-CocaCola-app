import React from 'react'
import Logo from "../assets/Logo.png"
import { MdClose, MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from 'react'

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Categories",
        link: "#",
    },
    {
        id: 3,
        title: "Blog",
        link: "#",
    },
    {
        id: 4,
        title: "About",
        link: "#",
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
    },
];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" bg-cola text-white py-3 md:py-8 relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, }}
                className="container flex justify-between items-center">
                {/* Logo section */}
                <div>
                    <img src={Logo} alt='' className="max-w-[115px] invert" />
                </div>
                {/* Destop Menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4 relative z-40">
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className="inline-block text-base font-semibold py-2 px-4 uppercase">{item.title}</a>
                            </li>
                        ))}
                        <button className=" cursor-pointer text-xl ps-14">
                            <FaRegUser />
                        </button>
                    </ul>
                </div>
                {/* Mobile Menu Icon */}
                <div className="md:hidden z-50" onClick={toggleMenu}>
                    {isOpen ? (<MdClose className="text-4xl cursor-pointer mr-3" />) : (<MdMenu className="text-4xl cursor-pointer mr-3" />)}
                </div>
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-cola z-40">
                        <ul className="flex flex-col items-start gap-4 pl-8">
                            {NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link} className="inline-block text-base font-semibold py-2 px-4 uppercase">{item.title}</a>
                                </li>
                            ))}

                        </ul>
                    </div>
                )}
            </motion.div>
        </div>
    )
}

export default Navbar

