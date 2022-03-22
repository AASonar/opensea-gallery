import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, IconButton } from "@mui/material";
import { useContext, useReducer, useState } from "react";
import CardViewReducer from "../../reducers/cardViewReducer";
import { CardViewContext } from "../../contexts/CardViewContext";
import { ActionIcon } from "@mantine/core";

export default function SortingSelection() {
  const { cardView, setCardView } = useContext(CardViewContext);

  function handleDetailedView() {
    if (setCardView) {
      setCardView("detailed");
    }
  }

  function handleArtView() {
    if (setCardView) {
      setCardView("art");
    }
  }
  return (
    <div
      className="sectionheader inline-flex flex-col space-y-6 items-start justify-center"
      style={{ width: 1080, height: 90 }}
    >
      <div className="tabs inline-flex items-start justify-start">
        <div className="tab inline-flex flex-col space-y-1 items-center justify-start">
          <div className="text inline-flex items-start justify-start px-3">
            <p className="tEXT text-sm font-medium tracking-wider leading-tight text-blue-300 capitalize">
              NFT ART COLLECTION
            </p>
          </div>
          <div className="line w-full h-0.5 border-blue-300" />
        </div>
        <div className="tab inline-flex flex-col space-y-1 items-center justify-start opacity-50">
          <div className="text inline-flex items-start justify-start px-3">
            <p className="tEXT text-sm font-medium tracking-wider leading-tight text-white capitalize">
              NFT ART ALBUMS
            </p>
          </div>
          <div className="line w-full h-0.5 border-white" />
        </div>
      </div>
      <div
        className="filters inline-flex space-x-6 items-center justify-end"
        style={{ width: 1080, height: 41 }}
      >
        <div className="filteritem flex space-x-2 items-center justify-center">
          <p className="VALUE opacity-50 text-xs font-semibold tracking-wide leading-none text-white">
            VALUE
          </p>
          <div className="options flex space-x-3 items-start justify-start">
            <ActionIcon variant="transparent">
              <p className=" opacity-50 text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "arrow-down-1-9"]} />
              </p>
            </ActionIcon>
            <ActionIcon variant="transparent">
              <p className=" opacity-50 text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "arrow-down-9-1"]} />
              </p>
            </ActionIcon>
          </div>
        </div>
        <div className="filteritem flex space-x-2 items-center justify-center">
          <p className="NAME opacity-50 text-xs font-semibold tracking-wide leading-none text-white">
            NAME
          </p>
          <div className="options flex space-x-3 items-start justify-start">
            <ActionIcon variant="transparent">
              <p className=" text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "arrow-down-a-z"]} />
              </p>
            </ActionIcon>
            <ActionIcon variant="transparent">
              <p className=" opacity-50 text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "arrow-down-z-a"]} />
              </p>
            </ActionIcon>
          </div>
        </div>
        <div className="filteritem flex space-x-2 items-center justify-center">
          <p className="CREATOR opacity-50 text-xs font-semibold tracking-wide leading-none text-white">
            CREATOR
          </p>
          <div className="options flex space-x-3 items-start justify-start">
            <ActionIcon variant="transparent">
              <p className=" opacity-50 text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "arrow-down-a-z"]} />
              </p>
            </ActionIcon>
            <ActionIcon variant="transparent">
              <p className=" opacity-50 text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "arrow-down-z-a"]} />
              </p>
            </ActionIcon>
          </div>
        </div>
        <div className="filteritem flex space-x-2 items-center justify-center">
          <p className="LAYOUT opacity-50 text-xs font-semibold tracking-wide leading-none text-white">
            LAYOUT
          </p>
          <div className="options flex space-x-3 items-start justify-start">
            <ActionIcon
              variant="transparent"
              onClick={() => handleDetailedView()}
            >
              <p className=" text-2xl tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "border-all"]} />
              </p>
            </ActionIcon>
            <ActionIcon variant="transparent" onClick={() => handleArtView()}>
              <p className=" opacity-50 text-2xl font-solid tracking-wider leading-9 text-white">
                <FontAwesomeIcon icon={["fas", "grip"]} />
              </p>
            </ActionIcon>
          </div>
        </div>
        <div className="searchbar flex space-x-2.5 items-center justify-start w-1/4 px-4 py-2.5 bg-gray-800 border rounded-full border-gray-600">
          <p className=" text-sm text-blue-300">
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
          </p>
          <p className="Searchcollection... opacity-50 text-sm tracking-wider leading-tight text-white">
            Search collection...
          </p>
        </div>
      </div>
    </div>
  );
}
