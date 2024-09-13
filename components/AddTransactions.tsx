"use client";

import addTransaction from "@/actions/addTransaction";
import { useRef } from "react";
import { toast } from "react-toastify";

const AddTransactions = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added");
      formRef.current?.reset();
    }
  };

  return (
    <>
      <h3 className="font-bold text-gray-800 text-xl p-1 ">Add transaction</h3>
      <form
        ref={formRef}
        action={clientAction}
        className="border-2 border-gray-600 p-3 rounded-lg"
      >
        <div className="form-control">
          <label htmlFor="text" className="font-bold">
            Text
          </label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="font-bold">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="btn rounded-md">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransactions;
