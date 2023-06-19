import React from "react";
type Props = {
  type: string;
  placeholder: string;
  name: string;
};
function Input({ name, placeholder, type }: Props) {
  return (
    <input
      type={type}
      className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-500"
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
