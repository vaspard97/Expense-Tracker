import { Typography, Box } from "@mui/material";
export default function Header() {
  return (
    <Box margin={5}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Expense Tracker
      </Typography>
    </Box>
  );
}
