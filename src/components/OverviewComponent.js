import { useState } from "react";
import TransActionsForm from "./TransActionsForm";

const OverviewComponent = ({ income, expense, addTransection }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="headerSection">
        <p>balanse : {income - expense}</p>
        <button onClick={() => setIsShow((show) => !show)} className={`btn ${isShow && "cancel" }`}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionsForm addTransection={addTransection} setIsShow={setIsShow} />}
      <div className="reasultSection">
        <div className="expenseBox">
          Expense <span style={{color:"red"}}>$ {expense}</span>
        </div>
        <div className="expenseBox">
          Income <span>$ {income}</span>
        </div>
      </div>
    </>
  );
};

export default OverviewComponent;
