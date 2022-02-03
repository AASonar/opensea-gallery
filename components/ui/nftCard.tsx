import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FetchNFTs from "../moralisAPI";
import { useEffect, useState } from "react";
import { NFTCardDetails, NFTCardType } from "../types/nftCardType";

export default function ActionAreaCard() {
  const [nftCards, setNftCards] = useState<NFTCardType>();

  useEffect(() => {
    FetchNFTs("0x4bcbc28e18b8c983ca730d86a67bbeb8aa767e7a", "eth").then(
      (nftDetails: any) => {
        console.log(nftDetails);
        setNftCards(nftDetails);
      }
    );
  }, []);

  return (
    <div>
      {nftCards?.map(({ block_number, name, symbol, metadata }) => (
        <Card key={block_number} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={metadata && JSON.parse(metadata).image}
              alt={metadata && JSON.stringify(JSON.parse(metadata).image)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name} ({symbol})
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {metadata && JSON.stringify(JSON.parse(metadata).description)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
