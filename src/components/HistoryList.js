import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography, Box, Card, Grid, Button } from "@mui/material";

export default function HistoryList({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <Grid item xs={12}>
      <Card>
        <Box display="flex" padding={1} alignItems="center">
          <Box
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            <DeleteIcon style={{ fill: "red" }} />
          </Box>
          <Box display="flex" alignItem="center" flexGrow={1}>
            <Typography variant="subtitle2">{transaction.text}</Typography>
          </Box>
          <Box display="flex" alignItem="center">
            <Typography
              variant="subtitle2"
              color={transaction.amount > 0 ? "green" : "red"}
            >
              {transaction.amount > 0 ? "" : "-"}RM
              {Math.abs(transaction.amount).toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
