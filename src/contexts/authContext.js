import React, { useContext, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

export const authContext = React.createContext();
export const useAuthContext = () => useContext(authContext);

const API = "http://44.203.113.151/api/v1/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async (user, navigate) => {
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("password_confirm", user.confirmPassword);
    formData.append("name", user.name);
    formData.append("last_name", user.lastName);
    console.log(user);
    try {
      const res = await axios.post(`${API}account/register/`, formData);
      console.log(res);
      navigate("/activate");
    } catch (e) {
      console.log(e);
      setError("Error!");
    }
  };
  async function signIn(email, password, navigate) {
    console.log(email, password);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      let res = await axios.post(`${API}account/login/`, formData);
      navigate("/");
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setUser(email);
    } catch (e) {
      setError("Error!");
    }
  }
  async function activateAcc(email, activation_code, navigate) {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("activation_code", activation_code);
    try {
      let res = await axios.post(`${API}account/activate/`, formData);
      navigate("/signin");
      console.log(res);
    } catch {
      setError("Error!");
    }
  }

  async function forgotPassword(email, navigate) {
    let formData = new FormData();
    formData.append("email", email);
    try {
      let res = await axios.post(`${API}account/forgot_password/`, formData);
      navigate("/newpassword");

      console.log(res);
    } catch {
      setError("Error!");
    }
  }

  async function loginNewPass(email, newPassword, navigate) {
    let formData = new FormData();
    formData.append("detail", newPassword);
    formData.append("email", email);
    try {
      let res = await axios.post(`${API}account/change_password/`, formData);
      navigate("/");
      console.log(res);
    } catch {
      setError("Error!");
    }
  }

  async function checkAuth() {
    setLoading(true);
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const Authorization = `Bearer ${token.access}`;
      let res = await axios.post(
        `${API}account/token/refresh/`,
        { refresh: token.refresh },
        { headers: { Authorization } }
      );
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
      let username = localStorage.getItem("email");
      setUser(username);
      console.log(res);
    } catch (e) {
      logout();
    } finally {
      setLoading(false);
    }
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser("");
  }
  return (
    <authContext.Provider
      value={{
        signUp,
        signIn,
        user,
        error,
        checkAuth,
        logout,
        loading,
        activateAcc,
        forgotPassword,
        loginNewPass,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
