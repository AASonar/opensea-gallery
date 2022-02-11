import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import FetchNFTs from "../moralisAPI";
import { useEffect, useState, useContext } from "react";
import { NFTCardDetails, NFTCardType } from "../types/nftCardType";
import FetchTokenIdMetadata from "../moralisAPI/fetchTokenIdMetadata";
import { AddressContext } from "../contexts/AddressContext";
import { NFTContext } from "../contexts/NFTContext";
import getWebMetadata from "../axios/getWebMetadata";
import NFTCard from "./nftCard";

export default function ActionAreaCard() {
  const { address, setAddress, network, setNetwork } =
    useContext(AddressContext);

  const { nftCards, setNftCards } = useContext(NFTContext);

  const [nftMetaImage, setNftMetaImage] = useState();

  useEffect(() => {
    // FetchTokenIdMetadata("0xed5af388653567af2f388e6224dc7c4b3241c544", "1833");
  }, []);

  return (
    <Grid container spacing={3}>
      {nftCards?.map((params, i) => (
        <Grid item key={params.block_number} xs={3}>
          <NFTCard {...params} />
        </Grid>
      ))}
    </Grid>
  );
}
