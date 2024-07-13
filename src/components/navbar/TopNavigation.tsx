import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";

import NavLink from "./NavLink";
import { menuItems } from "./menuItems";
import Image from "next/image";

export default function TopNavigation() {
  return (
    <Navbar
      maxWidth="xl"
      className=""
      classNames={{
        item: [
          "text-xl",
          "data-[active=true]:text-yellow-200",
          "data-[active=true]:font-normal",
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <Image
          src="/recycla-logo.png"
          alt="Recycla logo"
          height={30}
          width={200}
        />
      </NavbarBrand>
      <NavbarContent justify="center">
        {menuItems.map((item) => (
          <NavLink key={item.label} href={item.href} label={item.label} />
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <IoPersonOutline />
      </NavbarContent>
    </Navbar>
  );
}
