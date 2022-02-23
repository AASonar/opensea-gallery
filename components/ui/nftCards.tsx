import * as React from "react";

import { Grid } from "@mui/material";

import { useEffect, useState, useContext } from "react";
import { NFTBaseContext } from "../contexts/NFTContext";
import NFTCard from "./nftCard";
import { TezosNFTContext } from "../contexts/TezosNFTContext";
import TezosNFTCard from "./tezosNftCard";
import { NFTDataType, NFTItemsType } from "../types/nftType";

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

  useEffect(() => {
    const nft_items: NFTItemsType[] = [];
    const nft_array: NFTDataType[] = [];

    if (nftBaseData) {
      nftBaseData?.items.map((item) => {
        if (item.type === "nft") {
          nft_items?.push(item);

          item?.nft_data?.map((nft_data) => {
            nft_array?.push(nft_data);
          });
        }
      });
      setNftItemsData!(nft_items);
      setNftData!(nft_array);
    }
  }, [nftBaseData]);

  return (
    <Grid container spacing={3}>
      {(nftData ?? []).map((params, i) => (
        <Grid item key={i} xs={2}>
          <NFTCard {...params} />
        </Grid>
      ))}
      {(tezosNftCardsData ?? []).map((params, i) => (
        <Grid item key={i} xs={3}>
          <TezosNFTCard {...params} timeout={i * 300} gateway={i} />
        </Grid>
      ))}
    </Grid>
  );
}
