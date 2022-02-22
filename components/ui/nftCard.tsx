import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea } from "@mui/material";
import getWebMetadata from "../axios/getWebMetadata";
import { useEffect, useState } from "react";
import { TezosNFTDetails } from "../types/tezos/tezosNFTType";
import { NFTDataDetails, NFTDataType } from "../types/nftType";

export default function NFTCard({
  external_data: { image, image_512, description, name },
  original_owner,
  owner,
  token_balance,
  token_id,
}: NFTDataDetails) {
  useEffect(() => {}, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="512"
          alt={name}
          placeholder="blur"
          image={image_512}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} ({token_id})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Creator: {original_owner}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
