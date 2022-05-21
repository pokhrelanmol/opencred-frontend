import React from "react";
import { coursesDummyData } from "../../dummyData";
import { StarIcon } from "@heroicons/react/solid";
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
            <div className="flex shadow-md flex-col rounded hover:scale-105 cursor-pointer transition-all  ">
                <img src={image} className=" rounded-t-lg" />
                <div className="space-y-2 bg-light_pink p-5">
                    <div className="flex justify-between">
                        <span className=" text-md font-medium">{name}</span>
                        <span className="text-gray">{price}$</span>
                    </div>
                    <p className="flex space-x-2 text-xs items-center ">
                        <span>5/{starCount}</span>
                        <span className="flex">
                            {new Array(starCount).fill(1).map(() => (
                                <StarIcon className="w-5 h-5 text-star" />
                            ))}
                        </span>
                        <span className="">{reviewCount}</span>
                    </p>
                    <p className="text-left text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
