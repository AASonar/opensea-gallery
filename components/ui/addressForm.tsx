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
import { NFTContext } from "../contexts/NFTContext";
import FetchNFTs from "../moralisAPI";

export default function AddressForm() {
  const { address, setAddress, network, setNetwork } =
    useContext(AddressContext);

  const { nftCards, setNftCards } = useContext(NFTContext);

  const [loading, setLoading] = useState(false);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setNetwork!(event.target.value);
  };

  const handleAddressChange = (event: any) => {
    setAddress!(event.target.value);
  };

  function handleClick() {
    if (address && setNftCards) {
      setLoading(true);
      FetchNFTs(address, network).then((nftDetails: any) => {
        console.log(nftDetails);
        setNftCards(null);
        setNftCards(nftDetails);
        setLoading(false);
      });
    }
  }
  return (
    <Grid container justifyContent="center">
      <Grid xs="auto">
        <TextField
          sx={{ width: "35ch", marginRight: 2 }}
          id="filled-basic"
          label="Wallet Address"
          variant="filled"
          value={address}
          onChange={handleAddressChange}
        />
      </Grid>
      <Grid xs="auto">
        <FormControl
          variant="filled"
          // sx={{ minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-filled-label">Network</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={network}
            onChange={handleSelectChange}
          >
            <MenuItem value={"eth"}>Ethereum (ETH)</MenuItem>
            <MenuItem value={"matic"}>Polygon (MATIC)</MenuItem>
            <MenuItem value={"bsc"}>Binance Smart Chain (BSC)</MenuItem>
            <MenuItem value={"avax"}>Avalance (AVAX)</MenuItem>
            <MenuItem value={"ftm"}>Fantom (FTM)</MenuItem>
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
  );
}
