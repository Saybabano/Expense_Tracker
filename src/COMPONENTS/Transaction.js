import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const { id, text, amount } = transaction;
    
    const sign = amount < 0 ? '-' : '+';
    
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text}
            <span>{sign}${Math.abs(amount)}</span>
            <button 
                onClick={() => deleteTransaction(id)} 
                className='delete-btn' 
                aria-label={`Delete transaction ${text}`}>
                X
            </button>
        </li>
    );
}
