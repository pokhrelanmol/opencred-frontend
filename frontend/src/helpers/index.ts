import { ethers } from "ethers";

export const getTruncatedAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(address.length - 2)}`;
};
export const formatdate = (date: string) => {
    return date.split("/").reverse().join("/");
};
export const joinClasses = (...classes: string[]) => {
    return classes.join(" ");
};
export const validateAddress = (address: string) => {
    return ethers.utils.isAddress(address);
};
