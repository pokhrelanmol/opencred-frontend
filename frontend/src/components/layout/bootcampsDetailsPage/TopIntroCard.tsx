import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ChatAltIcon,
    LocationMarkerIcon,
    StarIcon,
} from "@heroicons/react/solid";
import companyLogo from "../../../assets/flyer.png";
import Button from "../../Button";
const TopIntroCard = () => {
    const numberOfStarts = 5;
    const reviewCount = 102;
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap justify-center sm:justify-between w-[500px] border rounded-lg p-5 shadow-penumbra ">
            {/* company logo*/}
            <img
                src={companyLogo}
                className="object-fit h-32 w-32 md:h-48 md:w-48"
                alt="logo"
            />
            {/* right side */}
            <div className="space-y-4 flex flex-col">
                <h1 className=" font-bold text-lg md:text-2xl  ">SpringBoot</h1>
                <p className=" flex items-center space-x-2 flex-wrap">
                    <span className="text-xs">5/{numberOfStarts}</span>
                    <span className="flex">
                        {new Array(numberOfStarts).fill(1).map(() => (
                            <StarIcon className="w-5 h-5 text-star" />
                        ))}
                    </span>
                    <span className="flex  items-center ">
                        <ChatAltIcon className="text-red h-5 w-5" />
                        <span className="text-xs">{reviewCount} Reviews</span>
                    </span>
                </p>
                <div>
                    <span className="flex">
                        <LocationMarkerIcon className="w-5 h-5 text-red" />

                        <span>Online</span>
                    </span>{" "}
                </div>
                <div className=" self-end">
                    <Button
                        buttonType="red-outline"
                        onClick={() =>
                            navigate(`${window.location.pathname}/review`)
                        }
                    >
                        WRITE REVIEW
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TopIntroCard;
