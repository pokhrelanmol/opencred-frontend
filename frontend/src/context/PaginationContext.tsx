import React, { createContext, useContext, useState } from "react";
import { ProviderProps } from "./WalletContext";
interface PaginationContextProps {
    pagination: {
        start: number;
        end: number;
    };
    setPagination: React.Dispatch<
        React.SetStateAction<{ start: number; end: number }>
    >;
}
const PaginationContext = createContext({} as PaginationContextProps);

export const PaginationProvider = ({ children }: ProviderProps) => {
    const [pagination, setPagination] = useState({
        start: 0,
        end: 4,
    });
    return (
        <PaginationContext.Provider value={{ pagination, setPagination }}>
            {children}
        </PaginationContext.Provider>
    );
};
export const usePagination = () => useContext(PaginationContext);
