import React from "react";
type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
};
const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button className="px-6 py-1  text-sm bg-red-600 text-white rounded-full hover:bg-red-400">
            {children}
        </button>
    );
};

export default Button;
