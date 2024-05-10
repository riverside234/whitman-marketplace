"use server";

import FormItem from "@/lib/form.jsx";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function HomePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div className="  flex flex-col items-center justify-center min-h-screen w-full">
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
      <div className="flex flex-col max-w-3xl relative  w-full">
        <FormItem />
      </div>
    </div>
  );
}
