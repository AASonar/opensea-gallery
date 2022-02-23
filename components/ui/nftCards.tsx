import * as React from "react";

import { Grid } from "@mui/material";

import { useEffect, useState, useContext } from "react";
import { NFTBaseContext } from "../contexts/NFTContext";
import NFTCard from "./nftCard";
import { TezosNFTContext } from "../contexts/TezosNFTContext";
import TezosNFTCard from "./tezosNftCard";
import {
  NFTDataType,
  NFTDataTypeExtended,
  NFTItemsType,
} from "../types/nftType";

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
    const nft_array: NFTDataTypeExtended[] = [];

    if (nftBaseData) {
      nftBaseData?.items.map((item) => {
        if (item.type === "nft") {
          nft_items?.push(item);

          item?.nft_data?.map((nft_data) => {
            const nft_extended = Object.assign(nft_data, {
              contract_address: item.contract_address,
            });
            nft_array?.push(nft_extended);
          });
        }
      });
      setNftItemsData!(nft_items);
      setNftData!(nft_array);
    }
  }, [nftBaseData]);

  return (
    <Grid container spacing={1}>
      {(nftData ?? []).map((params, i) => (
        <Grid item key={i} xs={3}>
          <NFTCard {...params} timeout={i * 200} />
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
