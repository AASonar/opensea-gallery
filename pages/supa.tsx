import { NextPage } from "next";
import { useSelect } from "react-supabase";

const Supa: NextPage = () => {
  const [{ count, data, error, fetching }, reexecute] = useSelect("user");

  if (error) return <div>{error.message}</div>;
  if (fetching) return <div>Loading users</div>;
  if (data?.length === 0) return <div>No users</div>;

  return (
    <ul>
      {data &&
        data.map((user) => (
          <li key={user.user_id}>
            {user.username} - {user.email}
          </li>
        ))}
    </ul>
  );
};

export default Supa;
