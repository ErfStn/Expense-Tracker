import { useEffect, useState } from "react";
import OverviewComponent from "./OverviewComponent";
import TransActionsComponent from "./TransActionsComponent";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transActions, setTransActions] = useState([]);

  const addTransection = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTransActions([...transActions, data]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transActions.forEach((t) => {
      t.type === "expense"
        ? (exp += parseFloat(t.amount))
        : (inc += parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transActions]);
  return (
    <section className="container">
      <OverviewComponent
        income={income}
        expense={expense}
        addTransection={addTransection}
      />
      <TransActionsComponent transActions={transActions} />
    </section>
  );
};

export default ExpenseApp;
