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
    if (nftBaseData) {
      setNftItemsData!(
        nftBaseData?.items.filter((item) => item.type === "nft")
      );
    }
  }, [nftBaseData]);

  return (
    <Grid container spacing={1}>
      {(nftItemsData ?? []).map((item) =>
        item.nft_data?.map((params, i) => (
          <Grid item key={i} xs={3}>
            <NFTCard
              {...params}
              timeout={i * 200}
              contract_address={item.contract_address}
            />
          </Grid>
        ))
      )}
      {(tezosNftCardsData ?? []).map((params, i) => (
        <Grid item key={i} xs={3}>
          <TezosNFTCard {...params} timeout={i * 300} gateway={i} />
        </Grid>
      ))}
    </Grid>
  );
}
