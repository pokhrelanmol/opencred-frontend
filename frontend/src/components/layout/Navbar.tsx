import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import Button from "../Button";
import Logo from "../../assets/newlogo.png";
import { useWallet } from "../../context/WalletContext";
import { getSignerAddress } from "../../provider";
import CircularLoader from "../CircularLoader";
import { useTransactionState } from "../../context/TransactionStateContext";
import { getTruncatedAddress } from "../../helpers";
const Navbar = () => {
    const { walletAddress, setWalletAddress } = useWallet();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { pending } = useTransactionState();
    const connectWallet = async () => {
        const ethereum = (window as any).ethereum;
        if (ethereum) {
            await ethereum.request({ method: "eth_requestAccounts" });
        }
        const signerAddress = await getSignerAddress();
        if (signerAddress) {
            console.log("fine here");
            setWalletAddress(signerAddress);
            //  TODO: set success message
        }
        // console.log(walletAddress);
    };
    let Links = [
        { name: "Bootcamps", link: "/bootcamps" },
        { name: "Create Bootcamp", link: "/create-bootcamp" },
        { name: "Graduate Students", link: "/graduate-student" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className=" w-full shadow-sm">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div
                    className="font-bold text-2xl h-10 w-28 cursor-pointer flex items-center 
      text-dark"
                >
                    <img className="mr-1 pt-2  " src={Logo} alt="logo" />
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className=" flex absolute right-8 top-6 cursor-pointer md:hidden"
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
                    className={`md:flex md:items-center  md:justify-end  md:pb-0 pb-12 absolute md:static    left-0 w-full md:w-auto md:pl-0 pl-9 grow transition-all duration-500 ease-in ${
                        open ? "top-20 bg-blue-700  " : "top-[-490px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8 font-openSans  md:my-0 my-7"
                        >
                            <a
                                href={link.link}
                                className=" text-white md:text-[#2B303A] hover:text-gray-600 duration-500"
                            >
                                {link.name}
                            </a>
                        </li>
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
