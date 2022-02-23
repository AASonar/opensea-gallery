import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grow, ListItemText } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { List } from "@mui/material";
import { NFTBaseContext } from "../contexts/NFTContext";

export default function AccCard() {
  const {
    nftBaseData,
    setNftBaseData,
    nftItemsData,
    setNftItemsData,
    nftData,
    setNftData,
  } = useContext(NFTBaseContext);

  useEffect(() => {
    //TODO: change region to dynamics
  }, []);

  //const { alias, balance, tokenBalancesCount, lastActivityTime } = accDetails;

  function handleClick(profileID: string) {
    window.open(`https://opensea.io/${profileID}`);
  }

  return (
    <Grow in={true}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea
          onClick={() => {
            nftBaseData && handleClick(nftBaseData?.address);
          }}
        >
          <CardMedia
            component="img"
            height="512"
            image="ipfs://QmNm9Rs6UJT8xU2KaHqTUEVoqK7cwAovThe5pFotVFrAwK"
            alt="player card picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nftBaseData?.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <List>
                <ListItemText>
                  🧭 Total NFTs: {nftItemsData?.length}
                </ListItemText>
                <ListItemText>🌯 Balance: {}</ListItemText>
                <ListItemText>
                  👑 Last Activity:{nftBaseData?.updated_at}
                </ListItemText>
                <ListItemText>
                  🔢 Elo: (<Typography display="inline">Nice</Typography>)
                </ListItemText>
              </List>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}
