"use client";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem } from "./menuItems";

export default function NavLink({ href, label }: MenuItem) {
  const pathname = usePathname();

  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      {label}
    </NavbarItem>
  );
}
