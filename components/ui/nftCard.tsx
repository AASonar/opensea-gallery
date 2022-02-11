import { NFTCardDetails } from "../types/nftCardType";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea } from "@mui/material";
import getWebMetadata from "../axios/getWebMetadata";
import { useEffect, useState } from "react";
interface NFTCardProps extends NFTCardDetails {}

export default function NFTCard({
  block_number,
  name,
  symbol,
  metadata: rawMetadata,
  token_uri,
}: NFTCardProps) {
  const metadata = JSON.parse(rawMetadata ?? "{}");

  const [img, setImg] = useState<string>(metadata.image);
  useEffect(() => {
    if (!metadata.image && token_uri && rawMetadata) {
      getWebMetadata(token_uri).then((img: any) => setImg(img));
    }
  }, [token_uri, metadata.image, rawMetadata]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={img}
          alt={metadata.image}
          placeholder="blur"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name ?? metadata.name} ({symbol && symbol})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {metadata.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
