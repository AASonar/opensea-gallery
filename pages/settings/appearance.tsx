import type { NextPage } from "next";
import Footer from "../../components/ui/footer";
import NavBar from "../../components/ui/navbar";
import { Space } from "@mantine/core";

const Account: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Space h="xl" />
      <Footer />
    </div>
  );
};

export default Account;
