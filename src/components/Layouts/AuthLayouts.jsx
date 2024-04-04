import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = ({ title, children, type }) => {
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
 { console.log(isDarkMode)}
  return (
    <div className={`flex flex-col justify-center bg-black min-h-screen items-center ${isDarkMode && "bg-slate-700"}`}>
    <div className=" w-full max-w-xs ">
      <button className="absolute right-2 top-2 bg-gray-600  p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light": "Dark"}

      </button>
      <h1 className="text-slate-200 mb-2 text-3xl font-bold">{title}</h1>
      <p className="font-medium text-slate-50 mb-6">
        Welcome, Please enter your details
      </p>
      {children}
      <p className="text-slate-300 text-sm mt-4 text-center">
        {type === "login" ?
        "Don't have an account?" : "Already have an account?"}

        {type === "login" && (
          <Link to="/register" className="text-slate-500 font-medium hover:underline"> Register</Link>
        )}
        {type === "register" && (
          <Link to="/login" className="text-slate-500 font-medium hover:underline"> Login</Link>
        )}
      </p>
    </div>
    </div>
  );
};
export default AuthLayout;
