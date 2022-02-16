import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea } from "@mui/material";
import getWebMetadata from "../axios/getWebMetadata";
import { useEffect, useState } from "react";
import { TezosNFTDetails } from "../types/tezos/tezosNFTType";
import { NFTCardDetails } from "../types/nftCardType";

interface TezosNFTCardProps extends TezosNFTDetails {
  timeout: number;
}
export default function TezosNFTCard({
  balance,
  transfersCount,
  token: {
    id,
    contract: { alias, address },
    metadata,
  },
  lastTime,
  timeout,
}: TezosNFTCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, timeout);
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {isImageLoaded && (
          <CardMedia
            component="img"
            height="400"
            image={metadata?.thumbnailUri && metadata?.thumbnailUri}
            alt={metadata?.name}
            placeholder="blur"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {metadata?.name} -- ({balance})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {metadata?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
