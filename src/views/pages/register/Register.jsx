import React, { useState } from "react";
import Input from "../../globalComponents/Input";
import Button from "../../globalComponents/Button";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    console.log(email, password, name);
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
    </div>
  );
}
