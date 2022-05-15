import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../Button";
import bootcampLogo from "../../assets/Logo.png";
const BootcampCard = () => {
    const numberOfStarts = 5;
    const reviewCount = 102;
    return (
        <div className="gradient max-w-min flex flex-col py-4 px-8  text-white justify-center items-center space-y-3 rounded-md">
            <img
                src={bootcampLogo}
                height={100}
                width={100}
                className="rounded-full"
                alt="bootcamp-logo"
            />
            <h1 className="font-medium text-lg">SpringBoot</h1>
            <p className="flex space-x-2 text-xs items-center ">
                <span>5/{numberOfStarts}</span>
                <span className="flex">
                    {new Array(numberOfStarts).fill(1).map(() => (
                        <StarIcon className="w-5 h-5 text-star" />
                    ))}
                </span>
                <span className="">{reviewCount}</span>
            </p>
            <p className="max-w-xs text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                accusamus.
            </p>
            <Button buttonType="red-outline" onClick={() => {}}>
                KNOW MORE
            </Button>
        </div>
    );
};

export default BootcampCard;
