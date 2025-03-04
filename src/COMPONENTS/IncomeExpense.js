import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function IncomeExpense() {
    const { transactions } = useContext(GlobalContext); 

    const amounts = transactions.map(transaction => transaction.amount); 

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2); 

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    return (
        <>
            <div className='inc-exp-container'>
                <div className='item'>
                    <h4>INCOME</h4>
                    <p className='money plus'>+${income}</p>
                </div>
                <div className='item'>
                    <h4>EXPENSE</h4>
                    <p className='money minus'>-${expense}</p>
                </div>
            </div>
        </>
    );
}
