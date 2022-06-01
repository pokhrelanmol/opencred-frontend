import React, { createContext, useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { joinClasses } from "../helpers";
import { ProviderProps } from "../context/WalletContext";
import { useSearch } from "../context/SearchContext";
interface SearchProps<T> {
    dataToFilter: Array<T>;
}

const Search = <T extends {}>({ dataToFilter }: SearchProps<T>) => {
    let filteredDataArray: T[] = [];

    const { filteredData, setFilteredData } = useSearch();
    const [searchTerm, setSearchTerm] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filterSearchedItems = (
        searchTerm: string,
        dataToFilter: Array<any>
    ) => {
        filteredDataArray = dataToFilter.filter((elem) => {
            return elem.name.toLowerCase().includes(searchTerm);
        });
    };

    useEffect(() => {
        searchTerm
            ? filterSearchedItems(searchTerm, dataToFilter)
            : filterSearchedItems("", dataToFilter);
        setFilteredData(filteredDataArray);
    }, [searchTerm]);
    return (
        <div className="flex flex-col ">
            <input
                type="text"
                onChange={onChange}
                value={searchTerm}
                className={joinClasses(
                    "border",
                    "border-blue",
                    "rounded-full",
                    "px-3",
                    "w-52",
                    "text-sm"
                )}
                placeholder="Search"
            />
        </div>
    );
};
export default Search;
