import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction'; 

export default function TransactionList() {
    const { transactions, deleteTransaction } = useContext(GlobalContext);  
    
    return (
        <>
            <h3 className='heading3'>History</h3>
            <hr />
            <ul id='list' className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
}
