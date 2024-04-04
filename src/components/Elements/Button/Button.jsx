const Button = (props) => {
  const {
    children = "Loading...",
    className = "w-full bg-white",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <>
      <button
        className={`${className} p-1 px-3 border text-xl hover:opacity-90 font-bold text-black rounded `}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
