import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

export default function SearchBar(props) {
  return (
    <div>
      <Input
        placeholder="Search Items"
        className=" py-5   mt-2 mb-2"
        style={{ width: "32rem" }}
        variant="bordered"
        onChange={props.handleSearchName}
        value={props.value}
      />

      <Button
        radius="full"
        variant="ghost"
        color="primary"
        onClick={props.reset}
      >
        Reset Search
      </Button>
    </div>
  );
}
