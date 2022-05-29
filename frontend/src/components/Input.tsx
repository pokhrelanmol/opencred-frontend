import React from "react";
interface IInputProps<T> {
    register: T;
    errors: T;
    name: string;
    type: string;
    placeholder: string;
    label: string;
    selectOptions?: Array<string | number>;
    onChange?: T;
}
const Input = ({
    register,
    errors,
    name,
    type,
    placeholder,
    selectOptions,
    label,
    onChange,
}: IInputProps<any>) => {
    return (
        <div className="flex flex-col">
            <label htmlFor="">{label} </label>
            {type === "textarea" ? (
                <textarea
                    {...register(name)}
                    className="inputField w-full"
                    name={name}
                    cols={30}
                    rows={10}
                    placeholder={placeholder}
                ></textarea>
            ) : type === "select" ? (
                <select
                    className="dropdown w-full "
                    onChange={onChange}
                    name={name}
                    {...(register(name), { required: true })}
                >
                    <option value={undefined} selected={true} disabled>
                        --select--
                    </option>
                    {selectOptions?.map((name, idx) => (
                        <option key={idx} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    {...register(name)}
                    type={type}
                    className="inputField"
                    placeholder={placeholder}
                />
            )}
            <p className="text-red">{errors[name] && errors[name].message} </p>
        </div>
    );
};

export default Input;
