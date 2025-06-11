import React from 'react'
import Blog1 from "../assets/Blogs/1.jpg";
import Blog2 from "../assets/Blogs/2.jpg";
import Blog3 from "../assets/Blogs/3.jpg";
import Blog4 from "../assets/Blogs/4.jpg";

const BlogsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "#",
        image: Blog1,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "#",
        image: Blog2,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "#",
        image: Blog3,
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "#",
        image: Blog4,
    },
];

const Blogs = () => {
    return (
        <section className="bg-gray-50">
            <div className="container py-14">
                <h1 className="text-3xl font-bold text-center pb-8">
                    Blogs
                </h1>
                {/* Card section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {BlogsData.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-center gap-6 p-2 md:p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300">
                            <img src={item.image} alt="" />
                            <div className="space-y-2">
                                <h1 className="text-xl font-bold line-clamp-2">{item.title}</h1>
                                <p className="line-clamp-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs