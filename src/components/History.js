import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Typography, Box, Divider, Grid } from "@mui/material";
import HistoryList from "./HistoryList";
export default function History() {
  const { transactions } = useContext(GlobalContext);
  return (
    <Box marginTop={2}>
      <Typography variant="h6" gutterBottom>
        History
      </Typography>
      <Divider />
      <Grid container spacing={2} marginTop={1} marginBottom={1}>
        {transactions.map((transaction) => {
          return <HistoryList transaction={transaction} />;
        })}
      </Grid>
    </Box>
  );
}
