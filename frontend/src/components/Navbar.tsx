import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import Button from "./Button";
import Logo from "../assets/Logo.png";
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    let Links = [
        { name: "Bootcamps", link: "/bootcamps" },
        { name: "Create Bootcamp", link: "/create-bootcamp" },
        { name: "Graduate Students", link: "/graduate-student" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-sm w-full">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div
                    className="font-bold text-2xl h-10 w-28 cursor-pointer flex items-center 
      text-[#2B303A]"
                >
                    {/* <ion-icon name="logo-ionic"></ion-icon> */}
                    <img className="mr-1 pt-2 h-20 " src={Logo} alt="logo" />
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className=" flex absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
                    <Button onClick={() => {}} buttonType="red-filled">
                        Connect
                    </Button>
                    {open ? (
                        <XIcon className="w-10 h-10 ml-10" />
                    ) : (
                        <MenuAlt2Icon className="h-10 w-10 ml-10" />
                    )}
                </div>

                <ul
                    className={`md:flex md:items-center md:justify-end  md:pb-0 pb-12 absolute md:static    left-0 w-full md:w-auto md:pl-0 pl-9 grow transition-all duration-500 ease-in ${
                        open ? "top-20 " : "top-[-490px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="md:ml-8  md:my-0 my-7">
                            <a
                                href={link.link}
                                className="text-[#2B303A] hover:text-gray-600 duration-500"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <div className="hidden md:block md:ml-8">
                        <Button buttonType="red-filled" onClick={() => {}}>
                            connect
                        </Button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
