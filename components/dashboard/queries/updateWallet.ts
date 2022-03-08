import { supabaseClient } from "../supabase/supabaseDetails";
import { Wallet } from "../type/wallet";

export const UpdateWallet = (wallet: Wallet) => {
  //   const [{ count, data, error, fetching }, execute] = useUpdate("user");

  const walletFields = {
    wallet_id: wallet.wallet_id,
    address: wallet.address,
    chain_id: wallet.chain_id,
    created_at: wallet.created_at,
    updated_at: wallet.updated_at,
    created_by: wallet.created_by,
    updated_by: wallet.updated_by,
  };

  async function updateWallets(walletData: Wallet) {
    const { data, error } = await supabaseClient
      .from("wallet")
      .update(walletData)
      .eq("wallet_id", walletData.wallet_id);
  }
  updateWallets(walletFields);
};
