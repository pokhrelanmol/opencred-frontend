import React from "react";
import { coursesDummyData } from "../../dummyData";
import { StarIcon } from "@heroicons/react/solid";
import { GenerateStars } from "../../helpers/GenerateStars";
interface CourseCardProps {
    name: string;
    price: number;
    starCount: number;
    reviewCount: number;
    description: string;
    image: string;
}
const CourseCard = ({
    name,
    price,
    starCount,
    reviewCount,
    description,
    image,
}: CourseCardProps) => {
    return (
        <div className="">
            {" "}
            <div className="flex shadow-md flex-col rounded hover:scale-105 cursor-pointer transition-all font-openSans  ">
                <img src={image} className=" rounded-t-lg" />
                <div className="space-y-2 bg-light_pink p-5">
                    <div className="flex justify-between">
                        <span className=" text-md font-medium">{name}</span>
                        <span className="text-gray">{price}$</span>
                    </div>
                    <p className="flex space-x-2 text-xs items-center ">
                        <span>5/{starCount}</span>
                        <GenerateStars numberOfStar={starCount} />
                        <span className="">{reviewCount}</span>
                    </p>
                    <p className="text-left text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
