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
import { ActionIcon, Card, Image, Space, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bookmark from "../textstyles/bookmark";

interface NFTDataTypeProps extends NFTDataType {
  contract_address: string;
  contract_decimals: number;
  chain_id: string;
}

export default function NftDetailedViewCard({
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
  const [nftPrice, setNftPrice] = useState<NFTTransaction>();

  useEffect(() => {
    // FetchTokenPrice(chain_id, contract_address, token_id).then((i) =>
    //   setNftPrice(i)
    // );
  }, [chain_id, contract_address, token_id]);

  function handleClick(contract_address: string, token_id: string) {
    window.open(`https://opensea.io/assets/${contract_address}/${token_id}`);
  }

  const handleImageError = (e: any) => {
    e.target.onerror = null;
    e.target.src = image ? image : "/no_image_ph.jpg";
  };

  return (
    <Card
      shadow="sm"
      p="lg"
      className="inline-flex flex-col space-y-2 items-start justify-start w-full h-full p-2 bg-lightPurple border-lightPurpleOutline border rounded"
    >
      <Image
        className="w-full flex-1 rounded"
        alt={name}
        src={image_512}
        onError={handleImageError}
      />

      <div className="saveicon inline-flex w-full flex-col justify-end ">
        <div className="inline-flex text-lg font-bold justify-between leading-relaxed ">
          <Header4>{name}</Header4>
          <div className="saveicon items-end justify-end ">
            <Bookmark />
          </div>
        </div>
      </div>
      <div className="tracking-wide w-24 ">
        <Subheader2>{original_owner}</Subheader2>
      </div>
      <div className="flex flex-col items-end justify-end w-full">
        {nftPrice && (
          <div className="inline-flex space-x-2.5 items-center justify-end">
            <div className="flex space-x-1 items-start justify-start">
              <Image
                className="w-6 h-6"
                src="ethereum-1.svg"
                alt="Crypto Symbol"
              />
              <div className="tracking-wider leading-relaxed">
                <Header5>
                  {convertDecimals(+nftPrice?.value ?? 0, contract_decimals, 4)}
                </Header5>
              </div>
            </div>
            <div className="tracking-wider leading-relaxed">
              <Header5>{convertBalance(nftPrice?.value_quote ?? 0)}</Header5>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
