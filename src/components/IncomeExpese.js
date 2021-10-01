import React, { useContext } from "react";
import { Typography, Box, Card, Grid } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item >= 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <Card>
      <Box padding={2}>
        <Grid container>
          <Grid item xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItem="center"
              flexDirection="column"
            >
              <Typography variant="h6" textAlign="center">
                INCOME
              </Typography>
              <Typography variant="h6" textAlign="center" color="green">
                RM{income}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItem="center"
              flexDirection="column"
            >
              <Typography variant="h6" textAlign="center">
                EXPENSE
              </Typography>
              <Typography variant="h6" textAlign="center" color="red">
                -RM{expense}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
