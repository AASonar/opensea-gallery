import type { NextPage } from "next";
import Footer from "../../components/ui/footer";
import NavBar from "../../components/ui/navbar";
import {
  Image,
  Space,
  Avatar,
  TextInput,
  Textarea,
  Button,
  Container,
} from "@mantine/core";
import SettingsTabs from "../../components/ui/settings/settingsNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  defaultVariant: { backgroundColor: "#28293D", borderColor: "#464874" },
  label: { color: "white", opacity: 25 },
  input: { color: "white" },
  wrapper: { width: 732, borderColor: "#464874" },
};

const Account: NextPage = () => {
  return (
    <div>
      <NavBar />

      <div
        className="allcontent inline-flex space-x-16 items-start justify-start px-24 pt-16"
        style={{ width: 2000, height: 1215 }}
      >
        <SettingsTabs />
        <Space w="xl" />
        <div
          className="appearancesettings wrapper inline-flex flex-col space-y-6 items-start justify-start pt-10"
          style={{ width: 780, height: 1155 }}
        >
          <p className="UserProfile text-2xl font-bold leading-normal text-white">
            User Profile
          </p>

          <div
            className="relative flex bg-lightPurple border-lightPurpleOutline border rounded p-8 h-96"
            style={{ width: 780 }}
          >
            <div className="relative w-full h-48 bg-[url('https://wallpaperaccess.com/full/411002.jpg')]">
              <div className="nft/button/icon inline-flex space-x-0.5 items-center justify-center w-8 h-8 p-2 absolute bottom-2 right-2 bg-gray-600 border rounded-full border-indigo-500">
                <p className=" text-xs font-solid tracking-wide leading-none text-indigo-500 capitalize">
                  <FontAwesomeIcon icon={["fas", "image"]} />
                </p>
                <p className="+ text-xs font-solid tracking-wide leading-3 text-indigo-500 capitalize">
                  +
                </p>
              </div>
            </div>

            <Avatar
              className="image w-32 h-32 absolute bottom-12 left-12 border rounded-full border-gray-600"
              src="https://via.placeholder.com/125x125"
            />
            <div className="absolute bottom-12 left-12 w-32 h-32">
              <div className="relative w-full h-full">
                <div className="nft/button/icon inline-flex space-x-0.5 items-center justify-center w-8 h-8 p-2 absolute bottom-0 right-0 bg-gray-600 border rounded-full border-indigo-500">
                  <p className=" text-xs font-solid tracking-wide leading-none text-indigo-500 capitalize">
                    <FontAwesomeIcon icon={["fas", "image"]} />
                  </p>
                  <p className="+ text-xs font-solid tracking-wide leading-3 text-indigo-500 capitalize">
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="customization2 flex flex-col space-y-4 items-start justify-start p-6 bg-lightPurple border rounded border-lightPurpleOutline"
            style={{ width: 780, height: 716 }}
          >
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="Sonaru"
                label="Username"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <Textarea
                placeholder="🇵🇭 NFT Artist | Art Acc of @frozensonar | OBJTK: http://objkt.com/@frozensonar FND: http://foundation.app/@frozensonar | Banner: Space Voyagers on OBJKT"
                label="Bio"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="ronin:2435325234"
                label="Wallet"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="bryan@acadarena.com"
                label="Email"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="behance.net/frozensonar"
                label="Website"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="frozensonar"
                label="Twitter Handle"
                icon={<FontAwesomeIcon icon={["fas", "at"]} />}
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="frozensonar"
                label="Instagram Handle"
                icon={<FontAwesomeIcon icon={["fas", "at"]} />}
                styles={styles}
              />
            </div>
            <Container className="items-end">
              <Button
                variant="filled"
                className="font-workSans font-medium hover:bg-transparent"
              >
                Discard Changes
              </Button>

              <Button className="font-workSans font-medium bg-teal text-gray-800">
                Save All
              </Button>
            </Container>
          </div>
        </div>
      </div>
      <Space h="xl" />
      <Footer />
    </div>
  );
};

export default Account;
