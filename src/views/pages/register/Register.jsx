import React, { useState } from "react";
import Input from "../../globalComponents/Input";
import Button from "../../globalComponents/Button";
import { registerAxios } from "../../../services/axoisRequests";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const [index, res] = await registerAxios({
      name: name,
      email: email,
      password: password,
    });
    if (index) {
      toast.success(JSON.stringify(res.message), {
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setTimeout(() => {
        history.push("/login");
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
      <h2 className="text-center">Register</h2>
      <form onSubmit={register}>
        <Input
          label="Name"
          type="text"
          onInputChange={(value) => setName(value)}
        />
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
        <Button text="Register" />
      </form>
      <ToastContainer />
    </div>
  );
}
