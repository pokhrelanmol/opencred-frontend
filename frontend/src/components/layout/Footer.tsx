import React from "react";
import { joinClasses } from "../../helpers";

const Footer = () => {
    const links = [
        { name: "About Us", link: "#" },
        { name: "Email Us", link: "mailto:pokhrelamol90@gmail.com" },
        { name: "FAQ", link: "#" },
        { name: "Our Services", link: "#" },
    ];
    return (
        <div>
            <ul
                className={joinClasses(
                    "shadow-md",
                    "bg-light_pink",
                    "gap-2",
                    "py-5",
                    "flex",
                    "flex-col",
                    "md:flex-row",
                    "justify-center",
                    "items-center",
                    "md:gap-10"
                    // "py-7"
                )}
            >
                {" "}
                {links.map((elem, indx) => (
                    <li
                        key={indx}
                        className={joinClasses(
                            "font-openSans ",
                            "text-dark",
                            "text-sm",
                            "hover:text-gray",
                            "duration-500"
                        )}
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
