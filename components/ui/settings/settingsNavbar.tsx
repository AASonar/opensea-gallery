import React, { FC, useState } from "react";
import { Navbar } from "@mantine/core";
import { SegmentedControl } from "@mantine/core";

const SettingsTabs: FC = ({ children }) => {
  const [orderValue, setOrderValue] = useState("profile");
  return (
    <div className="sidenav inline-flex flex-col space-y-2 items-start justify-start w-1/6 py-10">
      <p className="USERSETTINGS opacity-50 text-xs font-semibold tracking-wide leading-none text-white">
        USER SETTINGS
      </p>
      <SegmentedControl
        size="md"
        color="dark"
        className="items-start bg-transparent divide-transparent"
        orientation="vertical"
        value={orderValue}
        onChange={setOrderValue}
        data={[
          {
            value: "profile",
            label: <p className="text-teal">User Profile</p>,
          },
          {
            value: "account",
            label: <p className="text-teal">Account Settings</p>,
          },
          {
            value: "apperance",
            label: <p className="text-teal">Appearance</p>,
          },
          {
            value: "logout",
            label: <p className="text-red-500">Log Out</p>,
          },
        ]}
      />
    </div>
  );
};

export default SettingsTabs;
