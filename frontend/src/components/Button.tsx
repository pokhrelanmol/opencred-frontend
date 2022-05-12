import React from "react";
type ButtonType = "red-filled" | "red-outline" | "blue-filled" | "blue-outline";
type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    buttonType?: ButtonType;
};
const Button = ({ children, onClick, buttonType }: ButtonProps) => {
    const buttonStyles =
        buttonType === "red-filled"
            ? "bg-red-700 hover:bg-red-800 focus:ring-red-300 text-white"
            : buttonType === "red-outline"
            ? "bg-white text-red-800 border border-red-700 focus:ring-red-100 "
            : buttonType === "blue-filled"
            ? "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 text-white"
            : buttonType === "blue-outline"
            ? "bg-white text-blue-700 border border-blue-700  focus:ring-blue-300"
            : " text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300";

    return (
        <button
            type="button"
            onClick={onClick}
            className={` ${buttonStyles} hover:${buttonStyles} font-sm focus:ring-4 rounded-lg text-sm px-5 py-2 text-center  `}
        >
            {children}
        </button>
    );
};

export default Button;
