import MUIDataTable from "mui-datatables";
import { useFilter, useSelect } from "react-supabase";
import UpdateUserDialog from "./UpdateUserDialog";

export default function DbUsers() {
  const columns = ["User ID", "Username", "Email", "Description", "Actions"];

  const [{ count, data, error, fetching }, reexecute] = useSelect("user");

  const dataTable =
    data &&
    data.map((user) => [
      user.user_id,
      user.username,
      user.email,
      user.description,
      <UpdateUserDialog key={user.user_id} UserID={user.user_id} />,
    ]);
  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    selectableRows: true,
  };

  if (error) return <div>{error.message}</div>;
  if (fetching) return <div>Loading users</div>;
  if (data?.length === 0) return <div>No users</div>;

  return (
    <MUIDataTable
      title={"User List"}
      data={dataTable ?? []}
      columns={columns}
    />
  );
}
