import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => status? 
    (localStorage.setItem("token", res),
    window.location.href = "/products"
    )
    :
     (
      setLoginFailed(res.response.data),      
      console.log("status: ", res.response.status, res.response.data)))
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleLogin}>
      
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Example@mail.com"
        htmlFor="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*********"
        htmlFor="password"
      />
      <Button
      type="submit"
      >Login</Button>
      {loginFailed && <p className="text-red-500 mt-5 text-center">{loginFailed}!</p>}
    </form>
  );
};

export default FormLogin;
