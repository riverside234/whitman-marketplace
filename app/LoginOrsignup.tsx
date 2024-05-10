"use client";
import { login, signup } from "./actions";
import classes from "../lib/page.module.css";
import { Switch } from "@nextui-org/react";
import { useState } from "react";

export default function LoginOrsignup() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div>
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        defaultSelected
        size="lg"
        color="success"
        className="mt-8"
      >
        {isSelected ? "Log in" : "Sign Up"}
      </Switch>
      {isSelected ? (
        <div className={classes.actions}>
          <button formAction={login}>Log in</button>
        </div>
      ) : (
        <div className={classes.actions}>
          <button formAction={signup}>Sign up</button>
        </div>
      )}
    </div>
  );
}
