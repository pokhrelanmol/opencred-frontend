import React from "react";
import { StarIcon, ChatAltIcon } from "@heroicons/react/solid";
import illustration from "../../../assets/illustration.png";
import Button from "../../Button";
import { joinClasses } from "../../../helpers";
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div
            className={joinClasses(
                "flex",
                "mt-10",
                "justify-center",
                "md:justify-between ",
                "items-center",
                "flex-wrap"
            )}
        >
            {/* left section */}
            <div className="space-y-10">
                <h1
                    className={joinClasses(
                        "font-poppins",
                        "text-dark",
                        "max-w-sm",
                        "md:text-4xl",
                        "text-3xl",
                        "font-bold",
                        "tracking-wide "
                    )}
                >
                    {" "}
                    <span className="text-red">Review</span> Bootcamps, and{" "}
                    <span className="text-red">Certify </span>
                    <span className="text-red">Certify </span>
                    Graduates like never before
                </h1>
                <div className="flex justify-start gap-2 flex-wrap">
                    <Button onClick={() => {}} buttonType="red-filled">
                        Review Bootcamps
                    </Button>
                    <Button
                        onClick={() => navigate("create-bootcamp")}
                        buttonType="blue-filled"
                    >
                        Create Bootcamps
                    </Button>
                </div>
                {/* right illustration */}
            </div>
            <div>
                <img src={illustration} width={400} height={400} alt="" />
            </div>
        </div>
    );
};

export default Hero;
