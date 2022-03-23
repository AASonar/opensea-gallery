import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, TextInput } from "@mantine/core";
import React, { FC, useState } from "react";
import { Button } from "@mantine/core";

const NavBar: FC = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="navbar w-full inline-flex space-x-80 items-center justify-between px-24 py-5 bg-gray-700 shadow">
      <div className="logo flex space-x-2.5 items-center justify-center">
        <Image
          className="cube1 w-8 h-full"
          src="/cube.svg"
          alt="The Block Logo"
        />
        <p className="THEBLOCK text-sm font-bold text-blue-300">THE BLOCK</p>
      </div>
      <div
        className="actions flex space-x-10 items-center justify-center"
        style={{ width: 489, height: 37 }}
      >
        <TextInput
          icon={
            <p className=" text-sm text-blue-300">
              <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
            </p>
          }
          variant="unstyled"
          placeholder="Search..."
          radius="xl"
          type="search"
          className="searchbar flex space-x-2.5 items-center justify-start w-72 px-4  bg-gray-800 border rounded-full border-gray-600 font-monda font-medium"
          styles={{ input: { color: "white" } }}
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
        />

        <div className="loginsignup flex space-x-3 items-center justify-center">
          <Button
            variant="subtle"
            radius="md"
            uppercase
            className="font-workSans font-medium"
          >
            LOGIN
          </Button>
          <Button
            variant="filled"
            radius="md"
            uppercase
            rightIcon={<FontAwesomeIcon icon={["fas", "right-to-bracket"]} />}
            className="font-workSans font-medium"
          >
            SIGNUP
          </Button>
          {/* <p className="BUTTON text-sm font-medium tracking-wider leading-tight text-green-600 capitalize">
              SIGNUP
            </p> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
