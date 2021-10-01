import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Typography, Box, Divider, TextField, Button } from "@mui/material";
export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <Box marginTop={2}>
      <Typography variant="h6" gutterBottom>
        Add New Transaction
      </Typography>
      <Divider />
      <form onSubmit={onSubmit}>
        <Typography variant="subtitle2" gutterBottom>
          Text
        </Typography>
        <TextField
          fullWidth
          size="small"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Typography variant="subtitle2" gutterBottom>
          Amount
        </Typography>
        <TextField
          fullWidth
          size="small"
          value={amount}
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <Box marginTop={1}>
          <Button type="submit" variant="contained" fullWidth>
            Add Transaction
          </Button>
        </Box>
      </form>
    </Box>
  );
}
