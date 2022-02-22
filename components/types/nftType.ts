type AttributeType = {
  trait_type: string;
  value: string;
};

export interface ExternalNFTDataType {
  animation_url: string;
  attributes?: AttributeType;
  description?: string;
  image: string;
  image_256: string;
  image_512: string;
  image_1024: string;
  name: string;
}

export interface NFTDataType {
  external_data: ExternalNFTDataType;
  original_owner: string;
  owner?: string;
  token_balance: string;
  supported_erc?: string[];
  token_id: string;
}

export interface NFTItemsType {
  balance: string;
  contract_address: string;
  contract_decimals: number;
  contract_name?: string;
  contract_ticker_symbol?: string;
  last_transfered_at: string;
  logo_url: string;
  nft_data?: NFTDataType[];
  quote_rate: number;
  supports_erc?: string[];
  type: string;
}

export interface NFTBaseType {
  address: string;
  chain_id: number;
  items: NFTItemsType[];
  next_update_at: string;
  pagination?: number;
  quote_currency: string;
  updated_at: string;
}
