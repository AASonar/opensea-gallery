import * as React from "react";
import { NFTDataType } from "../../types/nftType";
import { useEffect, useState } from "react";
import Chip2 from "../textstyles/chip2";
import Header4 from "../textstyles/header4";
import Header5 from "../textstyles/header5";
import Subheader2 from "../textstyles/subheader2";

import FetchTokenPrice from "../../covalentAPI/fetchTokenPrice";
import { NFTTransaction } from "../../types/nftTransaction";
import convertBalance from "../../utils/convertBalance";
import convertDecimals from "../../utils/convertDecimals";
import { Card, Image, Text } from "@mantine/core";

interface NFTDataTypeProps extends NFTDataType {
  contract_address: string;
  contract_decimals: number;
  chain_id: string;
}

export default function NftArtViewCard({
  external_data: { image, image_512, description, name },
  original_owner,
  owner,
  token_balance,
  token_id,
  contract_address,
  contract_decimals,
  chain_id,
}: NFTDataTypeProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {}, []);

  function handleClick(contract_address: string, token_id: string) {
    window.open(`https://opensea.io/assets/${contract_address}/${token_id}`);
  }

  const handleImageError = (e: any) => {
    e.target.onerror = null;
    e.target.src = image ? image : "/no_image_ph.jpg";
  };

  return (
    <Image
      className="w-full h-full rounded"
      alt={name}
      src={image_512}
      onError={handleImageError}
    />
  );
}
