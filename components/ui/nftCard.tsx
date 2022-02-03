import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import FetchNFTs from "../moralisAPI";
import { useEffect, useState } from "react";
import { NFTCardDetails, NFTCardType } from "../types/nftCardType";
import FetchTokenIdMetadata from "../moralisAPI/fetchTokenIdMetadata";

export default function ActionAreaCard() {
  const [nftCards, setNftCards] = useState<NFTCardType>();

  useEffect(() => {
    FetchNFTs("0x4bcbc28e18b8c983ca730d86a67bbeb8aa767e7a", "eth").then(
      (nftDetails: any) => {
        console.log(nftDetails);
        setNftCards(nftDetails);
      }
    );

    FetchTokenIdMetadata("0xed5af388653567af2f388e6224dc7c4b3241c544", "1833");
  }, []);

  return (
    <Grid container spacing={4}>
      {nftCards?.map(({ block_number, name, symbol, metadata }) => (
        <Grid key={block_number} item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={metadata && JSON.parse(metadata).image}
                alt={metadata && JSON.stringify(JSON.parse(metadata).image)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name ?? (metadata && JSON.parse(metadata).name)} (
                  {symbol && symbol})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {metadata && JSON.stringify(JSON.parse(metadata).description)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
