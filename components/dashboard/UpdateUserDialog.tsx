import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SelectUserByID from "./queries/selectUserByID";
import SelectUserWalletByID from "./queries/selectUserWalletByID";

interface UserProps {
  key: number;
  UserID: number;
}

export default function UpdateUserDialog({ key, UserID }: UserProps) {
  const [open, setOpen] = useState(false);
  const [chain_id, setChain_id] = useState("1");

  const userData = SelectUserByID(UserID);
  const userWalletData = SelectUserWalletByID(UserID);
  console.log(userWalletData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setChain_id!(event.target.value);
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

          <Grid container spacing={2}>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue={userData.username}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Email"
                defaultValue={userData.email}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Description"
                defaultValue={userData.description}
              />
            </Grid>
            {userWalletData?.wallet?.map((address: any) => {
              <Grid item xs={10}>
                <FormControl
                  variant="filled"
                  // sx={{ minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Network
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={chain_id}
                    onChange={handleSelectChange}
                  >
                    <MenuItem value={"1"}>ETH</MenuItem>
                    <MenuItem value={"137"}>MATIC</MenuItem>
                    <MenuItem value={"56"}>BSC</MenuItem>
                    <MenuItem value={"43114"}>AVAX</MenuItem>
                    <MenuItem value={"250"}>FTM</MenuItem>
                    <MenuItem value={"2020"}>AXIE</MenuItem>
                    <MenuItem value={"128"}>HECO</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-required"
                  label="Wallet Address"
                  defaultValue={address.address}
                />
              </Grid>;
            })}
          </Grid>
          {/* <DialogContentText id="alert-dialog-description">
            </DialogContentText> */}

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
