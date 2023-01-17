import React from "react";
function Navbar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/new">New Customer</a>
      <a href="/deposit">Deposit</a>
      <a href="/withdraw">Withdraw</a>
      <a href="/transfer">Transfer</a>
      <a href="/balance">Balance</a>
    </nav>
  );
}

export default Navbar;
