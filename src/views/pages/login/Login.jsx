import React, { useState } from "react";
import Input from "../../globalComponents/Input";
import Button from "../../globalComponents/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
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
    </div>
  );
}
