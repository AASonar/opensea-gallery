import { useFilter, useUpdate } from "react-supabase";
import { UserType } from "../type/userType";
import { createClient } from "@supabase/supabase-js";

export const UpdateUserByID = (user: UserType) => {
  const supabaseUrl = "https://wckwmmvmxkaspwquoaqf.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey ?? "");
  //   const [{ count, data, error, fetching }, execute] = useUpdate("user");

  const userFields = {
    user_id: user.user_id,
    username: user.username,
    email: user.email,
    photo_url: user.photo_url,
    cover_photo_url: user.cover_photo_url,
    description: user.description,
    twitter_handle: user.twitter_handle,
    instagram_handle: user.instagram_handle,
    website_url: user.website_url,
    created_at: user.created_at,
    updated_at: user.updated_at,
    created_by: user.created_by,
    updated_by: user.updated_by,
  };

  async function updateUsers(userData: UserType) {
    const { data, error } = await supabase
      .from("user")
      .update(userData)
      .eq("user_id", userData.user_id);
  }
  updateUsers(userFields);
};
