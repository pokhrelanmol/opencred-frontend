import React, { useState } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { joinClasses } from "../../helpers";
import Button from "../Button";
import UploadImage from "react-file-base64";
interface FormInputs {
    image: string;
    name: string;
    bootcampAddress: string;
    description: string;
}
const schema = yup.object().shape({
    image: yup.string().required(),
    bootcampAddress: yup.string().required().min(42).max(42),
    name: yup.string().required().min(2),
    description: yup.string().required().min(10).max(100),
});
const CreateCourse = () => {
    const [image, setImage] = useState("");
    const {
        register,
        formState: { errors },
        reset,
        setValue,
        handleSubmit,
    } = useForm<FormInputs>({ resolver: yupResolver(schema) });
    const onSumbit = (data: FormInputs) => {
        alert(JSON.stringify(data));
    };
    return (
        <div className="my-5">
            <h1 className="text-2xl text-center">Create Bootcamp</h1>
            <form
                onSubmit={handleSubmit(onSumbit)}
                className={joinClasses(
                    "flex",
                    "flex-col",
                    "gap-3",
                    "justify-center",
                    "shadow-umbra",
                    "rounded-lg",
                    "p-5"
                )}
            >
                <Input
                    name="bootcampAddress"
                    register={register}
                    errors={errors}
                    label="Bootcamp Address"
                    placeholder="Bootcamp Address"
                    type="text"
                />
                <Input
                    name="name"
                    register={register}
                    errors={errors}
                    label="Name of Course"
                    placeholder="name of Couse"
                    type="text"
                />
                <Input
                    name="description"
                    register={register}
                    errors={errors}
                    label="Desciption"
                    placeholder="Description of the course"
                    type="textarea"
                />
                {/* handle image */}
                <div className="space-y-2">
                    <UploadImage
                        multiple={false}
                        {...register("image")}
                        onDone={({ base64 }: any) => {
                            setImage(base64);
                            setValue("image", base64, { shouldValidate: true });
                        }}
                    />
                    {image !== "" ? (
                        <>
                            <img src={image} width={200} height={300} alt="" />
                        </>
                    ) : null}
                    <p className="text-red">{errors.image?.message}</p>
                </div>
                <div className="text-center mb-5">
                    <Button buttonType="red-outline" type="submit">
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateCourse;
