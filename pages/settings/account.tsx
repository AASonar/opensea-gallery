import type { NextPage } from "next";
import Footer from "../../components/ui/footer";
import NavBar from "../../components/ui/navbar";
import { Center, Space } from "@mantine/core";
import SettingsBar from "../../components/ui/settings/settingsBar";

const Account: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Center>
        <div className="allcontent inline-flex space-x-16 items-start justify-start px-24 pt-16">
          <SettingsBar />
          <Space w="xl" />
          <div className="appearancesettings wrapper inline-flex flex-col space-y-6 items-start justify-start pt-8">
            <p className="UserProfile text-2xl font-bold leading-normal text-white">
              Account Settings
            </p>
            <div
              className="relative flex bg-lightPurple border-lightPurpleOutline border rounded p-8 h-80"
              style={{ width: 780 }}
            ></div>
          </div>
        </div>
      </Center>

      <Space h="xl" />
      <Footer />
    </div>
  );
};

export default Account;
