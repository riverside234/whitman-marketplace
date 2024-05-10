import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./logo";
import { Providers } from "../providers";

export default async function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar>
        <NavbarBrand>
          <Link color="foreground" href="/home/allItems">
            <AcmeLogo />
            <p className="font-bold text-inherit">Whitman Marketplace</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/home/allItems" aria-current="page">
              All Items
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="/home/saveItems">
              Saved Items
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              radius="full"
              color="primary"
              href="/"
              variant="flat"
            >
              Log Out
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Providers>{children}</Providers>
    </section>
  );
}
