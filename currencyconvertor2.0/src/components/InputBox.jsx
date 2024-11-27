import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
    currencyLabel = "Currency Type",
    placeholder = "Enter amount",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount Input Section */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder={placeholder}
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (!isNaN(value) && value >= 0) {
                            onAmountChange && onAmountChange(value);
                        }
                    }}
                />
            </div>

            {/* Currency Dropdown Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <label className="text-black/40 mb-2 w-full">{currencyLabel}</label>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    aria-label={currencyLabel}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
