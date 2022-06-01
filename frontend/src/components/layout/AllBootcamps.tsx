import React, { useEffect, useState } from "react";
import { GenerateStars } from "../../helpers/GenerateStars";
import Search from "../Search";
import { useSearch } from "../../context/SearchContext";
import { BootcampDummyData } from "../../dummyData";
import BootcampCard from "../cards/BootcampCard";
import { BootcampCardProps } from "../cards/BootcampCard";
import { joinClasses } from "../../helpers";
const AllBootcamps = () => {
    const { filteredData, setFilteredData } = useSearch<BootcampCardProps>();

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <p>filter by starts</p>
                    <select
                        name=""
                        id=""
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <Search dataToFilter={BootcampDummyData} />
            </div>
            {/* cards */}
            <div className="my-5">
                <h1
                    className={joinClasses(
                        "text-3xl",
                        "font-poppins",
                        "text-center",
                        "font-semibold",
                        "text-dark",
                        "my-5"
                    )}
                >
                    All Bootcamps
                </h1>
                <div className="grid grid-cols-4 gap-5 ">
                    {filteredData.map((bootcamp, index) => (
                        <BootcampCard
                            bootcampAddress={bootcamp.bootcampAddress}
                            courses={bootcamp.courses}
                            logo={bootcamp.logo}
                            name={bootcamp.name}
                            reviewCount={bootcamp.reviewCount}
                            starCount={bootcamp.starCount}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBootcamps;
