import React, { useState } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import UploadImage from "react-file-base64";
interface FormInputs {
    logo: string;
    name: string;
    description: string;
}
const schema = yup.object().shape({
    logo: yup.string().required(),
    name: yup.string().required().min(2),
    description: yup.string().required().min(10).max(100),
});
const CreateBootcamp = () => {
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
                className="flex flex-col gap-3 justify-center shadow-umbra rounded-lg p-5 "
            >
                <Input
                    register={register}
                    errors={errors}
                    name="name"
                    label="Bootcamp Name"
                    placeholder="Name of the Bootcamp"
                    type="text"
                />
                <Input
                    register={register}
                    errors={errors}
                    name="description"
                    label="Bootcamp Description"
                    placeholder="Something about your Bootcamp"
                    type="textarea"
                />
                {/* handle image */}
                <div className="space-y-2">
                    <UploadImage
                        multiple={false}
                        {...register("logo")}
                        onDone={({ base64 }: any) => {
                            setImage(base64);
                            setValue("logo", base64, { shouldValidate: true });
                        }}
                    />
                    {image !== "" ? (
                        <>
                            <img src={image} width={200} height={300} alt="" />
                        </>
                    ) : null}
                    <p className="text-red">{errors.logo?.message}</p>
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

export default CreateBootcamp;
