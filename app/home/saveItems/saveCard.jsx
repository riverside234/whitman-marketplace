"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function SaveCard(props) {
  const [imgSrc, setImgSrc] = useState(
    `https://y-nextjs-demo-users-image.s3.amazonaws.com/${props.item.image}`
  );

  const handleError = () => {
    setImgSrc(
      "https://y-nextjs-demo-users-image.s3.amazonaws.com/sold-out-stamp.png"
    );
  };

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((old) => !old);
  };

  const router = useRouter();

  return (
    <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
      <Card isFooterBlurred>
        <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt={props.item.item}
          className=" z-0   object-cover"
          src={imgSrc}
          style={{ width: "32rem", height: "24rem" }}
          onError={handleError}
        />

        {show ? (
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
              onClick={handleShow}
            >
              More Details
            </Button>

            <Button
              className="text-tiny"
              radius="full"
              size="sm"
              color="danger"
              onClick={() => {
                props.functionCheckUnselect(props.item.id);

                router.refresh();
              }}
            >
              Delete{" "}
            </Button>
          </CardFooter>
        ) : (
          <div>
            <Divider />

            <CardBody className="   text-small text-default-400 ">
              <h4
                className=" font-bold  text-medium"
                style={{ textTransform: "uppercase" }}
              >
                {props.item.item}{" "}
              </h4>
              <p className=" font-bold">Price: ${props.item.price}</p>
              <p>
                <b>Contact Info:</b>{" "}
              </p>
              <p>Name: {props.item.name}</p>
              <p>Email/Phone Number: {props.item.email}</p>
              <p>
                <b>Description:</b>
              </p>
              <p>{props.item.description}</p>
            </CardBody>
            <Divider />
            <CardFooter className="  bg-white/30   border-zinc-100/50 z-10 justify-between">
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
                onClick={handleShow}
              >
                Show less
              </Button>

              <Button
                className="text-tiny"
                radius="full"
                size="sm"
                color="danger"
                onClick={() => {
                  props.functionCheckUnselect(props.item.id);

                  router.refresh();
                }}
              >
                Delete{" "}
              </Button>
            </CardFooter>
          </div>
        )}
      </Card>
    </div>
  );
}
