import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function CurrencyDropdown() {

    const { dispatch, currency } = useContext(AppContext);
    const handleCurrencyChange = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }
    return (
        <div className="alert alert-success">
            <select
             className="form-control"
             value={currency}
             onChange={handleCurrencyChange}>
                <option value="">Select Currency</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    )

}

export default CurrencyDropdown;