import { useFilter, useUpdate } from "react-supabase";
import { UserType } from "../type/userType";

const UpdateUserByID = (user: UserType) => {
  const [{ count, data, error, fetching }, execute] = useUpdate("users");

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

  return async function updateUsers() {
    const { count, data, error } = await execute(userFields, (query) =>
      query.eq("user_id", user.user_id)
    );
  };
};
