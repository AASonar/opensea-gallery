import { supabaseClient } from "../supabase/supabaseDetails";
import { User } from "../type/user";
import { UserWallet } from "../type/userWallet";

export const UpdateUserWallet = (params: UserWallet) => {
  //   const [{ count, data, error, fetching }, execute] = useUpdate("user");

  const fields = {
    user_id: params.user_id,
    wallet_id: params.wallet_id,
    created_at: params.created_at,
    updated_at: params.updated_at,
    created_by: params.created_by,
    updated_by: params.updated_by,
  };

  async function updateUserWallets(userWalletData: UserWallet) {
    const { data, error } = await supabaseClient
      .from("user_wallet")
      .update(userWalletData)
      .eq("user_id", userWalletData.user_id)
      .eq("wallet_id", userWalletData.wallet_id);
  }
  updateUserWallets(fields);
};
