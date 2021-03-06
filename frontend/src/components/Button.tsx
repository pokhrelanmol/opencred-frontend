import React from "react";
import { joinClasses } from "../helpers";
type ButtonType = "red-filled" | "red-outline" | "blue-filled" | "blue-outline";
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    buttonType?: ButtonType;
    disable?: boolean;
    type?: "button" | "submit";
};
const Button = ({
    children,
    onClick,
    buttonType,
    disable,
    type,
}: ButtonProps) => {
    const buttonStyles =
        buttonType === "red-filled"
            ? "bg-red hover:bg-white hover:text-red border border-red focus:ring-red-50 text-white"
            : buttonType === "red-outline"
            ? "bg-white text-red hover:bg-red border hover:text-white border-red focus:ring-red "
            : buttonType === "blue-filled"
            ? "bg-blue hover:bg-white hover:text-blue border border-blue focus:ring-blue text-white"
            : buttonType === "blue-outline"
            ? `bg-white text-blue ${
                  disable
                      ? "hover:none"
                      : "hover:bg-blue  hover:text-white border"
              } border-blue  focus:ring-blue`
            : " text-white bg-blue hover:bg-white hover:text-blue border border-blue focus:ring-blue";

    return (
        <button
            disabled={disable}
            type={`${type ? type : "button"}`}
            onClick={onClick}
            className={joinClasses(
                `${buttonStyles}`,
                "transition",
                "ease-in-out",
                "delay-150",
                "focus:ring-4",
                "rounded-lg",
                "text-xs",
                "px-5",
                "py-2",
                "text-center",
                "uppercase "
            )}
        >
            {children}
        </button>
    );
};

export default Button;
