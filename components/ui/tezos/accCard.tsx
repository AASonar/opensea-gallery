import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grow, ListItemText } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { List } from "@mui/material";

export default function AccCard() {
  useEffect(() => {
    //TODO: change region to dynamic
  }, []);

  return (
    <Grow in={true}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image="ipfs://QmNm9Rs6UJT8xU2KaHqTUEVoqK7cwAovThe5pFotVFrAwK"
            alt="player card picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pag Man
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <List>
                <ListItemText>🧭 Region</ListItemText>
                <ListItemText>🌯 Account Level:</ListItemText>
                <ListItemText>👑 Rank:</ListItemText>
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
