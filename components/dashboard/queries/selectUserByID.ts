import { useFilter, useSelect } from "react-supabase";

function SelectUserByID(UserID: number) {
  const filter = useFilter((query) => query.eq("user_id", UserID));
  const [{ count, data, error, fetching }, reexecute] = useSelect("user", {
    filter,
  });

  const userData = data && data[0];

  return { userData, reexecute };
}

export default SelectUserByID;
