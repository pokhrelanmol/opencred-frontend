import { ethers, providers } from "ethers";
type Provider = providers.Web3Provider;
export const getProvider = async () => {
    let provider: Provider;
    if (
        typeof window !== "undefined" &&
        typeof (window as any).ethereum !== "undefined"
    ) {
        provider = new ethers.providers.Web3Provider(
            (window as any).ethereum
        ) as Provider;
    } else {
        throw new Error("Web3 Providers not available");
    }
    return provider;
};

export const getSigner = async () => {
    try {
        const provider = await getProvider();
        const signer = provider.getSigner();
        return signer;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const getSignerAddress = async () => {
    try {
        const provider = await getProvider();
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();
        return signerAddress;
    } catch (error) {
        console.log(error);
        return null;
    }
};
