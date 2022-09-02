import { useEffect, useState } from "react";

const TransActionsComponent = ({ transActions }) => {
  const [serachItem, setSearchItem] = useState("");
  const [filteredTransTnx, setFilteredTnx] = useState(transActions);

  const filteredTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transActions);
      return;
    }
    const filtered = transActions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };
  const changeHandler = (e) => {
    filteredTransactions(e.target.value);
    setSearchItem(e.target.value);
  };
  useEffect(() => {
    filteredTransactions(serachItem);
  }, [transActions]);

  if (!transActions.length) return <p>add some transactions</p>;
  return (
    <section>
      <input
        type="text"
        value={serachItem}
        onChange={changeHandler}
        placeholder="search for transactions..."
        className="searchBox"
      />
      {filteredTransTnx.length
        ? filteredTransTnx.map((t) => (
            <div
              key={t.id}
              className="transAction"
              style={{ borderRight: t.type === "expense" && "3px solid red" }}
            >
              <span>$ {t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          ))
        : "no item matchs!"}
    </section>
  );
};

export default TransActionsComponent;
