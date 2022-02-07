export interface NFTCardDetails {
  name: string;
  symbol: string;
  block_number: string;
  metadata?: string;
  token_uri?: string;
}

export type NFTCardType = NFTCardDetails[];
