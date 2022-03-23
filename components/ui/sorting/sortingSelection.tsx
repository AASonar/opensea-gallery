import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, IconButton } from "@mui/material";
import { useContext, useReducer, useState } from "react";
import CardViewReducer from "../../reducers/cardViewReducer";
import { CardViewContext } from "../../contexts/CardViewContext";
import {
  ActionIcon,
  Center,
  Container,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { isOptionGroup } from "@mui/base";
import { SegmentedControl } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { Input } from "@mantine/core";

export default function SortingSelection() {
  const { cardView = "detailed", setCardView } = useContext(CardViewContext);
  const [orderValue, setOrderValue] = useState("latest");
  const [viewValue, setViewValue] = useState("detailed");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="sectionheader inline-flex flex-col space-y-6 items-start justify-center">
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
        style={{ width: 1080, height: 40 }}
      >
        <div className="filteritem flex space-x-2 items-center justify-center">
          <SegmentedControl
            size="md"
            color="indigo"
            value={orderValue}
            className="bg-transparent divide-transparent"
            onChange={setOrderValue}
            data={[
              {
                value: "latest",
                label: (
                  <Tooltip
                    transition="pop"
                    transitionDuration={200}
                    transitionTimingFunction="ease"
                    color="indigo"
                    label="By Latest"
                    withArrow
                    arrowSize={3}
                    radius="lg"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-down-short-wide"]} />
                  </Tooltip>
                ),
              },
              {
                value: "oldest",
                label: (
                  <Tooltip
                    transition="pop"
                    transitionDuration={200}
                    transitionTimingFunction="ease"
                    color="indigo"
                    label="By Oldest"
                    withArrow
                    arrowSize={3}
                    radius="lg"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-down-wide-short"]} />
                  </Tooltip>
                ),
              },
              {
                value: "1-9",
                label: (
                  <Tooltip
                    transition="pop"
                    transitionDuration={200}
                    transitionTimingFunction="ease"
                    color="indigo"
                    label="By Lowest Value"
                    withArrow
                    arrowSize={3}
                    radius="lg"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-down-1-9"]} />
                  </Tooltip>
                ),
              },
              {
                value: "9-1",
                label: (
                  <Tooltip
                    transition="pop"
                    transitionDuration={200}
                    transitionTimingFunction="ease"
                    color="indigo"
                    label="By Highest Value"
                    withArrow
                    arrowSize={3}
                    radius="lg"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-down-9-1"]} />{" "}
                  </Tooltip>
                ),
              },
              {
                value: "A-Z",
                label: (
                  <Tooltip
                    transition="pop"
                    transitionDuration={200}
                    transitionTimingFunction="ease"
                    color="indigo"
                    label="By A-Z"
                    withArrow
                    arrowSize={3}
                    radius="lg"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-down-a-z"]} />
                  </Tooltip>
                ),
              },
              {
                value: "Z-A",
                label: (
                  <Tooltip
                    transition="pop"
                    transitionDuration={200}
                    transitionTimingFunction="ease"
                    color="indigo"
                    label="By Z-A"
                    withArrow
                    arrowSize={3}
                    radius="lg"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-down-z-a"]} />
                  </Tooltip>
                ),
              },
            ]}
          />

          <div className="options flex space-x-3 items-start justify-start">
            <SegmentedControl
              size="md"
              color="violet"
              value={viewValue}
              className="bg-transparent divide-transparent"
              onChange={setViewValue}
              data={[
                {
                  value: "detailed",
                  label: (
                    <Tooltip
                      transition="pop"
                      color="violet"
                      transitionDuration={200}
                      transitionTimingFunction="ease"
                      label="Detailed View"
                      withArrow
                      arrowSize={3}
                      radius="lg"
                    >
                      <FontAwesomeIcon icon={["fas", "border-all"]} />{" "}
                    </Tooltip>
                  ),
                },
                {
                  value: "art",
                  label: (
                    <Tooltip
                      transition="pop"
                      color="violet"
                      transitionDuration={200}
                      transitionTimingFunction="ease"
                      label="Art View"
                      withArrow
                      arrowSize={3}
                      radius="lg"
                    >
                      <FontAwesomeIcon icon={["fas", "grip"]} />{" "}
                    </Tooltip>
                  ),
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
