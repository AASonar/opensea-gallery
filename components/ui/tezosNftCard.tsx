import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea, Grow } from "@mui/material";
import getWebMetadata from "../axios/getWebMetadata";
import { useEffect, useState } from "react";
import { TezosNFTDetails } from "../types/tezos/tezosNFTType";
import { NFTCardDetails } from "../types/nftCardType";
import getMarketLink, { MarketLinkProps } from "../utils/getMarketLink";
import GetCreatorAlias from "../utils/getCreatorAlias";

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
    tokenId,
  },
  lastTime,

  timeout,
  gateway,
}: TezosNFTCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [tezosCreator, setTezosCreator] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
      if (metadata?.creators) {
        GetCreatorAlias(metadata?.creators[0]).then((deets: any) => {
          setTezosCreator(deets);
        });
      }
    }, timeout);
  }, []);

  const ipfsGateways = [
    "ipfs.io",
    "gateway.ipfs.io",
    "ipfs.fleek.co",
    "ipfs.eth.aragon.network",
  ];

  const regex = /^ipfs:\/\//;
  const url = metadata?.displayUri?.replace(regex, "");
  const imageUrl = `https://${
    ipfsGateways[gateway % ipfsGateways.length]
  }/ipfs/${url}`;

  function handleClick({ address, alias, tokenId }: MarketLinkProps) {
    window.open(getMarketLink({ address, alias, tokenId }));
  }

  return (
    <div>
      {isImageLoaded && (
        <Grow in={true}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
              onClick={() => {
                address && handleClick({ address, alias, tokenId });
              }}
            >
              {
                <CardMedia
                  component="img"
                  height="400"
                  image={metadata?.displayUri && imageUrl}
                  alt={metadata?.name}
                  placeholder="blur"
                />
              }
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {metadata?.name} -- ({balance})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tezosCreator}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      )}
    </div>
  );
}
