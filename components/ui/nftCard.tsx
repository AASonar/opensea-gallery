import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea, Grow } from "@mui/material";
import getWebMetadata from "../axios/getWebMetadata";
import { useEffect, useState } from "react";
import { TezosNFTDetails } from "../types/tezos/tezosNFTType";
import { NFTDataType } from "../types/nftType";

interface NFTDataTypeProps extends NFTDataType {
  timeout: number;
}

export default function NFTCard({
  external_data: { image, image_512, description, name },
  original_owner,
  owner,
  token_balance,
  token_id,
  timeout,
}: NFTDataTypeProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, timeout);
  }, []);

  return (
    <div>
      {isImageLoaded && (
        <Grow in={true}>
          <Card sx={{ maxWidth: 512, maxLength: 512 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="512"
                alt={name}
                placeholder="blur"
                image={image_512 ?? image}
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
        </Grow>
      )}
    </div>
  );
}
