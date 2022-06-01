import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../Button";
import bootcampLogo from "../../assets/Logo.png";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../../helpers";
import { GenerateStars } from "../../helpers/GenerateStars";
export interface BootcampCardProps {
    logo: string;
    name: string;
    starCount: number;
    reviewCount: number;
    courses: string;
    bootcampAddress: string;
}
const BootcampCard = ({
    logo,
    name,
    starCount,
    reviewCount,
    courses,
    bootcampAddress,
}: BootcampCardProps) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`bootcamp/${bootcampAddress}`)}
            className={joinClasses(
                "gradient",
                "max-w-min",
                "flex",
                "flex-col",
                "py-4",
                "px-8",
                "cursor-pointer",
                "hover:scale-105",
                "transition",
                "text-white",
                "justify-center",
                "items-center",
                "space-y-3",
                "rounded-md"
            )}
        >
            <img
                src={logo}
                height={100}
                width={100}
                className="rounded-full"
                alt="bootcamp-logo"
            />
            <h1
                className={joinClasses(
                    "font-medium",
                    "text-lg",
                    "font-openSans"
                )}
            >
                {name}
            </h1>
            <p
                className={joinClasses(
                    "flex",
                    "space-x-2",
                    "text-xs",
                    "items-center",
                    "font-openSans"
                )}
            >
                {" "}
                <span>5/{starCount}</span>
                <GenerateStars numberOfStar={starCount} />
                <span className="">{reviewCount}</span>
            </p>
            <p className="max-w-xs text-xs">{courses}</p>
        </div>
    );
};

export default BootcampCard;
