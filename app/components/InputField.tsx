import { User } from "lucide-react";
import React from "react";

const InputField = ({
  icon,
  placeholder,
  type,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
}) => {
  return (
    <div className="w-full flex bg-white rounded-[5px] py-2 px-4">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full text-black placeholder:text-black outline-none bg-transparent"
      />
    </div>
  );
};

export default InputField;
