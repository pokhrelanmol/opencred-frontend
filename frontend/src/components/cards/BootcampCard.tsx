import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../Button";
import bootcampLogo from "../../assets/Logo.png";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
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
            className="gradient max-w-min flex flex-col py-4 px-8 cursor-pointer hover:scale-105 transition text-white justify-center items-center space-y-3 rounded-md"
        >
            <img
                src={logo}
                height={100}
                width={100}
                className="rounded-full"
                alt="bootcamp-logo"
            />
            <h1 className="font-medium text-lg">{name}</h1>
            <p className="flex space-x-2 text-xs items-center ">
                <span>5/{starCount}</span>
                <span className="flex">
                    {new Array(starCount).fill(1).map(() => (
                        <StarIcon className="w-5 h-5 text-star" />
                    ))}
                </span>
                <span className="">{reviewCount}</span>
            </p>
            <p className="max-w-xs text-xs">{courses}</p>
            <Button buttonType="red-outline" onClick={() => {}}>
                KNOW MORE
            </Button>
        </div>
    );
};

export default BootcampCard;
