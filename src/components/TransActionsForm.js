import { useEffect, useState } from "react";

const TransActionsForm = ({ addTransection, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formValues.amount > 0) {
      addTransection(formValues);
    }
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler} className="formStyle">
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="description..."
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        placeholder="amount..."
      />
      <div className="radioBox">
        <input
          type="radio"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="btn primary">
        Add transection
      </button>
    </form>
  );
};

export default TransActionsForm;
