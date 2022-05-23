import React from "react";
interface IInputProps<T> {
    register: T;
    errors: T;
    name: string;
    placeholder: string;
}
const Input = ({ register, errors, name, placeholder }: IInputProps<any>) => {
    return (
        <div className="flex flex-col">
            <label htmlFor=""> Full Name</label>
            <input
                {...register(name)}
                type="text"
                className="inputField"
                placeholder={placeholder}
            />
            <p className="text-red">{errors.name?.message}</p>
        </div>
    );
};

export default Input;
