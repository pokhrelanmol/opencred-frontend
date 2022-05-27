import React from "react";
import Flyer from "../../../assets/flyer.png";
import visionImage from "../../../assets/vision.png";
import missionImage from "../../../assets/mission.png";
import valuesImage from "../../../assets/values.png";
import Button from "../../Button";
import { joinClasses } from "../../../helpers";
type ContentsProps = {
    image: string;
    title: string;
    description: string;
};
const Contents = ({ image, title, description }: ContentsProps) => {
    return (
        <div className="flex space-x-3">
            <img
                src={image}
                width={55}
                height={50}
                className="rounded-full"
                alt=""
            />
            <p className="space-y-2">
                <h3 className="font-poppins text-[12px] font-semibold">
                    {title}
                </h3>
                <p
                    className={joinClasses(
                        "font-openSans",
                        "text-xs",
                        "text-gray",
                        "max-w-sm"
                    )}
                >
                    {description}
                </p>
            </p>
        </div>
    );
};
const WhoWeAre = () => {
    return (
        <div
            className={joinClasses(
                "mt-10",
                "space-y-5",
                "flex",
                "justify-between",
                "flex-col",
                "items-center",
                "flex-wrap"
            )}
        >
            <h1
                className={joinClasses(
                    "text-3xl",
                    "font-poppins",
                    "text-center",
                    "font-semibold",
                    "text-dark",
                    "mb-5"
                )}
            >
                Who We Are
            </h1>
            <div
                className={joinClasses(
                    "flex",
                    "items-center",
                    "justify-center",
                    "space-x-10",
                    "flex-wrap",
                    "space-y-10"
                )}
            >
                {/* left contents */}

                <div className="space-y-5">
                    <Contents
                        image={visionImage}
                        title="Our Vision"
                        description="lit. Fugiat, ex autem quaerat voluptatum consequatur ad corrupti necessitatibus fuga at quo."
                    />
                    <Contents
                        image={missionImage}
                        title="Our Mission"
                        description="lit. Fugiat, ex autem quaerat voluptatum consequatur ad corrupti necessitatibus fuga at quo."
                    />
                    <Contents
                        image={valuesImage}
                        title="Our Values"
                        description="lit. Fugiat, ex autem quaerat voluptatum consequatur ad corrupti necessitatibus fuga at quo."
                    />
                </div>

                {/* right image */}
                <div>
                    <img
                        src={Flyer}
                        width={200}
                        height={150}
                        alt="Flyer Image"
                    />
                </div>
            </div>

            <Button onClick={() => {}} buttonType="blue-outline">
                Explore
            </Button>
        </div>
    );
};

export default WhoWeAre;
