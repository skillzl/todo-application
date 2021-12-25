import styles from "./App.module.scss";

// start xmas stuff
import Lightrope from "./components/Lightrope";
import Snowfall from "react-snowfall";
// end xmas stuff

import * as React from "react";

import { Footer, Header, Todos } from "./components";

export default function App() {
  return (
    <div className={styles.container}>
      <Lightrope />
      <Snowfall />
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}
