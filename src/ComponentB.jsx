import React, { createContext, useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentC from "./ComponentC";

export default function ComponentB() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <h2>Hello again, {user}</h2>
      <ComponentC />
    </div>
  );
}
