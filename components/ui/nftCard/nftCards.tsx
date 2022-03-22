import * as React from "react";

import { SimpleGrid } from "@mantine/core";

import { useEffect, useState, useContext } from "react";
import { NFTBaseContext } from "../../contexts/NFTContext";

import { TezosNFTContext } from "../../contexts/TezosNFTContext";
import TezosNFTCard from "./tezosNftCard";
import { NFTDataType, NFTItemsType } from "../../types/nftType";
import NftArtCard from "./nftArtCard";

export default function NftCards() {
  const {
    nftBaseData,
    setNftBaseData,
    nftItemsData,
    setNftItemsData,
    nftData,
    setNftData,
  } = useContext(NFTBaseContext);
  const { tezosNftCardsData, setTezosNftCardsData } =
    useContext(TezosNFTContext);

  //nice
  useEffect(() => {
    if (nftBaseData) {
      setNftItemsData!(
        nftBaseData?.items.filter((item) => item.type === "nft")
      );
    }
  }, [nftBaseData]);

  return (
    <SimpleGrid cols={3} spacing="sm">
      {(nftItemsData ?? []).map((item) =>
        item.nft_data?.map((params, i) => (
          <div key={i}>
            {/* <NFTCard
              {...params}
              timeout={i * 200}
              contract_address={item.contract_address}
            /> */}
            {/* <NftCardV2
              {...params}
              timeout={i * 200}
              contract_address={item.contract_address}
            /> */}
            <NftArtCard
              {...params}
              timeout={i * 200}
              contract_address={item.contract_address}
              contract_decimals={item.contract_decimals}
              chain_id={JSON.stringify(nftBaseData?.chain_id)}
            />
          </div>
        ))
      )}

      {/* {(tezosNftCardsData ?? []).map((params, i) => (
        <div key={i}>
          <TezosNFTCard {...params} timeout={i * 300} gateway={i} />
        </div>
      ))} */}
    </SimpleGrid>
  );
}
