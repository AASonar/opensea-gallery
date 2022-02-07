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

export default function ActionAreaCard() {
  const { address, setAddress, network, setNetwork } =
    useContext(AddressContext);

  const { nftCards, setNftCards } = useContext(NFTContext);

  useEffect(() => {
    // FetchTokenIdMetadata("0xed5af388653567af2f388e6224dc7c4b3241c544", "1833");
  }, []);

  return (
    <Grid container spacing={4}>
      {nftCards?.map(({ block_number, name, symbol, metadata, token_uri }) => (
        <Grid key={block_number} item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={metadata ? JSON.parse(metadata).image : null}
                alt={metadata && JSON.stringify(JSON.parse(metadata).image)}
                placeholder="blur"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name ?? (metadata && JSON.parse(metadata).name)} (
                  {symbol && symbol})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {metadata && JSON.stringify(JSON.parse(metadata).description)}
                  {token_uri && JSON.stringify(getWebMetadata(token_uri))}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
