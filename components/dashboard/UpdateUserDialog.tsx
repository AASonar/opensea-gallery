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
import { User } from "./type/user";
import { UpdateUser } from "./queries/updateUser";
import { Wallet } from "./type/wallet";
import { UpdateWallet } from "./queries/updateWallet";
import { UpdateUserWallet } from "./queries/updateUserWallet";

export default function UpdateUserDialog({ userData }: any) {
  const [open, setOpen] = useState(false);
  const [chain_id, setChain_id] = useState("1");

  const [user, setUser] = useState<User>(userData);
  const walletData = SelectUserWalletByID(user.user_id);
  const [wallet, setWallet] = useState<Wallet[]>(walletData);

  const handleClickOpen = () => {
    setWallet(walletData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    UpdateUser(user);
    wallet.forEach((w) => UpdateWallet(w));
    // UpdateUserWallet();
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
      {user && wallet && (
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
                value={user?.username}
                onChange={(val) =>
                  setUser({ ...user, username: val.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Email"
                value={user?.email}
                onChange={(val) =>
                  setUser({ ...user, email: val.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Description"
                value={user?.description}
                onChange={(val) =>
                  setUser({ ...user, description: val.target.value })
                }
              />
            </Grid>
            {wallet?.map((address: any, i: number) => (
              //wrap in component
              <Grid key={i} item xs={10}>
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
                  sx={{ width: "48ch" }}
                  id="outlined-required"
                  label="Wallet Address"
                  value={address.address}
                  onChange={(val) => {
                    const newWallet = [...wallet];
                    newWallet[i].address = val.target.value;
                    setWallet(newWallet);
                  }}
                />
              </Grid>
            ))}
          </Grid>
          {/* <DialogContentText id="alert-dialog-description">
            </DialogContentText> */}

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUpdate} autoFocus>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
