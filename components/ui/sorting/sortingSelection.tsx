import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, IconButton } from "@mui/material";
import { useContext, useReducer, useState } from "react";
import CardViewReducer from "../../reducers/cardViewReducer";
import { CardViewContext } from "../../contexts/CardViewContext";
import { ActionIcon, Center, Container, TextInput } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { isOptionGroup } from "@mui/base";
import { SegmentedControl } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { Input } from "@mantine/core";

export default function SortingSelection() {
  const { cardView = "detailed", setCardView } = useContext(CardViewContext);
  const [orderValue, setOrderValue] = useState("react");
  const [viewValue, setViewValue] = useState("react");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className="sectionheader inline-flex flex-col space-y-6 items-start justify-center"
      style={{ width: 1080, height: 90 }}
    >
      <Tabs>
        <Tabs.Tab
          label={
            <div className="tab inline-flex flex-col space-y-1 items-center justify-start">
              <div className="text inline-flex items-start justify-start px-3">
                <p className="tEXT text-sm font-medium tracking-wider leading-tight text-blue-300 capitalize">
                  NFT ART COLLECTION
                </p>
              </div>
              <div className="line w-full h-0.5 border-blue-300" />
            </div>
          }
        />
        <Tabs.Tab
          label={
            <div className="text inline-flex items-start justify-start px-3">
              <p className="tEXT text-sm font-medium tracking-wider leading-tight text-white capitalize">
                NFT ART ALBUMS
              </p>
            </div>
          }
        />
      </Tabs>

      <Container
        className="filters inline-flex space-x-6 items-center justify-end"
        style={{ width: 1080, height: 41 }}
      >
        <div className="filteritem flex space-x-2 items-center justify-center">
          <SegmentedControl
            size="md"
            color="indigo"
            value={orderValue}
            onChange={setOrderValue}
            data={[
              {
                value: "1-9",
                label: <FontAwesomeIcon icon={["fas", "arrow-down-1-9"]} />,
              },
              {
                value: "9-1",
                label: <FontAwesomeIcon icon={["fas", "arrow-down-9-1"]} />,
              },
              {
                value: "A-Z",
                label: <FontAwesomeIcon icon={["fas", "arrow-down-a-z"]} />,
              },
              {
                value: "Z-A",
                label: <FontAwesomeIcon icon={["fas", "arrow-down-z-a"]} />,
              },
            ]}
          />

          <div className="options flex space-x-3 items-start justify-start">
            <SegmentedControl
              size="md"
              color="violet"
              value={viewValue}
              onChange={setViewValue}
              data={[
                {
                  value: "detailed",
                  label: <FontAwesomeIcon icon={["fas", "border-all"]} />,
                },
                {
                  value: "art",
                  label: <FontAwesomeIcon icon={["fas", "grip"]} />,
                },
              ]}
            />
          </div>
        </div>

        <TextInput
          icon={
            <p className=" text-sm text-blue-300">
              <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
            </p>
          }
          variant="unstyled"
          placeholder="Search collection..."
          radius="xl"
          type="search"
          className="searchbar flex space-x-2.5 items-center justify-start w-1/4 px-4  bg-gray-800 border rounded-full border-gray-600 font-monda font-medium"
          styles={{ input: { color: "white" } }}
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
        />

        {/* <div className="searchbar flex space-x-2.5 items-center justify-start w-1/4 px-4 py-2.5 bg-gray-800 border rounded-full border-gray-600">
          <p className=" text-sm text-blue-300">
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
          </p>

          <p className="Searchcollection... opacity-50 text-sm tracking-wider leading-tight text-white">
            Search collection...
          </p>
        </div>
        */}
      </Container>
    </div>
  );
}
