import * as React from "react";

import { Grid } from "@mui/material";

import { useEffect, useState, useContext } from "react";
import { NFTBaseContext } from "../contexts/NFTContext";
import NFTCard from "./nftCard";
import { TezosNFTContext } from "../contexts/TezosNFTContext";
import TezosNFTCard from "./tezosNftCard";

export default function NftCards() {
  const { nftBaseData, setNftBaseData } = useContext(NFTBaseContext);
  const { tezosNftCardsData, setTezosNftCardsData } =
    useContext(TezosNFTContext);

  useEffect(() => {
    // FetchTokenIdMetadata("0xed5af388653567af2f388e6224dc7c4b3241c544", "1833");
  }, []);

  return (
    <Grid container spacing={3}>
      {(nftBaseData ?? []).map((params, i) => (
        <Grid item key={i} xs={3}>
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
