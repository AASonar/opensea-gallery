import * as React from "react";

import { Grid } from "@mui/material";

import { useEffect, useState, useContext } from "react";
import { NFTContext } from "../contexts/NFTContext";
import NFTCard from "./nftCard";
import { NFTCardDetails } from "../types/nftCardType";
import { TezosNFTContext } from "../contexts/TezosNFTContext";

export default function NftCards() {
  const { nftCardsData, setNftCardsData } = useContext(NFTContext);
  const { tezosNftCardsData, setTezosNftCardsData } =
    useContext(TezosNFTContext);

  useEffect(() => {
    // FetchTokenIdMetadata("0xed5af388653567af2f388e6224dc7c4b3241c544", "1833");
  }, []);

  return (
    <Grid container spacing={3}>
      {nftCardsData?.map((params, i) => (
        <Grid item key={i} xs={3}>
          <NFTCard {...params} />
        </Grid>
      ))}
    </Grid>
  );
}
