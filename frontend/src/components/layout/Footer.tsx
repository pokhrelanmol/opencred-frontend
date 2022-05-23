import React from "react";

const Footer = () => {
    const links = [
        { name: "About Us", link: "#" },
        { name: "Email Us", link: "mailto:pokhrelamol90@gmail.com" },
        { name: "FAQ", link: "#" },
        { name: "Our Services", link: "#" },
    ];
    return (
        <div>
            <ul className=" shadow-md bg-light_pink h-20 grid grid-rows-4 md:grid-cols-4 text-center  py-7 ">
                {links.map((elem, indx) => (
                    <li
                        key={indx}
                        className="font-openSans  text-dark text-sm hover:text-gray duration-500"
                    >
                        <a href={elem.link} className="">
                            {elem.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;
