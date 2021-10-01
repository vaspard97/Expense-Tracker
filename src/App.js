import { Container } from "@mui/material";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpese";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Container maxWidth="xs">
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </Container>
    </GlobalProvider>
  );
}

export default App;
