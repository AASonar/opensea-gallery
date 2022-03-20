import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grow, ListItemText } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { List } from "@mui/material";
import { NFTBaseContext } from "../../contexts/NFTContext";
import { NFTItemsType } from "../../types/nftType";
import NftImage from "../nftImage";
import { useSelect } from "react-supabase";
import convertBalance from "../../utils/convertBalance";

export default function AccCard() {
  const {
    nftBaseData,
    setNftBaseData,
    nftItemsData,
    setNftItemsData,
    nftData,
    setNftData,
  } = useContext(NFTBaseContext);

  const [nftBalance, setNftBalance] = useState<NFTItemsType[]>();
  const [currencyImage, setCurrecyImage] = useState();

  useEffect(() => {
    setNftBalance!(
      nftBaseData?.items.filter(
        (item) => item.type === "cryptocurrency" || item.type === "stablecoin"
      )
    );
    //TODO: change region to dynamics
  }, [nftBaseData]);

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
                  🧭 Total NFTs: {nftItemsData?.length ?? 0}
                </ListItemText>
                <ListItemText>
                  🌯 Total Balance Worth:{" "}
                  {convertBalance(
                    (nftBalance ?? [])
                      .map((item) => item.quote)
                      .reduce((prev, next) => prev + next, 0)
                  )}
                </ListItemText>
                <ListItemText>
                  💰 Cryptocurrencies:
                  <ListItemText>
                    {(nftBalance ?? []).map((c, i) => {
                      return (
                        <ListItemText key={i}>
                          {
                            <NftImage
                              src={`/api/imagefetcher?url=${encodeURIComponent(
                                c.logo_url
                              )}`}
                              width={15}
                              height={15}
                              placeholderImg="/placeholder_coin.png"
                            />
                          }

                          {` ${c.contract_ticker_symbol}: 
                          ${(+c.balance / 10 ** c.contract_decimals).toFixed(
                            4
                          )}`}
                        </ListItemText>
                      );
                    })}
                  </ListItemText>
                </ListItemText>
                <ListItemText>
                  👑 Last Activity: {nftBaseData?.updated_at ?? "---"}
                </ListItemText>
              </List>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}
