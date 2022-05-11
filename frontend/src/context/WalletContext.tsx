import { JsonRpcProvider } from "@ethersproject/providers";
import { getProvider, getSignerAddress } from "../provider";
import { createContext, useState, useEffect, useContext } from "react";
interface WalletProps {
    walletAddress: string;
    setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
}
export type ProviderProps = {
    children: React.ReactNode;
};
const WalletContext = createContext({} as WalletProps);
export const WalletProvider = ({ children }: ProviderProps) => {
    const [walletAddress, setWalletAddress] = useState<string>("");
    const [provider, setProvider] = useState<JsonRpcProvider>();
    useEffect(() => {
        async function init() {
            const _provider = await getProvider();
            const signerAddress = await getSignerAddress();
            setWalletAddress(signerAddress as unknown as string);
            setProvider(_provider);
        }
        init();
    }, [walletAddress]);
    if (provider) {
        (window as any).ethereum.on(
            "accountsChanged",
            function (accounts: any) {
                setWalletAddress(accounts[0].address);
            }
        );
    }
    return (
        <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
            {children}
        </WalletContext.Provider>
    );
};
export const useWallet = () => useContext(WalletContext);
