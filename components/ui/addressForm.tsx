import {
  FormControl,
  SelectChangeEvent,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useContext, useState } from "react";
import { Grid } from "@mui/material";
import { AddressContext } from "../contexts/AddressContext";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { NFTBaseContext } from "../contexts/NFTContext";
import FetchTokenBalance from "../covalentAPI/fetchTokenBalance";

export default function AddressForm() {
  const { chain_id, setChain_id, address, setAddress } =
    useContext(AddressContext);

  const { nftBaseData, setNftBaseData } = useContext(NFTBaseContext);

  const [loading, setLoading] = useState(false);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setChain_id!(event.target.value);
  };

  const handleAddressChange = (event: any) => {
    setAddress!(event.target.value);
  };

  function handleClick() {
    if (chain_id && address) {
      setLoading(true);
      FetchTokenBalance(chain_id, address)
        .then((nftData: any) => {
          setNftBaseData!(null);
          setNftBaseData!(nftData);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs="auto">
          <TextField
            sx={{ width: "35ch", marginRight: 2 }}
            id="filled-basic"
            label="Wallet Address"
            variant="filled"
            value={address}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs="auto">
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
              <MenuItem value={"1"}>Ethereum (ETH)</MenuItem>
              <MenuItem value={"137"}>Polygon (MATIC)</MenuItem>
              <MenuItem value={"56"}>Binance Smart Chain (BSC)</MenuItem>
              <MenuItem value={"43114"}>Avalance (AVAX)</MenuItem>
              <MenuItem value={"250"}>Fantom (FTM)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs="auto">
          <LoadingButton
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            sx={{
              width: "30ch",
              height: "7ch",
              marginLeft: 2,
            }}
          >
            Find NFTs
          </LoadingButton>
        </Grid>
      </Grid>
    </div>
  );
}
