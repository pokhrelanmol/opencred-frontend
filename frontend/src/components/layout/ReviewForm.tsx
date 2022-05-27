import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../../helpers/index";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Input";
import Logo from "../../assets/newlogo.png";
// TODO:make input component
interface IFormInputs {
    fullName: string;
    firstName: string;
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
                <div className="flex flex-col justify-center items-center mt-10 ">
                    <p className="text-2xl text-dark font-bold">SpringBoot</p>
                    <img src={Logo} width={200} height={200} alt="Logo" />
                </div>
                <form
                    className="p-5 md:text-sm text-xs space-y-5"
                    onSubmit={handleSubmit(onSubmitHandler)}
                >
                    {/* full name and email */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 flex-wrap ">
                        <Input
                            errors={errors}
                            register={register}
                            label="Full Name"
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                        />
                        <Input
                            errors={errors}
                            register={register}
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    {/* Course and Year*/}
                    <div
                        className={joinClasses(
                            "flex",
                            "justify-between",
                            "md:flex-row",
                            "flex-col",
                            "gap-5"
                        )}
                    >
                        {" "}
                        <div className="w-full">
                            <Input
                                name="course"
                                type="select"
                                selectOptions={[
                                    "Web Development",
                                    "Blockchain",
                                    "Web 3",
                                ]}
                                label="Course"
                                errors={errors}
                                register={register}
                                onChange={(
                                    e: React.ChangeEvent<
                                        HTMLInputElement | HTMLSelectElement
                                    >
                                ) =>
                                    setValue("course", e.target.value, {
                                        shouldValidate: true,
                                    })
                                } // Using setValue
                                placeholder="Course you did"
                            />
                        </div>
                        <div className="w-full">
                            <Input
                                name="yearOfGraduation"
                                type="select"
                                selectOptions={[2019, 2020, 2021, 2022]}
                                label="Year Of Graduation"
                                errors={errors}
                                register={register}
                                onChange={(
                                    e: React.ChangeEvent<
                                        HTMLInputElement | HTMLSelectElement
                                    >
                                ) =>
                                    setValue(
                                        "yearOfGraduation",
                                        e.target.value,
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                } // Using setValue
                                placeholder="Year Of Graduation"
                            />
                        </div>
                    </div>
                    {/* review title and description */}
                    <div className="space-y-5">
                        <Input
                            name="reviewTitle"
                            type="text"
                            label="Review Title"
                            errors={errors}
                            register={register}
                            placeholder="In one sentense, describe your experience"
                        />
                        <Input
                            name="reviewDescription"
                            errors={errors}
                            register={register}
                            label="Description"
                            placeholder="What are the pros and cons of attending this bootcap? Share your story"
                            type="textarea"
                        />
                    </div>
                    {/* star section */}
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
