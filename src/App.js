import React from "react";
import Header from "./components/Header";
import './App.css'
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import TransactionList from "./components/TransactionList";
function App() {
  return (
    <GlobalProvider>
     <Header></Header>
     <div className="container">
     <Balance></Balance>
     <IncomeExpenses></IncomeExpenses>
     <TransactionList></TransactionList>
     <AddTransaction></AddTransaction>
     
     </div>
    </GlobalProvider>
  );
}

export default App;
