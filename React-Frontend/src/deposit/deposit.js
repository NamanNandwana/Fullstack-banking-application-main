import styles from "./deposit.module.css";

export function Deposit() {
  const onDeposit = (e) => {
    e.preventDefault();

    const acId = e.target.acId.value;
    const amount = e.target.amount.value;

    console.log(`Id ${acId} Amount ${amount}`);

    fetch("http://localhost:3100/deposit", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ acId, amount }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        window.alert(JSON.stringify(json));
      });
  };

  return (
    <div className={styles.depCont}>
      <h1 className={styles.headings}> Deposit Amount </h1>
      <form onSubmit={onDeposit}>
        <input type="number" placeholder="Account Id" name="acId" />
        <input type="number" placeholder="Amount" name="amount" />
        <input type="submit" value="Deposit" className={styles.button} />
      </form>
    </div>
  );
}
