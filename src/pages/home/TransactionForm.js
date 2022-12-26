import React, { useState } from "react";

export const TransactionForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.name)}
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.name)}
            value={amount}
          />
        </label>
        <button htmlType="submit">Add transaction</button>
      </form>
    </>
  );
};
