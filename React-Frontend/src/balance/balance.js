import { useState } from "react";
import styles from "./balance.module.css";

export function Balance() {
  const [bal, setBal] = useState(0);

  const onBalance = (e) => {
    e.preventDefault();

    const acId = e.target.acId.value;

    console.log(`Id ${acId} `);

    fetch(`http://localhost:3100/balance/${acId}`)
      .then((res) => res.json())
      .then((json) => setBal(json.bal));
  };

  return (
    <div className={styles.balCont}>
      <h1 className={styles.headings}> Balance Is : INR. {bal} </h1>
      <form onSubmit={onBalance}>
        <input type="number" placeholder="Account Id" name="acId" />
        <input type="submit" value="Balance" className={styles.button} />
      </form>
    </div>
  );
}
