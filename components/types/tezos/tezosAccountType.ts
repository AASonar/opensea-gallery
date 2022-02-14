interface TezosAccountMetadata {
  kind: string;
  alias: string;
  description?: string;
  site?: string;
  support?: string;
  email?: string;
  twitter?: string;
  telegram?: string;
  discord?: string;
  reddit?: string;
  slack?: string;
  github?: string;
  gitlab?: string;
  instagram?: string;
  facebook?: string;
  medium?: string;
}

export interface TezosAccountType {
  address: string;
  alias: string;
  balance: number;
  counter: number;
  firstActivityTime: string;
  lastActivityTime: string;
  metadata: TezosAccountMetadata;
  publicKey: string;
  numTransactions: number;
  tokenBalancesCount: number;
  tokenTransfersCount: number;
}
