import React from 'react'
import Logo from "../assets/Logo.png"
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

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
    return (
        <div className=" bg-cola text-white py-3 md:py-8">
            <div className="container flex justify-between items-center">
                {/* Logo section */}
                <div>
                    <img src={Logo} alt='' className="max-w-[150px] " />
                </div>
                {/* Menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4 relative z-40">
                        {NavbarMenu.map((item) => (
                            <li>
                                <a href={item.link} className="inline-block text-base font-semibold py-2 px-4 uppercase">{item.title}</a>
                            </li>
                        ))}
                        <button className=" cursor-pointer text-xl ps-14">
                            <FaRegUser />
                        </button>
                    </ul>
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <MdMenu className="text-4xl" />
                </div>
            </div>
        </div>
    )
}

export default Navbar