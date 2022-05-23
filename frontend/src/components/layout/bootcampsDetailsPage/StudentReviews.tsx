import React, { useState } from "react";
import Pagination from "../../Pagination";
import { reviewDummyData } from "../../../dummyData";
import ReviewCard from "../../cards/ReviewCard";
import { usePagination } from "../../../context/PaginationContext";
const StudentReviews = () => {
    const [showPerPage, setShowPerPage] = useState(4);
    const { pagination } = usePagination();

    return (
        <div>
            <h1 className=" text-3xl font-poppins text-center font-semibold text-dark my-5">
                Student Reviews
            </h1>
            <div className="grid md:grid-cols-2 transition-transform grid-cols-1 gap-5 mb-5">
                {reviewDummyData
                    .slice(pagination.start, pagination.end)
                    .map(
                        ({
                            avatar,
                            starCount,
                            studentName,
                            completedOn,
                            reviewCount,
                            reviewDate,
                            reviewTitle,
                            description,
                            course,
                        }) => (
                            <>
                                <ReviewCard
                                    avatar={avatar as unknown as string}
                                    starCount={starCount}
                                    studentName={studentName}
                                    completedOn={completedOn}
                                    reviewCount={reviewCount}
                                    reviewDate={reviewDate}
                                    reviewTitle={reviewTitle}
                                    description={description}
                                    course={course}
                                />
                            </>
                        )
                    )}
            </div>
            <Pagination
                showPerPage={showPerPage}
                noOfItems={reviewDummyData.length}
            />
        </div>
    );
};

export default StudentReviews;
