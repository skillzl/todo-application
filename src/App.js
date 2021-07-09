import styles from "./App.module.scss";

import * as React from "react";

import { Footer, Header, Todos } from "./components";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}
