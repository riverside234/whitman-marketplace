"use server";
import LoginOrsignup from "./LoginOrsignup";
import { login, signup } from "./actions";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import classes from "../lib/form.module.css";
import { createClient } from "@/utils/supabase/server";

export default async function LoginPage() {
  const supabase = createClient();

  await supabase.auth.signOut();

  return (
    <div className="pt-20 flex flex-col items-center justify-center min-h-screen w-full">
      <div className=" mx-auto max-w-5xl">
        <h1 className=" text-4xl text-center font-bold py-2 ">
          Want to <span className="text-purple-600"> sell your items</span>{" "}
          after the semester ends?
        </h1>
        <h1 className="text-4xl text-center font-bold py-2 flex items-center justify-center ">
          <span className="text-blue-700 mr-2">Start Here</span>{" "}
          <ArrowDown size="40" color="Pink" weight="duotone" />
        </h1>
      </div>
      <div className="flex flex-col max-w-xl relative  ">
        <main className={classes.main}>
          <form className={classes.form}>
            <div className={classes.row}>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" required />
            </div>
            <LoginOrsignup />
          </form>
        </main>
      </div>
    </div>
  );
}
