import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button"; 

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="Insert your fullname"
        htmlFor="fullname"
        />
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Insert your username"
        htmlFor="username"
        />
      <InputForm
        label="Email"
        type="text"
        name="email"
        placeholder="Example@mail.com"
        htmlFor="email"
        />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*********"
        htmlFor="password"
        />
      <Button>Login</Button>
    </form>
  );
};

export default FormRegister;