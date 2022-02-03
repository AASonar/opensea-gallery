import {
  FormControl,
  SelectChangeEvent,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";

export default function AddressForm() {
  const [network, setNetwork] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setNetwork(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <TextField
          sx={{ width: "40ch" }}
          id="filled-basic"
          label="Wallet Address"
          variant="filled"
        />
      </Grid>
      <Grid xs={2}>
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Network</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={network}
            onChange={handleChange}
          >
            <MenuItem value={"eth"}>Ethereum (ETH)</MenuItem>
            <MenuItem value={"matic"}>Polygon (MATIC)</MenuItem>
            <MenuItem value={"bsc"}>Binance Smart Chain (BSC)</MenuItem>
            <MenuItem value={"avax"}>Avalance (AVAX)</MenuItem>
            <MenuItem value={"ftm"}>Fantom (FTM)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
