import { div } from 'framer-motion/client';
import React from 'react'

const faqData = [
    {
        question: "What is Coca Cola?",
        answer:
            "Coca Cola is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
    },
    {
        question: "What flavors does Coca Cola offer?",
        answer:
            "Coca Cola offers a variety of flavors including orange, grape, pineapple, and more!",
    },
    {
        question: "Is Coca Cola gluten-free?",
        answer:
            "Yes, Coca Cola is gluten-free, making it suitable for those with gluten intolerance.",
    },
    {
        question: "How many calories are in a can of Coca Cola?",
        answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
    },
];

const FAQ = () => {
    const [active, setActive] = React.useState(null);

    const handleClick = (index) => {
        setActive(index === active ? null : index);
    };
    return (
        <div className="max-w-2xl mx-auto mt-20 mb-28 py-4">
            <h1 className="text-3xl font-bold text-center pb-8">
                Frequently Asked Questions
            </h1>

            {faqData.map((item, index) => (
                <div
                    key={index}
                    className="mb-4 py-4 border-b border-gray-300">
                    <div
                        onClick={() => handleClick(index)}
                        className="flex justify-between items-center cursor-pointer py-4 mx-3">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {item.question}
                        </h3>
                        <span>{active === index ? "-" : "+"}</span>
                    </div>
                    {active === index && <p className="text-gray-600 mx-3">{item.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ