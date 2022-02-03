export interface NFTCardDetails {
  name: string;
  symbol: string;
  block_number: string;
  metadata?: string;
}

export type NFTCardType = NFTCardDetails[];
