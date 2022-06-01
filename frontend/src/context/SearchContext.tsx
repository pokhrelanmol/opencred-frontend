import React, { createContext, useContext, useState } from "react";
import { ProviderProps } from "./WalletContext";
type EmptyObject = {};
type SearchContextProps<T extends EmptyObject> = {
    filteredData: Array<T>;
    setFilteredData: React.Dispatch<React.SetStateAction<Array<T>>>;
};

const SearchContext = createContext<SearchContextProps<EmptyObject>>(
    {} as SearchContextProps<EmptyObject>
);

export const SearchProvider = <T extends EmptyObject>({
    children,
}: ProviderProps) => {
    const [filteredData, setFilteredData] = useState<Array<EmptyObject>>([]);
    return (
        <SearchContext.Provider value={{ filteredData, setFilteredData }}>
            {children}
        </SearchContext.Provider>
    );
};
export function useSearch<T extends EmptyObject>() {
    const context = useContext<SearchContextProps<T>>(
        SearchContext as unknown as React.Context<SearchContextProps<any>>
    );
    if (!context) {
        throw new Error("useMyContext must be used under MyContextProvider");
    }
    return context;
}
// export const useSearch = () =>

//     useContext<SearchContextProps<EmptyObject>>(
//         SearchContext as unknown as React.Context<
//             SearchContextProps<EmptyObject>
//         >
//     );
