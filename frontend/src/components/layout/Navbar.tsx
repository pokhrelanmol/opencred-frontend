import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import Button from "../Button";
import Logo from "../../assets/newlogo.png";
import { useWallet } from "../../context/WalletContext";
import { getSignerAddress } from "../../provider";
import CircularLoader from "../CircularLoader";
import { useTransactionState } from "../../context/TransactionStateContext";
import { getTruncatedAddress, joinClasses } from "../../helpers";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const { walletAddress, setWalletAddress } = useWallet();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { pending } = useTransactionState();
    const navigate = useNavigate();
    const connectWallet = async () => {
        const ethereum = (window as any).ethereum;
        if (ethereum) {
            await ethereum.request({ method: "eth_requestAccounts" });
        }
        const signerAddress = await getSignerAddress();
        if (signerAddress) {
            setWalletAddress(signerAddress);
            //  TODO: set success message
        }
        // console.log(walletAddress);
    };
    let Links = [
        { name: "All Bootcamps", link: "/all-bootcamps" },
        { name: "Create Course", link: "/create-course" },
        { name: "Graduate Students", link: "/graduate-student" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className=" w-full shadow-sm">
            <div
                className={joinClasses(
                    "md:flex",
                    "items-center",
                    "justify-between",
                    "bg-white",
                    "py-4",
                    "md:px-10",
                    "px-7"
                )}
            >
                <div
                    onClick={() => navigate("/")}
                    className={joinClasses(
                        "text-dark",
                        "font-bold",
                        "text-2xl",
                        "h-10",
                        "w-28",
                        "cursor-pointer",
                        "flex",
                        "items-center"
                    )}
                >
                    <img className="mr-1 pt-2  " src={Logo} alt="logo" />
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className={joinClasses(
                        "flex",
                        "absolute",
                        "right-8",
                        "top-6",
                        "cursor-pointer",
                        "md:hidden"
                    )}
                >
                    {pending ? (
                        <Button onClick={() => {}} buttonType="blue-outline">
                            <CircularLoader />
                        </Button>
                    ) : walletAddress ? (
                        <Button
                            onClick={() => {}}
                            buttonType="blue-outline"
                            disable={true}
                        >
                            {getTruncatedAddress(walletAddress)}
                        </Button>
                    ) : (
                        <Button onClick={connectWallet} buttonType="red-filled">
                            CONNECT
                        </Button>
                    )}

                    {open ? (
                        <XIcon className="w-10 h-10 ml-10" />
                    ) : (
                        <MenuAlt2Icon className="h-10 w-10 ml-10" />
                    )}
                </div>

                <ul
                    className={joinClasses(
                        "flex",
                        "flex-col",
                        "md:flex-row",
                        "md:items-center ",
                        "md:justify-end ",
                        "md:pb-0",
                        "pb-12",
                        "absolute",
                        "md:static ",
                        "left-0",
                        "w-full",
                        "md:w-auto",
                        "md:pl-0",
                        "pl-9",
                        "grow",
                        "transition-all",
                        "duration-500",
                        "ease-in",
                        `${open ? "top-20 bg-blue  " : "top-[-490px]"}`
                    )}
                >
                    {Links.map((link) => (
                        <Link
                            to={link.link}
                            key={link.name}
                            className={joinClasses(
                                "md:ml-8",
                                "font-openSans ",
                                "md:my-0",
                                "my-3 ",
                                "text-white",
                                "md:text-dark",
                                "hover:text-gray",
                                "duration-500"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="hidden md:block md:ml-8">
                        {pending ? (
                            <Button
                                onClick={() => {}}
                                buttonType="blue-outline"
                            >
                                <CircularLoader />
                            </Button>
                        ) : walletAddress ? (
                            <Button
                                onClick={() => {}}
                                buttonType="blue-outline"
                            >
                                {getTruncatedAddress(walletAddress)}
                            </Button>
                        ) : (
                            <Button
                                onClick={connectWallet}
                                buttonType="red-filled"
                            >
                                CONNECT
                            </Button>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
