import { useEffect, useState } from "react";
import { NFTDataType } from "../types/nftType";

interface NFTDataTypeProps extends NFTDataType {
  timeout: number;
  contract_address: string;
}

export default function NftCardV2({
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
  }, []);

  function handleClick(contract_address: string, token_id: string) {
    window.open(`https://opensea.io/assets/${contract_address}/${token_id}`);
  }

  const handleImageError = (e: any) => {
    e.target.onerror = null;
    // e.target.style.display = 'none'
    e.target.src = image ? image : "/no_image_ph.jpg";
  };

  return (
    <div className="NFTArt Card inline-flex flex-col space-y-2 items-start justify-start w-full h-full p-2 bg-gray-700 border rounded border-gray-600">
      <img className="Rectangle4 w-full flex-1 rounded" src={image} />
      <div className="name inline-flex space-x-1 items-center justify-start w-1/2">
        <p className="Weirdo#9 text-lg font-bold leading-none text-white">
          {name}
        </p>
        <div className="chip2 flex items-center justify-start px-2 py-1 bg-gray-600 border rounded-full border-indigo-500">
          <p className="TOPCOLLECTOR text-xs font-semibold tracking-wide leading-none text-white">
            OpenSea
          </p>
        </div>
      </div>
      <p className="ardankuk.tez text-xs font-semibold tracking-wide leading-none text-white">
        {original_owner}
      </p>
      <div className="details flex flex-col items-end justify-end w-full h-4">
        <div className="price inline-flex space-x-2.5 items-center justify-end">
          <div className="amount flex space-x-1 items-start justify-start">
            <img
              className="480px-Ethereum-icon-purple1 w-6 h-6"
              src="https://via.placeholder.com/24x24"
            />
            <p className="0.31 text-lg font-semibold tracking-wider leading-relaxed text-white">
              0.31
            </p>
          </div>
          <p className="$8344.00 text-lg font-semibold tracking-wider leading-relaxed text-white">
            $8344.00
          </p>
        </div>
      </div>
    </div>
  );
}
