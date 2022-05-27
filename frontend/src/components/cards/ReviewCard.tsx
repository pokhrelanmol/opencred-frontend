import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Avatar from "../../assets/avatar.png";
import { formatdate, joinClasses } from "../../helpers";
interface ReviewCardProps {
    avatar: string;
    studentName: string;
    course: string;
    completedOn: string;
    reviewDate: string;
    starCount: number;
    reviewTitle: string;
    reviewCount: number;
    description: string;
}
const ReviewCard = ({
    avatar,
    starCount,
    completedOn,
    course,
    studentName,
    reviewDate,
    reviewTitle,
    reviewCount,
    description,
}: ReviewCardProps) => {
    return (
        <div
            className={joinClasses(
                "max-w-max",
                "p-3",
                "space-y-2",
                "shadow-penumbra",
                "font-openSans",
                "rounded-lg",
                "cursor-pointer"
            )}
        >
            {" "}
            <div className="flex items-center space-x-1 ">
                <img
                    src={avatar}
                    alt="avatar"
                    className="rounded-full w-10 h-10"
                />
                <span>{studentName}</span>
            </div>
            <div
                className={joinClasses(
                    "flex",
                    "justify-between",
                    "max-w-max",
                    "space-x-8 "
                )}
            >
                {" "}
                <div className="before:content-['Course:'] w-52">
                    <span className="pl-2 text-gray ">{course}</span>
                </div>
                <div className="before:content-['Reviewed-on:']">
                    <span className="pl-2 text-gray">
                        {formatdate(reviewDate)}
                    </span>
                </div>
            </div>
            <div className="before:content-['Completed-on:'] ">
                <span className="pl-2 text-gray">
                    {formatdate(completedOn)}
                </span>
            </div>
            <div className=" before:content-['Review:'] flex">
                <p
                    className={joinClasses(
                        "flex",
                        "space-x-2",
                        "text-xs",
                        "items-center",
                        "pl-2",
                        "text-gray"
                    )}
                >
                    {" "}
                    <span>5/{starCount}</span>
                    <span className="flex">
                        {new Array(starCount).fill(1).map((elem, indx) => (
                            <StarIcon
                                key={indx}
                                className="w-5 h-5 text-star"
                            />
                        ))}
                    </span>
                    <span className="">{reviewCount}</span>
                </p>
            </div>
            <h1 className="text-red font-medium text-center">
                "{reviewTitle}"
            </h1>
            <p
                className={joinClasses(
                    "w-72",
                    "mx-auto",
                    "md:w-96",
                    "text-gray",
                    "text-xs",
                    "md:text-sm"
                )}
            >
                {" "}
                {description}
            </p>
        </div>
    );
};

export default ReviewCard;
