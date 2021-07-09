import "./Header.scss";

import * as React from "react";

import logo from "../logo.png";

export default function Header() {
  return (
    <header>
      <img width={72} alt="logo" src={logo} />
      <h1>Task list</h1>
      <p>Task management for today's workplace.</p>
    </header>
  );
}
