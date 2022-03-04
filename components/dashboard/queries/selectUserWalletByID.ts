import { useFilter, useSelect } from "react-supabase";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const SelectUserWalletByID = (UserID: number) => {
  const filter = useFilter((query) =>
    query
      .select(
        `
      user_id,
      wallet (
        address,
        chain_id
      )
    `
      )
      .eq("user_id", UserID)
  );
  const [{ count, data, error, fetching }, reexecute] = useSelect("user", {
    filter,
  });

  return data && data[0];
};

export default SelectUserWalletByID;
