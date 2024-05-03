import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000
    
    const handleBudgetChange = (event) => {
        const newBudget = +event.target.value
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if (newBudget > upperLimitValue){
            const message = `The value cannot exceed £${upperLimitValue}`
            alert (message);
            return;
        }

        if (newBudget < totalExpenses){
            alert ("The budget cannot be less than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
