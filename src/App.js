import React from 'react'
import Header from './COMPONENTS/Header'
import Balance from './COMPONENTS/Balance'
import IncomeExpense from './COMPONENTS/IncomeExpense'
import TransactionList from './COMPONENTS/TransactionList'
import AddTransaction from './COMPONENTS/AddTransaction'
import "./App.css"
import { GlobalProvider } from './Context/GlobalState'




export default function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )  
}
