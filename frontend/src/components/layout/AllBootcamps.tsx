import React, { useEffect, useState } from "react";
import Search from "../Search";
import { useSearch } from "../../context/SearchContext";
import { BootcampDummyData } from "../../dummyData";
import BootcampCard from "../cards/BootcampCard";
import { BootcampCardProps } from "../cards/BootcampCard";
import Pagination from "../Pagination";
import { joinClasses } from "../../helpers";
import { usePagination } from "../../context/PaginationContext";
const AllBootcamps = () => {
    const { filteredData, setFilteredData } = useSearch<BootcampCardProps>();
    const [showPerPage, setShowPerPage] = useState(12);
    const { pagination } = usePagination();

    // call api and get the data
    const filterByStar = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filteredData = BootcampDummyData.filter((bootcamp) => {
            return bootcamp.starCount === Number(e.target.value);
        });
        setFilteredData(filteredData);
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <p>Filter by Stars</p>
                    <select
                        name=""
                        id=""
                        className={joinClasses(
                            "border",
                            "border-blue",
                            "px-4",
                            "focus:shadow-lg",
                            "hover:shadow-md",
                            "bg-white"
                        )}
                        onChange={filterByStar}
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
            {filteredData.length > 0 ? (
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

                    <div
                        className={joinClasses(
                            "grid",
                            "grid-flow-row",
                            "grid-rows-1",
                            "justify-center",
                            "sm:grid-cols-2",
                            "md:grid-cols-3",
                            "ld:grid-cols-4",
                            "gap-5 ",
                            "mb-4 "
                        )}
                    >
                        {filteredData
                            ?.slice(pagination.start, pagination.end)
                            .map((bootcamp, index) => (
                                <BootcampCard
                                    bootcampAddress={bootcamp.bootcampAddress}
                                    courses={bootcamp.courses}
                                    logo={bootcamp.logo}
                                    name={bootcamp.name}
                                    key={index}
                                    reviewCount={bootcamp.reviewCount}
                                    starCount={bootcamp.starCount}
                                />
                            ))}
                    </div>
                    <Pagination
                        noOfItems={BootcampDummyData.length}
                        showPerPage={showPerPage}
                    />
                </div>
            ) : (
                <h1 className="text-center text-red text-4xl">
                    Opps! No Bootcamp Found
                </h1>
            )}
        </div>
    );
};

export default AllBootcamps;
