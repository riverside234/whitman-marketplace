"use client";

import { useEffect, useState } from "react";
import SaveCard from "./saveCard";
import Cookies from "universal-cookie";

export default function SaveGrid() {
  const cookies = new Cookies();

  const [saveItem, setSaveItem] = useState({});

  useEffect(() => {
    const cookieValue = cookies.get("saveCard");

    if (cookieValue === undefined) {
      cookies.set("saveCard", JSON.stringify({}), { path: "/" });
    } else {
      setSaveItem(cookieValue);
    }
  }, []);

  const functionCheckUnselect = (id) => {
    let unselect = { ...saveItem };
    delete unselect[id];
    cookies.set("saveCard", JSON.stringify(unselect), {
      path: "/",
      expires: new Date(Date.now() + 2592000),
    });
    setSaveItem(unselect);
  };

  return (
    <div className="grid grid-cols  gap-4">
      <div className="flex justify-center "></div>
      {Object.entries(saveItem).map(([key, item]) => (
        <div key={item.id} className="flex justify-center">
          <SaveCard item={item} functionCheckUnselect={functionCheckUnselect} />
        </div>
      ))}
    </div>
  );
}
