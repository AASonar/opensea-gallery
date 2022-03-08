import { useSelect } from "react-supabase";

export function SelectAllUsers() {
  const [{ count, data, error, fetching }, reexecute] = useSelect("user");
  return data;
}
