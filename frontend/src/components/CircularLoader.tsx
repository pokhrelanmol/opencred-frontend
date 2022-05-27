import React from "react";
import { joinClasses } from "../helpers";

const CircularLoader = () => {
    return (
        <div className="flex justify-center items-center  ">
            Loading
            <div
                className={joinClasses(
                    "animate-spin",
                    "rounded-full",
                    "h-8",
                    "w-8",
                    "border-t-4",
                    "border-b-4 ",
                    "border-red"
                )}
            />
        </div>
    );
};

export default CircularLoader;
