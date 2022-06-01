import React from "react";

import { StarIcon } from "@heroicons/react/solid";
interface IProps {
    numberOfStar: number;
}
export const GenerateStars = ({ numberOfStar }: IProps) => {
    return (
        <p className="flex">
            {new Array(numberOfStar).fill(1).map(() => (
                <StarIcon className="w-5 h-5 text-star " />
            ))}
        </p>
    );
};
