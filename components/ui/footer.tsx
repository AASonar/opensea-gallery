import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Container, Group, Image } from "@mantine/core";
import React, { FC, useState } from "react";
import {
  handleFacebook,
  handleInstagram,
  handleTwitter,
} from "../utils/openLinks";

const Footer: FC = ({ children }) => {
  return (
    <div className="footer inline-flex space-x-10 items-center justify-center p-16 bg-gray-700">
      <Group className="creditsand socials inline-flex flex-col ml-20 space-y-10 items-start justify-start">
        <div className="socials flex flex-col space-y-4 items-start justify-start">
          <p className="FOLLOWUS AND BE UPDATED WITH OUR LATEST FEATURES text-sm font-medium tracking-wider leading-tight text-white capitalize">
            FOLLOW US AND BE UPDATED WITH OUR LATEST FEATURES
          </p>
          <div className="socialicons inline-flex space-x-5 items-start justify-start">
            <ActionIcon
              variant="transparent"
              onClick={() => handleFacebook("theblock")}
            >
              <p className=" text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </p>
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              onClick={() => handleInstagram("theblock")}
            >
              <p className=" text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </p>
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              onClick={() => handleTwitter("theblock")}
            >
              <p className=" text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </p>
            </ActionIcon>
          </div>
        </div>
        <div className="alltools flex flex-col space-y-4 items-start justify-start">
          <p className="BUILTWITH w-full text-sm font-medium tracking-wider leading-tight text-white capitalize">
            BUILT WITH
          </p>
          <div className="tools inline-flex space-x-5 items-center justify-center">
            <Image
              className="Rectangle2 w-7 h-7"
              alt="sponsor"
              src="https://via.placeholder.com/27x27"
            />
            <Image
              className="Rectangle3 w-8 h-full"
              alt="sponsor"
              src="https://via.placeholder.com/32x32"
            />
            <Image
              className="Rectangle4 w-8 h-full"
              alt="sponsor"
              src="https://via.placeholder.com/32x32"
            />
            <Image
              className="Moralis-Logo1 1 w-6 h-5"
              alt="sponsor"
              src="https://via.placeholder.com/26x20"
            />
          </div>
        </div>
      </Group>
      <Group className="creditsand socials inline-flex flex-col space-y-10 items-end justify-center">
        <div className="logo inline-flex space-x-2.5 items-center justify-center ">
          <Image
            className="cube1 w-8 h-full"
            src="/cube.svg"
            alt="The Block Logo"
          />
          <p className="THEBLOCK text-sm font-bold text-blue-300">THE BLOCK</p>
        </div>
        <div className="credits flex flex-col items-end justify-center mr-50">
          <p className="text-sm leading-tight text-right text-white">
            © 2022 The Block
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a diam
            ex. In id aliquam neque. Quisque eget semper arcu. Integer id nibh
            id nisi fringilla ullamcorper. Suspendisse potenti. Fusce non metus
            tempus, interdum tellus a, vestibulum ipsum.
          </p>
        </div>
      </Group>
    </div>
  );
};

export default Footer;
