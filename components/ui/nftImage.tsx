import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface NftImageProps extends ImageProps {
  placeholderImg?: string;
}

export default function NftImage({
  placeholderImg = "/placeholder_coin.png",
  onError,
  src,
  alt,
  ...props
}: NftImageProps) {
  const [finalSrc, setFinalSrc] = useState(src);
  return (
    <Image
      alt={alt || ""}
      {...props}
      src={finalSrc}
      onError={(e) => {
        if (onError) {
          onError(e);
        }
        setFinalSrc(placeholderImg);
      }}
    />
  );
}
