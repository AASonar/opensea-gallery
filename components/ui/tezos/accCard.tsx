import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grow, ListItemText } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { List } from "@mui/material";
import { AddressContext } from "../../contexts/AddressContext";
import FetchAccount from "../../tzktAPI/fetchAccount";
import { TezosAccountType } from "../../types/tezos/tezosAccountType";

export default function AccCard() {
  const { address, setAddress } = useContext(AddressContext);

  const [accDetails, setAccDetails] = useState<TezosAccountType>();

  useEffect(() => {
    //TODO: change region to dynamic
    if (address) {
      FetchAccount(address, true).then((details: any) => {
        setAccDetails(details);
      });
    }
  }, []);

  // const { alias, balance, tokenBalancesCount, lastActivityTime } = accDetails;

  function handleClick(profileID: string) {
    window.open(`https://objkt.com/profile/${profileID}`);
  }

  return (
    <Grow in={true}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea
          onClick={() => {
            accDetails && handleClick(accDetails?.address);
          }}
        >
          <CardMedia
            component="img"
            height="500"
            image="ipfs://QmNm9Rs6UJT8xU2KaHqTUEVoqK7cwAovThe5pFotVFrAwK"
            alt="player card picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {accDetails?.alias}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <List>
                <ListItemText>
                  🧭 Total NFTs: {accDetails?.tokenBalancesCount}
                </ListItemText>
                <ListItemText>🌯 Balance: {accDetails?.balance}</ListItemText>
                <ListItemText>
                  👑 Last Activity:{accDetails?.lastActivityTime}
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
