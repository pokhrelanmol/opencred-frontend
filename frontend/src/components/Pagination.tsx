import React, { useState, useEffect } from "react";
import Button from "./Button";
interface PaginationProps {
    showPerPage: number;
    onPaginationChange: (start: number, end: number) => void;
    noOfItems: number;
}
const Pagination = ({
    showPerPage,
    onPaginationChange,
    noOfItems,
}: PaginationProps) => {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        const value = showPerPage * counter;
        const startPoint = value - showPerPage;
        const endPoint = value;
        onPaginationChange(startPoint, endPoint);
    }, [counter]);
    return (
        <div className="flex justify-between ">
            <Button
                buttonType="blue-filled"
                onClick={() =>
                    counter > 1 ? setCounter(counter - 1) : setCounter(1)
                }
            >
                Previous
            </Button>
            <Button
                buttonType="blue-filled"
                onClick={() =>
                    showPerPage * counter >= noOfItems
                        ? setCounter(counter)
                        : setCounter(counter + 1)
                }
            >
                next
            </Button>
        </div>
    );
};

export default Pagination;
