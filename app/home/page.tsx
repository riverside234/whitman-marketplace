import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  return (
    <div className="pt-20 flex flex-col items-center justify-center min-h-screen w-full">
      <div className=" mx-auto max-w-5xl">
        <h1 className=" text-4xl text-center font-bold py-2 ">
          Want to <span className="text-purple-600"> sell your items</span> or
          <span className="text-purple-600"> handle rent </span> after the
          semester ends?
        </h1>
        <h1 className="text-4xl text-center font-bold py-2 flex items-center justify-center ">
          <span className="text-blue-700 mr-2">Start Here</span>{" "}
          <ArrowDown size="40" color="Pink" weight="duotone" />
        </h1>
      </div>
      <div className="  flex flex-col mx-auto  max-w-3xl relative  w-full">
        <Switch defaultSelected size="lg" color="secondary" className="mt-2 ">
          Search for Items
        </Switch>

        <Textarea
          placeholder="Enter your description "
          className=" py-5 max-w-3xl "
          style={{ paddingRight: "7rem" }}
          minRows={2}
          maxRows={5}
        />

        <Button radius="full" className="absolute right-8 bottom-7"></Button>
      </div>
    </div>
  );
}
