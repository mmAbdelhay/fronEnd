import React, { useState } from "react";
import Input from "../../globalComponents/Input";
import Button from "../../globalComponents/Button";
import { loginAxios } from "../../../services/axoisRequests";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const [index, res] = await loginAxios({
      email: email,
      password: password,
    });
    if (index) {
      toast.success(JSON.stringify(res.message), {
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
      });
      sessionStorage.setItem("token", res.token);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      toast.error(JSON.stringify(res.data), {
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div>
      <h2 className="text-center">Login</h2>
      <form onSubmit={login}>
        <Input
          label="Email"
          type="email"
          onInputChange={(value) => setEmail(value)}
        />
        <Input
          label="Password"
          type="password"
          onInputChange={(value) => setPassword(value)}
        />
        <Button text="Login" />
      </form>
      <ToastContainer />
    </div>
  );
}
