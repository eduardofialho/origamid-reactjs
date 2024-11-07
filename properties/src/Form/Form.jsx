import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const arr = ["Item 1", "Item 2"];

  return (
    <form action="">
      <p>
        <Input id="email" label="Email" required />
      </p>
      <p>
        <Input id="email" type="password" label="Password" />
      </p>
      <Button items={arr} />
    </form>
  );
};

export default Form;
