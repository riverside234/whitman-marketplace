"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function ImagePicker({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const imageInput = useRef<HTMLInputElement>(null);

  function handleClick() {
    imageInput.current?.click();
  }

  const [pickImage, setPickImage] = useState<string | null>(null);
  function hanleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const filereader = new FileReader();
      filereader.onload = () => {
        const result = filereader.result as string;
        setPickImage(result);
      };
      filereader.readAsDataURL(file);
    }
  }
  return (
    <div className={classes.imagePicker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No Image Yet</p>}
          {pickImage && <Image src={pickImage} alt="img" fill></Image>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          style={{ display: "none" as "none" }}
          onChange={hanleImageChange}
          ref={imageInput}
        />
        <Button
          className={classes.button}
          type="button"
          onClick={handleClick}
          radius="full"
        >
          Pick image
        </Button>
      </div>
    </div>
  );
}
