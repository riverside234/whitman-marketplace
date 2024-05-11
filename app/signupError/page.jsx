"use client";
import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/react";

export default function LoginError() {
  const router = useRouter();

  return (
    <div className="  flex flex-col items-center justify-center min-h-screen w-full">
      <div className=" mx-auto max-w-5xl">
        <h1 className=" text-4xl text-center font-bold py-2 ">
          <span className="text-purple-600">Sign Up Failed!</span>
        </h1>
        <h1 className=" text-4xl text-center font-bold py-2 ">
          Enter a valid Email or Password (at least 6 characters)
        </h1>
      </div>
      <Button
        variant="ghost"
        radius="full"
        onClick={() => {
          router.push("/");
        }}
        color="primary"
        size="lg"
        style={{ marginTop: "2rem" }}
      >
        Return
      </Button>
    </div>
  );
}
