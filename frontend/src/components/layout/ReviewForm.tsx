import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../../helpers/index";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// TODO:make input component
interface IFormInputs {
    fullName: string;
    email: string;
    school: string;
    course: string;
    yearOfGraduation: string;
    reviewTitle: string;
    reviewDescription: string;
    star: number;
}
const schema = yup
    .object()
    .shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        course: yup.string().required(),
        yearOfGraduation: yup.string().required(),
        reviewTitle: yup.string().required(),
        reviewDescription: yup.string().required(),
        star: yup.number().required(),
    })
    .required();
const ReviewForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        trigger,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data: IFormInputs) => {
        console.log(data);
        reset();
    };
    const handleStarRating = async (rating: number) => {
        setValue("star", rating, {
            shouldValidate: true,
        });
    };
    return (
        <>
            <div className="bg-light_pink mb-5">
                <h1
                    className={joinClasses(
                        "text-lg",
                        "text-center",
                        "p-5",
                        "font-poppins",
                        "text-white",
                        "bg-dark",
                        "mt-3"
                    )}
                >
                    {" "}
                    <span className="text-xl text-red font-bold  ">
                        Your review matters!
                    </span>{" "}
                    Honest feedback on bootcamps will help us build new money
                    legos that will redefine how skill markets work now.
                </h1>
                <form
                    className="p-10 mt-10 md:text-sm text-xs"
                    onSubmit={handleSubmit(onSubmitHandler)}
                >
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 flex-wrap ">
                        <div className="flex flex-col">
                            <label htmlFor=""> Full Name</label>
                            <input
                                {...register("fullName")}
                                type="text"
                                className="inputField"
                                placeholder="Enter full name"
                            />
                            <p className="text-red">
                                {errors.fullName?.message}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="j"> Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                className="inputField"
                                placeholder="Enter email address"
                            />

                            <p className="text-red">{errors.email?.message}</p>
                        </div>
                    </div>
                    {/* school,location and course input */}
                    <div className="flex justify-between gap-3 md:flex-row flex-col  mt-5">
                        <div className="flex flex-col w-full">
                            <label htmlFor="">Course</label>
                            <select
                                className="dropdown"
                                {...(register("course"), { required: true })}
                                onChange={(e) =>
                                    setValue("course", e.target.value, {
                                        shouldValidate: true,
                                    })
                                } // Using setValue
                                id=""
                                placeholder="Course you did"
                            >
                                <option
                                    value={undefined}
                                    disabled
                                    selected={true}
                                >
                                    --select--
                                </option>
                                <option value="something">something</option>
                                <option value="something">something</option>
                                <option value="something">something</option>
                                <option value="something">something</option>
                            </select>

                            <p className="text-red">
                                {errors.course && errors.course.message}
                            </p>
                        </div>
                        <div className=" flex flex-col w-full ">
                            <label htmlFor="">Year </label>
                            <select
                                className="dropdown"
                                {...(register("yearOfGraduation"),
                                { required: true })}
                                onChange={(e) =>
                                    setValue(
                                        "yearOfGraduation",
                                        e.target.value,
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                                name="finishYear"
                                id=""
                            >
                                <option
                                    value={undefined}
                                    disabled
                                    selected={true}
                                >
                                    {" "}
                                    --select--
                                </option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>

                            <p className="text-red">
                                {errors.yearOfGraduation &&
                                    errors.yearOfGraduation.message}
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 ">
                        <label htmlFor="">Review Title</label>
                        <input
                            {...register("reviewTitle")}
                            name="reviewTitle"
                            className="w-full inputField "
                            type="text"
                            placeholder="In one sentense, describe your experience"
                        />

                        <p className="text-red">
                            {errors.reviewTitle?.message}
                        </p>
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className="block float-left ">
                            Description
                        </label>
                        <br />
                        <textarea
                            {...register("reviewDescription")}
                            rows={10}
                            className="inputField w-full"
                            placeholder="What are the pros and cons of attending this bootcap? Share your story"
                        ></textarea>

                        <p className="text-red">
                            {errors.reviewDescription?.message}
                        </p>
                    </div>

                    <div className="">
                        <h1 className="pb-4">
                            How would you rate your expierence
                        </h1>
                        <div className="">
                            <ReactStars
                                count={5}
                                {...register("star")}
                                name="star"
                                onChange={handleStarRating}
                                size={30}
                                activeColor="#ffd700"
                                emptyIcon={<i className="far fa-star"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                            />
                            <p className="text-red">{errors.star?.message}</p>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <Button
                            buttonType="red-filled"
                            type="submit"
                            // onClick={() => handleSubmit(onSubmitHandler)}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ReviewForm;
