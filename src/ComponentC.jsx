import React, { createContext, useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

export default function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>Hi, {user} </h2>
      <ComponentD />
    </div>
  );
}
