import { useState, useRef } from "react";
import BootcampCard from "../../cards/BootcampCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { BootcampDummyData } from "../../../dummyData";
import { joinClasses } from "../../../helpers";
const FeaturedBootcamps = () => {
    return (
        <div className="my-10">
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
                Featured Courses and Bootcamps
            </h1>

            <Swiper
                breakpoints={{
                    // when window width is <= 300px
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is <= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    // when window width is <= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                spaceBetween={10}
                slidesPerView={3}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {BootcampDummyData.map(
                    (
                        {
                            logo,
                            name,
                            courses,
                            starCount,
                            reviewCount,
                            bootcampAddress,
                        },
                        index
                    ) => (
                        <SwiperSlide key={index}>
                            <BootcampCard
                                logo={logo}
                                name={name}
                                starCount={starCount}
                                courses={courses}
                                reviewCount={reviewCount}
                                bootcampAddress={bootcampAddress}
                            />
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default FeaturedBootcamps;
