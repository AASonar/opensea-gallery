import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

interface UserProps {
  key: number;
  UserID: number;
}

export default function UpdateUserDialog({ key, UserID }: UserProps) {
  const [open, setOpen] = useState(false);

  const filter = useFilter((query) => query.eq("user_id", UserID));
  const [{ count, data, error, fetching }, reexecute] = useSelect("user", {
    filter,
  });

  const userData = data && data[0];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      {userData && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Edit User</DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>
              <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue={userData.username}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue={userData.email}
              />
              <TextField
                required
                id="outlined-required"
                label="Descriptionn"
                defaultValue={userData.description}
              />
            </Grid>
            {/* <DialogContentText id="alert-dialog-description">
            </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
