import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { relative } from "path/posix";
import React, { FC, useState } from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "@mui/material";
import { ActionIcon, Avatar, Button, Tooltip } from "@mantine/core";
import { Image } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Text } from "@mantine/core";
import { Badge } from "@mantine/core";
import {
  handleEmail,
  handleInstagram,
  handleTwitter,
} from "../../utils/openLinks";

function Profile({ userData, wallet }: any) {
  const clipboard = useClipboard({ timeout: 500 });
  const [opened, setOpened] = useState(false);

  function handleCopy() {
    clipboard.copy(userData.wallets[+wallet].address);
    setOpened((o) => !o);
    setTimeout(() => {
      setOpened((o) => !o);
    }, 500);
  }
  return (
    <div
      className="userheader inline-flex space-x-10 items-start justify-start"
      style={{ position: "absolute", top: 400 }}
    >
      <div className="useravatar inline-flex flex-col space-y-5 items-center justify-center">
        <Avatar
          // radius="xl"
          className="image w-full h-52 border rounded-full border-gray-600"
          alt={userData.username + " Profile Picture"}
          src={userData.profilePhotoUrl}
        />
        <Badge size="lg" className="bg-yellow-200">
          <div className="chip inline-flex space-x-2 items-center justify-start px-2 py-1">
            <p className=" text-sm tracking-wider leading-tight text-gray-800">
              <FontAwesomeIcon icon={["fas", "award"]} />
            </p>
            <p className="TOPCOLLECTOR text-xs font-workSans font-bold tracking-wide leading-none text-gray-800">
              TOP 1 COLLECTOR
            </p>
          </div>
        </Badge>
      </div>
      <div
        className="userdetails inline-flex flex-col space-y-4 items-start justify-start pt-20"
        style={{ width: 824, height: 262 }}
      >
        <div
          className="userbadges inline-flex space-x-32 items-center justify-start"
          style={{ width: 824, height: 64 }}
        >
          <div
            className="usernameand badge flex items-center justify-start"
            style={{ width: 554, height: 64 }}
          >
            <p className="name text-6xl font-bold leading-10 text-white">
              {userData.username}
            </p>
          </div>
          <div className="socials flex space-x-2 items-center justify-center">
            <div className="order inline-flex flex-col items-center justify-center w-10 h-full p-5 rounded-full">
              <ActionIcon
                variant="transparent"
                onClick={() => handleTwitter(userData.twitterHandle ?? "")}
              >
                <p className=" text-2xl tracking-wider leading-9 text-blue-300">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </p>
              </ActionIcon>
            </div>
            <div className="order inline-flex flex-col items-center justify-center w-10 h-full px-5 py-2.5 rounded-full">
              <ActionIcon
                variant="transparent"
                onClick={() => handleInstagram(userData.instagramHandle ?? "")}
              >
                <p className=" text-2xl tracking-wider leading-9 text-blue-300">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </p>
              </ActionIcon>
            </div>

            <div className="order inline-flex flex-col items-center justify-center w-10 h-full px-5 py-2.5 rounded-full">
              <ActionIcon
                variant="transparent"
                onClick={() => handleEmail(userData.email ?? "")}
              >
                <p className=" text-2xl tracking-wider leading-9 text-blue-300">
                  <FontAwesomeIcon icon={["far", "envelope"]} />
                </p>
              </ActionIcon>
            </div>
          </div>
        </div>
        <div
          className="bio flex flex-col space-y-1 items-start justify-center"
          style={{ width: 790 }}
        >
          <p className="bio opacity-50 text-xs font-medium tracking-wide leading-none text-white">
            BIO
          </p>
          <Text
            className="name text-sm tracking-wider leading-tight text-white font-monda font-medium"
            style={{ width: 790 }}
          >
            {userData.description}
          </Text>
        </div>

        <div className="links inline-flex space-x-2 items-start justify-start">
          <Tooltip
            label="Copied"
            opened={opened}
            transition="fade"
            transitionDuration={100}
            withArrow
            color="blue"
          >
            <Button compact variant="white" onClick={() => handleCopy()}>
              <div className="bio flex space-x-2 items-center justify-start">
                <p className="bio opacity-50 text-sm tracking-wider leading-tight text-white">
                  <FontAwesomeIcon icon={["fas", "wallet"]} />
                </p>

                <div className="amount h-full">
                  <p className="name text-sm tracking-wider leading-tight text-white font-monda font-medium">
                    {userData.wallets[+wallet].address}
                  </p>
                </div>
              </div>
            </Button>
          </Tooltip>

          <Button
            compact
            variant="white"
            onClick={() => window.open(userData.websiteUrl)}
          >
            <div className="bio flex space-x-2 items-center justify-start">
              <p className="bio opacity-50 text-sm tracking-wider leading-tight text-white">
                <FontAwesomeIcon icon={["fas", "link"]} />
              </p>
              <div className="amount h-full">
                <p className="name text-sm tracking-wider leading-tight text-white font-monda font-medium">
                  {userData.websiteUrl}
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
