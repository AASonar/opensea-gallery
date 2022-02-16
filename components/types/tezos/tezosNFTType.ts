interface TezosContract {
  alias: string;
  address: string;
}

interface NFTTokenFormats {
  mimetype: string;
  uri: string;
}

interface TezosNFTTokenMetadata {
  displayUri: string;
  name: string;
  description: string;
  thumbnailUri: string;
  formats?: NFTTokenFormats[];
}

interface TezosNFTToken {
  id: number;
  contract: TezosContract;
  metadata?: TezosNFTTokenMetadata;
  standard: string;
  tokenId: string;
}

export interface TezosNFTDetails {
  balance: string;
  transfersCount: number;
  token: TezosNFTToken;
  firstTime: string;
  lastTime: string;
}

export type TezosNFTType = TezosNFTDetails[];
