const TransActionsComponent = ({ transActions }) => {
  return (
    <section>
      {transActions.map((t) => (
        <div
          key={t.id}
          className="transAction"
          style={{ borderRight: t.type === "expense" && "3px solid red" }}
        >
          <span>{t.desc}</span>
          <span>{t.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default TransActionsComponent;
