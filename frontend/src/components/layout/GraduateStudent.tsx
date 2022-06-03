import React, { useState } from "react";

import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { joinClasses } from "../../helpers";
import { validateAddress } from "../../helpers/index";
interface FormInputs {
    course: string;
    students: string[];
}
const schema = yup.object().shape({
    course: yup.string().required(),
    students: yup.array().required(),
});

const GraduateStudent = () => {
    const [studentsToGraduate, setStudentsToGraduate] = useState<string[]>([]);
    const {
        register,
        formState: { errors },
        reset,
        setValue,
        handleSubmit,
    } = useForm<FormInputs>({ resolver: yupResolver(schema) });
    const onSumbit = (data: FormInputs) => {
        const isValid = studentsToGraduate.every((elem) => {
            if (!validateAddress(elem)) return false;
            else return true;
        });
        if (isValid) {
            alert(JSON.stringify(data));
            reset();
        } else {
            alert("invalid address found");
            reset();
        }
        // call graduateStudents() of smartcontract
    };
    const handleTextareaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const value = e.target.value;
        const formattedAddress = value.split("\n").filter((n) => n);
        setStudentsToGraduate(formattedAddress);
        setValue("students", formattedAddress, { shouldValidate: true });
    };
    return (
        <div className="my-5">
            <h1 className="text-2xl text-center">Graduate Student</h1>
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
                    errors={errors}
                    register={register}
                    type="select"
                    label="Course"
                    name="course"
                    selectOptions={["web Dev", "android dev", "web 3 dev"]}
                    placeholder="course"
                    onChange={(
                        e: React.ChangeEvent<
                            HTMLInputElement | HTMLSelectElement
                        >
                    ) =>
                        setValue("course", e.target.value, {
                            shouldValidate: true,
                        })
                    }
                />

                {/* upload csv or add students manually */}
                <div className="">
                    <div>
                        <label htmlFor="">List of the Students</label>
                        <p className="text-xs my-1 text-gray">
                            paste the addresses of the students you want to
                            graduate
                        </p>
                        <textarea
                            name="students"
                            onChange={handleTextareaChange}
                            id=""
                            cols={30}
                            rows={10}
                            className="inputField w-full"
                        ></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <Button type="submit" buttonType="red-filled">
                        graduate
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default GraduateStudent;
