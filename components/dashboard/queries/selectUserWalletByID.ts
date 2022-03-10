import { useFilter, useSelect } from "react-supabase";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { supabaseClient } from "../supabase/supabaseDetails";

const SelectUserWalletByID = async (user_id: number) => {
  let { data: user, error } = await supabaseClient.from("user").select(`
    user_id,
    wallet (
      *
    )
  `);

  return user && user[0].wallet;

  // const filter = useFilter((query) =>
  //   query
  //     .select(
  //       `
  //     user_id,
  //     wallet (
  //       *
  //     )
  //   `
  //     )
  //     .eq("user_id", user_id)
  // );
  // const [{ count, data, error, fetching }, reexecute] = useSelect("user", {
  //   filter,
  // });

  // return data && data[0].wallet;
};

export default SelectUserWalletByID;
