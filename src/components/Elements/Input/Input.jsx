import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm rounded w-full bg-black border py-2 px-3 text-slate-400 placeholder:text-slate-400"
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  );
});

export default Input;
