import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { relative } from "path/posix";
import React, { FC } from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "@mui/material";

function handleTwitter(handle: string) {
  window.open(`https://twitter.com/${handle}`);
}

function handleInstagram(handle: string) {
  window.open(`https://instagram.com/${handle}`);
}

function handleEmail(handle: string) {
  window.open(`mailto:${handle}?subject=Contacted from The Block`);
}

function Profile({ userData }: any) {
  return (
    <div
      className="userheader inline-flex space-x-10 items-start justify-start"
      style={{ position: "absolute", top: 400, right: 200 }}
    >
      <div className="useravatar inline-flex flex-col space-y-5 items-center justify-center">
        <img
          className="image w-full h-52 border rounded-full border-gray-600"
          alt={userData.username + " Profile Picture"}
          src={userData.profilePhotoUrl}
        />
        <div className="chip inline-flex space-x-2 items-center justify-start px-2 py-1 bg-yellow-200 border rounded-full border-yellow-300">
          <p className=" text-sm tracking-wider leading-tight text-gray-800">
            <FontAwesomeIcon icon={["fas", "award"]} />
          </p>
          <p className="TOPCOLLECTOR text-xs font-semibold tracking-wide leading-none text-gray-800">
            TOP 1 COLLECTOR
          </p>
        </div>
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
              <IconButton
                size="medium"
                onClick={() => handleTwitter(userData.twitterHandle ?? "")}
              >
                <p className=" text-2xl tracking-wider leading-9 text-blue-300">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </p>
              </IconButton>
            </div>
            <div className="order inline-flex flex-col items-center justify-center w-10 h-full px-5 py-2.5 rounded-full">
              <IconButton
                size="medium"
                onClick={() => handleInstagram(userData.instagramHandle ?? "")}
              >
                <p className=" text-2xl tracking-wider leading-9 text-blue-300">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </p>
              </IconButton>
            </div>

            <div className="order inline-flex flex-col items-center justify-center w-10 h-full px-5 py-2.5 rounded-full">
              <IconButton
                size="medium"
                onClick={() => handleEmail(userData.email ?? "")}
              >
                <p className=" text-2xl tracking-wider leading-9 text-blue-300">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </p>
              </IconButton>
            </div>
          </div>
        </div>
        <div
          className="bio flex flex-col space-y-1 items-start justify-center"
          style={{ width: 790, height: 65 }}
        >
          <p className="bio opacity-50 text-xs font-semibold tracking-wide leading-none text-white">
            BIO
          </p>
          <p
            className="name text-sm tracking-wider leading-tight text-white"
            style={{ width: 790 }}
          >
            {userData.description}
          </p>
        </div>
        <div
          className="links inline-flex space-x-4 items-start justify-start"
          style={{ width: 824, height: 21 }}
        >
          <div className="bio flex space-x-1 items-center justify-start">
            <p className="bio opacity-50 text-sm tracking-wider leading-tight text-white">
              <FontAwesomeIcon icon={["fas", "wallet"]} />
            </p>
            <div className="amount h-full">
              <p className="name text-sm tracking-wider leading-tight text-white">
                {userData.wallets[0].address}
              </p>
            </div>
          </div>
          <div className="bio flex space-x-1 items-center justify-start">
            <p className="bio opacity-50 text-sm tracking-wider leading-tight text-white">
              <FontAwesomeIcon icon={["fas", "link"]} />
            </p>
            <div className="amount h-full">
              <p className="name text-sm tracking-wider leading-tight text-white">
                {userData.websiteUrl}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
