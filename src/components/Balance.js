import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0);
  console.log(balance);
  return (
    <Box>
      <Typography variant="h6">Balance</Typography>
      <Typography variant="h4" gutterBottom>
        RM{balance.toFixed(2)}
      </Typography>
    </Box>
  );
}
