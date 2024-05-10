"use client";

import { useEffect, useState } from "react";
import ItemCard from "./itemCard.jsx";
import SearchBar from "./searchBar.jsx";

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
          <ItemCard item={item} user={props.user} />
        </div>
      ))}
    </div>
  );
}
