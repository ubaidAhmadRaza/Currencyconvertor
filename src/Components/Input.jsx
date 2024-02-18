import React, { useId } from 'react'

import useCurrencyInfo from '../Hooks/currency';


function Input({
    label,
    amount,
    onAmountChange,
    oncurrenychange,
    currencyoption=[],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
    
}) {
  const amountInputId = useId()
   
    return (
        <div className={`bg-white dark:bg-gray-800 p-3 w-full rounded-lg text-sm flex `}>
          <div className="w-full">
            <label htmlFor={amountInputId} className="text-black/80 dark:text-white w-full mb-2 inline-block">
              {label}
            </label>
            <input
            id={amountInputId}
              value={Math.floor(amount)}
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              className="outline-none w-full text-black/80 dark:text-white bg-transparent py-1.5"
              type="number"
              placeholder="Amount"
              disabled={amountDisable}
              
            />
          </div>
          <div className="flex flex-wrap text-right">
            <p className="text-black/80 dark:text-white mb-2 w-full">Currency Type</p>
            <select
              className="rounded-lg px-1 py-1 text-black/80 dark:text-white bg-gray-100 dark:bg-gray-700 cursor-pointer outline-none"
              value={selectCurrency}
              disabled={currencyDisable}
              onChange={(e) => oncurrenychange && oncurrenychange(e.target.value)}
              
            >
              {currencyoption.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
      
}

export default Input;
