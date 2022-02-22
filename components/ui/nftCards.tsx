import * as React from "react";

import { Grid } from "@mui/material";

import { useEffect, useState, useContext } from "react";
import { NFTBaseContext } from "../contexts/NFTContext";
import NFTCard from "./nftCard";
import { TezosNFTContext } from "../contexts/TezosNFTContext";
import TezosNFTCard from "./tezosNftCard";
import { NFTDataType } from "../types/nftType";

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

  let nft_array: NFTDataType = [];

  useEffect(() => {
    if (nftBaseData) {
      nftBaseData?.items.map((item) => {
        if (item.type === "nft") {
          setNftItemsData!(item);
          item?.nft_data?.map((nft_data) => {
            nft_array?.push(nft_data);
          });
        }
      });
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
