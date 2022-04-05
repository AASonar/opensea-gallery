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

  function HoverElement() {
    return (
      <div className="nftart item flex-1 h-full bg-gray-900 bg-opacity-75 w-full absolute top-0 left-0 hidden group-hover:block">
        <div className="overlay inline-flex flex-col space-y-2.5 items-end justify-between w-full h-full p-6">
          <div className="saveicon inline-flex items-end justify-end">
            <Bookmark />
          </div>
          <div className="texts flex flex-col space-y-2.5 items-start justify-end w-full">
            <Header4>{name}</Header4>
            <div className="tracking-wide w-24 ">
              <Subheader2>{original_owner}</Subheader2>
            </div>

            {nftPrice && (
              <div className="price inline-flex space-x-2.5 items-center justify-end">
                <div className="amount flex space-x-1 items-start justify-start">
                  <Image
                    className="w-6 h-6"
                    src="ethereum-1.svg"
                    alt="Crypto Symbol"
                  />
                  <div className="tracking-wider leading-relaxed">
                    <Header5>
                      {convertDecimals(
                        +nftPrice?.value ?? 0,
                        contract_decimals,
                        4
                      )}
                    </Header5>
                  </div>
                </div>
                <div className="tracking-wider leading-relaxed">
                  <Header5>
                    {convertBalance(nftPrice?.value_quote ?? 0)}
                  </Header5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex-1 h-full relative">
      <Image
        className="w-full h-full rounded"
        alt={name}
        src={image_512}
        onError={handleImageError}
      />
      <HoverElement />
    </div>
  );
}
