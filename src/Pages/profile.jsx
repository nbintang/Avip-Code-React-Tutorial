import { useLogin } from "../hooks/useLogin"

export const ProfilePage = () =>{
  const username = useLogin();
  return <div>
    <h1>Profile Page</h1>
    <p>
      Username : {username}
    </p>
  </div>
}