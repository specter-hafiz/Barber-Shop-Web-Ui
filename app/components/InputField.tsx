import React from "react";

interface InputFieldProps {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  name?: string;
  required?: boolean;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  icon,
  placeholder,
  type,
  name,
  required = false,
  id,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="w-full flex items-center bg-white rounded-[5px] py-2 px-4 focus-within:ring-2 focus-within:ring-golden transition-all">
      <div className="flex-shrink-0 text-gray-700">{icon}</div>
      <input
        id={id}
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={placeholder}
        className="w-full text-black placeholder:text-gray-500 outline-none bg-transparent"
      />
    </div>
  );
};

export default InputField;
