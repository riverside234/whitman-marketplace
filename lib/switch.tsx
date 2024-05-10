"use client";

import SearchBar from "./searchBar";
import { Switch } from "@nextui-org/react";
import { useState } from "react";
import FormItem from "./form";

export default function SwitchBar() {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div>
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        defaultSelected
        size="lg"
        color="secondary"
        className="mt-2 "
      >
        {isSelected ? "Add your Item" : "Search for Items"}
      </Switch>
      {isSelected ? <SearchBar /> : <FormItem />}
    </div>
  );
}
