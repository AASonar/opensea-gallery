import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { useFilter, useRealtime, useSelect } from "react-supabase";
import { SelectAllUsers } from "./queries/selectAllUsers";
import UpdateUserDialog from "./UpdateUserDialog";

export default function DbUsers() {
  const columns = ["User ID", "Username", "Email", "Description", "Actions"];
  const [{ data, error, fetching }, reexecute] = useRealtime("user");

  const dataTable =
    data &&
    data.map((user) => [
      user.user_id,
      user.username,
      user.email,
      user.description,
      <UpdateUserDialog key={user.user_id} userData={user} />,
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
