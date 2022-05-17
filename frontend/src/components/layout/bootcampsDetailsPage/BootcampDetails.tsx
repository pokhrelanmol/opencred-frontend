import React, { useState } from "react";
import TopIntroCard from "./TopIntroCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BootcampCardProps } from "../../cards/BootcampCard";
import { LocationMarkerIcon, ShieldCheckIcon } from "@heroicons/react/solid";
interface BootcampDetailsType extends BootcampCardProps {
    description: string;
}
const BootcampDetails = () => {
    const [bootcampDetails, setBootcampDetails] =
        useState<BootcampDetailsType>();
    const { id } = useParams();
    console.log(id);
    const fetchBootcamDetails = async () => {
        const response = await axios.get(
            `http://localhost:3001/bootcamp/${id}`
        );
        // set State here
    };
    return (
        <div className="">
            <div className="flex justify-center">
                <TopIntroCard />
            </div>
            <h1 className=" my-10 text-3xl font-poppins text-center font-semibold text-dark ">
                About SpringBoot
            </h1>
            {/* description */}
            <div className="flex flex-col gap-10 justify-center text-xs md:text-sm ">
                <div className="flex justify-between flex-wrap gap-5">
                    <span className="before:content-['Mode:'] flex after:content-['Online'] ">
                        <LocationMarkerIcon className="w-5 h-5 text-red" />
                    </span>{" "}
                    <p className="flex gap-3 flex-wrap">
                        <span className=" flex ">
                            <ShieldCheckIcon className="w-5 h-5 text-red " />
                            <span>Flexible Classes</span>
                        </span>
                        <span className="flex">
                            <ShieldCheckIcon className="w-5 h-5 text-red " />

                            <span>Available Online</span>
                        </span>
                    </p>
                </div>
                <p className="text-center text-xs md:text-sm text-gray tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                    vitae hic dolorum libero consequatur at corporis voluptatem
                    odit quod voluptates, saepe natus aperiam nemo, tenetur
                    iure, eos recusandae cupiditate unde facere repudiandae nam
                    nisi aspernatur! Quas, assumenda? Quisquam in eaque dolores
                    enim nesciunt. Pariatur veritatis expedita dignissimos
                    blanditiis, consectetur assumenda enim fugiat maiores amet
                    porro laudantium totam deleniti eos accusantium aspernatur
                    animi. Corrupti quia quam, eveniet soluta optio nulla
                    doloribus perferendis molestias odit obcaecati minima
                    voluptatem harum distinctio accusamus voluptatum, tenetur
                    labore vel temporibus alias omnis ea hic sed. Laboriosam
                    quae nisi commodi sed beatae voluptas, libero quis. Atque,
                    ullam.
                </p>
            </div>
        </div>
    );
};

export default BootcampDetails;
