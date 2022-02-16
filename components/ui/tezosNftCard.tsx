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
  gateway: number;
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
  gateway,
}: TezosNFTCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, timeout);
  }, []);

  const ipfsDomains = [
    "ipfs.io",
    "gateway.ipfs.io",
    "ipfs.eth.aragon.network",
    "hub.textile.io",
  ];

  const regex = /^ipfs:\/\//;
  const url = metadata?.displayUri?.replace(regex, "");
  //const imageUrl = `https://${ipfsDomains[gateway]}/ipfs/${url}`;

  const imageUrl = `https://gateway.ipfs.io/ipfs/${url}`;

  //const imageUrl = `https://${ipfsDomains[1]}/ipfs/${url}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {isImageLoaded && (
          <CardMedia
            component="img"
            height="400"
            image={metadata?.displayUri && imageUrl}
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
