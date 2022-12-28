import React, { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addDocument({ name, amount, uid });
  };

  useEffect(() => {
    if (response.success) {
      setAmount("");
      setName("");
    }
  }, [response.success]);
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name</span>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button htmlytype="submit" disabled={response.isPending}>
          Add transaction
        </button>
      </form>
    </>
  );
};
