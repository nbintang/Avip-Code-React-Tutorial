import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setUserName(getUsername(token)) : (window.location.href = "/login");
  });
  return username;
};
