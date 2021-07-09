import "./Footer.scss";

import * as React from "react";

export default function Footer() {
  function resetAndReload() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <footer>
      <button onClick={resetAndReload} type="reset">
        Restart the list
      </button>
    </footer>
  );
}
