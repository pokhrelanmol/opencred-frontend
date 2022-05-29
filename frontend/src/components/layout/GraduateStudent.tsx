import React, { useState } from "react";

import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { joinClasses } from "../../helpers";
import CSVReader from "react-csv-reader";

interface FormInputs {
    course: string;
    students: string[];
}
const schema = yup.object().shape({
    course: yup.string().required(),
    students: yup.array().required(),
});

const GraduateStudent = () => {
    // handle student on change
    const [studentToGrauate, setStudentToGraduate] = useState<string>("");
    // handle state on addStudent Click
    const [studentsToGraduate, setStudentsToGraduate] = useState<string[]>([]);

    //   add students to list
    const handleAddStudent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!studentToGrauate) return;
        setStudentsToGraduate([...studentsToGraduate, studentToGrauate]);
        setValue("students", [...studentsToGraduate, studentToGrauate]);
        setStudentToGraduate("");
    };

    const {
        register,
        formState: { errors },
        reset,
        setValue,
        handleSubmit,
    } = useForm<FormInputs>({ resolver: yupResolver(schema) });
    const onSumbit = (data: FormInputs) => {
        // call graduateStudents() of smartcontract
        alert(JSON.stringify(data));
        reset();
        setStudentsToGraduate([]);
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
                    <div className={joinClasses("")}>
                        <div className="">
                            <p> Add Students </p>
                            <div className="flex">
                                <input
                                    type="text"
                                    value={studentToGrauate}
                                    placeholder="student Address"
                                    className="inputField "
                                    onChange={(e) =>
                                        setStudentToGraduate(e.target.value)
                                    }
                                />

                                <button
                                    onClick={handleAddStudent}
                                    className="bg-red text-center ml-3 cursor-pointer text-white w-8 h-8 rounded-full"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <p className={joinClasses("text-2xl text-blue")}>OR </p>

                        <p>Upload csv file </p>
                        <CSVReader
                            onFileLoaded={(data, fileInfo, originalFile) => {
                                console.log(data);
                                setStudentsToGraduate(data);
                            }}
                        />
                    </div>
                    <div
                        className={` ${
                            studentsToGraduate.length > 0 &&
                            "list-decimal inputField "
                        }  `}
                    >
                        {studentsToGraduate?.map((address, indx) => (
                            <p key={indx}>{address}</p>
                        ))}
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
