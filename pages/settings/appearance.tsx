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
  Center,
  Text,
} from "@mantine/core";
import SettingsTabs from "../../components/ui/settings/settingsNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RadioGroup, Radio } from "@mantine/core";
import { useState } from "react";
import SettingsBar from "../../components/ui/settings/settingsBar";

const Appearance: NextPage = () => {
  const [orderValue, setOrderValue] = useState("latest");
  const [viewValue, setViewValue] = useState("detailed");

  const styles = {
    label: { color: "white" },
    radio: {
      backgroundColor: "#28293D",
      borderColor: "#464874",
    },
  };

  return (
    <div>
      <NavBar />
      <Center>
        <div className="allcontent inline-flex space-x-16 items-start justify-start px-24 pt-16">
          <SettingsBar />
          <Space w="xl" />
          <div
            className="appearancesettings wrapper inline-flex flex-col space-y-6 items-start justify-start pt-8"
            style={{ width: 780, height: 748 }}
          >
            <p className="Appearance text-2xl font-bold leading-normal text-white">
              Appearance
            </p>
            <div
              className="customization1 flex flex-col space-y-4 items-start justify-start p-6 border rounded bg-lightPurple border-lightPurpleOutline"
              style={{ width: 780 }}
            >
              <div
                className="alloptions inline-flex space-x-12 items-start justify-start"
                style={{ width: 732, height: 76 }}
              >
                <RadioGroup
                  label="Sort Gallery Order By"
                  value={orderValue}
                  onChange={setOrderValue}
                  size="sm"
                  styles={styles}
                >
                  <Text>VALUE</Text>
                  <Radio value="9-1" label="Highest to Lowest" />
                  <Radio value="1-9" label="Lowest to Highest" />

                  <Text>NAME</Text>
                  <Radio value="A-Z" label="A-Z" />
                  <Radio value="Z-A" label="Z-A" />

                  <Text>DATE ACQUIRED</Text>
                  <Radio value="latest" label="Latest to Oldest" />
                  <Radio value="oldest" label="Oldest to Latest" />
                </RadioGroup>
              </div>
            </div>
            <div
              className="customization2 flex flex-col space-y-4 items-start justify-start p-6 bg-lightPurple border-lightPurpleOutline border rounded "
              style={{ width: 780 }}
            >
              <RadioGroup
                label="Layout"
                value={viewValue}
                onChange={setViewValue}
                orientation="vertical"
                size="md"
                styles={styles}
              >
                <Radio
                  value="art"
                  label={
                    <div className="inline-flex">
                      <FontAwesomeIcon icon={["fas", "border-all"]} />
                      <Space w="sm" />
                      <p>Art View</p>
                      <Space w="sm" />
                      <FontAwesomeIcon
                        className="text-gray-400 w-2.5 h-2.5"
                        icon={["far", "circle-question"]}
                      />
                    </div>
                  }
                />
                <Radio
                  value="detailed"
                  label={
                    <div className="inline-flex">
                      <FontAwesomeIcon icon={["fas", "grip"]} />
                      <Space w="sm" />
                      <p>Detailed View</p>
                      <Space w="sm" />
                      <FontAwesomeIcon
                        className="text-gray-400 w-2.5 h-2.5"
                        icon={["far", "circle-question"]}
                      />
                    </div>
                  }
                />
              </RadioGroup>
            </div>
            <div
              className="customization3 flex flex-col space-y-4 items-start justify-start p-6 bg-lightPurple border-lightPurpleOutline border rounded"
              style={{ width: 780, height: 225 }}
            >
              <p className="Theme opacity-50 text-sm font-medium tracking-wider leading-tight text-white capitalize">
                Theme
              </p>
              <div
                className="alloptions flex flex-col space-y-4 items-start justify-start"
                style={{ width: 732, height: 140 }}
              >
                <div
                  className="row inline-flex space-x-6 items-start justify-start"
                  style={{ width: 732, height: 36 }}
                >
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                </div>
                <div
                  className="row inline-flex space-x-6 items-start justify-start"
                  style={{ width: 732, height: 36 }}
                >
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                </div>
                <div
                  className="row inline-flex space-x-6 items-start justify-start"
                  style={{ width: 732, height: 36 }}
                >
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                  <img
                    className="themeoption w-9 h-full rounded-lg"
                    src="https://via.placeholder.com/36x36"
                  />
                </div>
              </div>
            </div>
            <div
              className="buttongroup inline-flex space-x-6 items-center justify-end"
              style={{ width: 780, height: 37 }}
            >
              <div className="nft/button/primary flex items-center justify-center px-3 py-2 rounded">
                <Button className="BUTTON text-sm  tracking-wider leading-tight font-workSans font-medium hover:bg-transparent">
                  Save and Preview
                </Button>
              </div>
              <div className="nft/button/primary flex items-center justify-center px-3 py-2">
                <Button className="BUTTON text-sm tracking-wider leading-tightcapitalize font-workSans font-medium bg-teal text-gray-800">
                  Publish Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Center>
      <Space h="xl" />
      <Footer />
    </div>
  );
};

export default Appearance;
