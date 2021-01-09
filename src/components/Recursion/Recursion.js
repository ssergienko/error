import './Recursion.scss';
import React, { useEffect } from "react";
import Window from "./Window/Window";

function Recursion() {

  const [counter, setCounter] = React.useState(119);

  return (
    <div className="recursion">
      <Window text="How many frogs can you swallow?" />
    </div>
  );

}

export default Recursion;
