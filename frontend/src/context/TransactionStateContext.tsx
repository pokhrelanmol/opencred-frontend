import { createContext, useState, useContext } from "react";
import { ProviderProps } from "./WalletContext";
interface TransactionStateType {
    pending: boolean;
    setPending: React.Dispatch<React.SetStateAction<boolean>>;
}
const TransactionStateContext = createContext<TransactionStateType>({
    pending: false,
    setPending: () => {},
} as TransactionStateType);

export const TransactionStateProvider = ({ children }: ProviderProps) => {
    const [pending, setPending] = useState(false);
    return (
        <TransactionStateContext.Provider value={{ pending, setPending }}>
            {children}
        </TransactionStateContext.Provider>
    );
};
export const useTransactionState = () => useContext(TransactionStateContext);
