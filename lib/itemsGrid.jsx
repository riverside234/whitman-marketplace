"use client";

import { useEffect, useState } from "react";
import ItemCard from "./itemCard.jsx";
import SearchBar from "./searchBar.jsx";
import Cookies from "universal-cookie";

export default function ItemsGrid(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(props.items);
  }, [props]);

  const [searchNameValue, setsearchNameValue] = useState("");
  const handleSearchName = (e) => {
    setsearchNameValue(e.target.value);
  };

  useEffect(() => {
    setdata((oldData) =>
      oldData.filter((item) => {
        if (
          searchNameValue === "" ||
          item.item
            .toLowerCase()
            .match(searchNameValue.toLowerCase().trim().replace(/\s/g, ""))
        ) {
          return true;
        }
      })
    );
  }, [searchNameValue]);

  const reset = () => {
    setsearchNameValue("");
    setdata(props.items);
  };

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

  const functionCheckSave = (item) => {
    let saveCurr = { ...saveItem };
    saveCurr[item.id] = item;
    cookies.set("saveCard", JSON.stringify(saveCurr), {
      path: "/",
      expires: new Date(Date.now() + 2592000),
    });
    setSaveItem(saveCurr);
  };

  return (
    <div className="grid grid-cols  gap-4">
      <div className="flex justify-center ">
        <SearchBar
          handleSearchName={handleSearchName}
          reset={reset}
          value={searchNameValue}
        />{" "}
      </div>
      {data.map((item) => (
        <div key={item.id} className="flex justify-center">
          <ItemCard
            item={item}
            user={props.user}
            checkSave={functionCheckSave}
          />
        </div>
      ))}
    </div>
  );
}
