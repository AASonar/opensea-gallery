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
        <SettingsBar />
      </Center>
      v
      <Space h="xl" />
      <Footer />
    </div>
  );
};

export default Account;
