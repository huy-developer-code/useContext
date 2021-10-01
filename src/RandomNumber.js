import React, { useContext } from "react";
import { NumberContext } from "./component/NumberProvider";
import "./styles.css";
export default function () {
  const context = useContext(NumberContext);

  return (
    <div className="App">
      <h2>{context.number}</h2>
      <button onClick={context.updateNumber}>ADD</button>
    </div>
  );
}
