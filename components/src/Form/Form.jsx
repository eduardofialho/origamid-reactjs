import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <form action="">
      <p>
        <label htmlFor="name">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
