import * as React from "react";
import { NFTDataType } from "../types/nftType";
import { useEffect, useState } from "react";
import Chip2 from "./chip2";
import Header4 from "./textstyles/header4";
import Header5 from "./textstyles/header5";
import Subheader2 from "./textstyles/subheader2";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardActionArea, Grow } from "@mui/material";

interface NFTDataTypeProps extends NFTDataType {
  timeout: number;
  contract_address: string;
}

export default function NftArtCard({
  external_data: { image, image_512, description, name },
  original_owner,
  owner,
  token_balance,
  token_id,
  timeout,
  contract_address,
}: NFTDataTypeProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, timeout);
  }, [timeout]);

  function handleClick(contract_address: string, token_id: string) {
    window.open(`https://opensea.io/assets/${contract_address}/${token_id}`);
  }

  const handleImageError = (e: any) => {
    e.target.onerror = null;
    // e.target.style.display = 'none'
    e.target.src = image ? image : "/no_image_ph.jpg";
  };

  return (
    <div className="inline-flex flex-col space-y-2 items-start justify-start w-full h-full p-2 bg-gray-700 border rounded border-gray-600">
      {/* <CardActionArea
        onClick={() => {
          handleClick(contract_address, token_id);
        }}
      ></CardActionArea> */}
      <CardMedia
        component="img"
        className="w-full flex-1 rounded"
        alt={name}
        src={image_512}
        onError={handleImageError}
      />

      <div className="inline-flex space-x-1 items-start justify-end w-full">
        <div className="flex-1">
          <Header4>{name}</Header4>
        </div>
        <div className="flex">
          <Chip2>Platform</Chip2>
        </div>
      </div>
      <div className="tracking-wide w-20 truncate">
        <Subheader2>{original_owner}</Subheader2>
      </div>
      <div className="flex flex-col items-end justify-end w-full">
        <div className="inline-flex space-x-2.5 items-center justify-end">
          <div className="flex space-x-1 items-start justify-start">
            <img
              className="w-6 h-6"
              src="https://via.placeholder.com/24x24"
              alt="Crypto Symbol"
            />
            <div className="tracking-wider leading-relaxed">
              <Header5>0.31</Header5>
            </div>
          </div>
          <div className="tracking-wider leading-relaxed">
            <Header5>$3000</Header5>
          </div>
        </div>
      </div>
    </div>
  );
}
