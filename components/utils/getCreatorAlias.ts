import { useEffect, useState } from "react";
import { TezosAccountType } from "../types/tezos/tezosAccountType";
import FetchAccount from "../tzktAPI/fetchAccount";

const GetCreatorAlias = async (creatorAddress: string): Promise<string> => {
  const accDeets = await FetchAccount(creatorAddress, true);

  const { alias, address } = accDeets;

  if (alias) {
    console.log(alias);
    return alias;
  }

  if (address) {
    console.log(address);
    return address;
  }

  return Promise.reject(accDeets);
};

export default GetCreatorAlias;
