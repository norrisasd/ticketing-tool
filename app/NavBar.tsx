"use client";
import React from "react";
import Link from "next/link";
import { GiTicket } from "react-icons/gi";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", path: "/" },
    { label: "Issues", path: "/issues" },
    { label: "My Task", path: "/my-task" },
    { label: "Help", path: "/help" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiTicket className="text-3xl" />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, path }) => (
          <li
            key={path}
            className={classnames({
              "text-xl": true,
              "font-medium": true,
              "text-zinc-900": currentPath === path,
              "text-zinc-500": currentPath !== path,
              "hover:text-zinc-800": true,
            })}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
