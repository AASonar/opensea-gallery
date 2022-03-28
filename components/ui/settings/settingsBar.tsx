import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mantine/core";

const SettingsBar: FC = ({ children }) => {
  const router = useRouter();

  const menuItems = [
    {
      href: "/settings/profile",
      title: "User Profile",
    },
    {
      href: "/settings/account",
      title: "Account Settings",
    },
    {
      href: "/settings/appearance",
      title: "Appearance",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-transparent text-gray-400 m-2 p-2 h-2 flex items-center font-semibold font-workSans uppercase">
        User Settings
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-transparent w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-3" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-1 bg-transparent rounded text-teal hover:bg-lightPurple cursor-pointer font-workSans ${
                        router.asPath === href && "bg-[#313248]"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
              <li className="m-3">
                <Button className="bg-transparent hover:bg-transparent tracking-wide flex p-1 font-workSans font-normal text-red-400">
                  Logout
                </Button>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default SettingsBar;
