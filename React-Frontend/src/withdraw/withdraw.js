import styles from "./withdraw.module.css";

export function Withdraw() {
  const onWithdraw = (e) => {
    e.preventDefault();

    const acId = e.target.acId.value;
    const amount = e.target.amount.value;

    console.log(`Id ${acId} Amount ${amount}`);

    fetch("http://localhost:3100/withdraw", {
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
    <>
      <div className={styles.wthCont}>
        <h1 className={styles.headings}> Withdraw Amount </h1>
        <form onSubmit={onWithdraw}>
          <input type="number" placeholder="Account Id" name="acId" />
          <input type="number" placeholder="Amount" name="amount" />
          <input type="submit" value="Withdraw" className={styles.button} />
        </form>
      </div>
    </>
  );
}
