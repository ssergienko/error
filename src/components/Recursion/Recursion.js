import './Recursion.scss';
import React, { useEffect } from "react";
import Window from "./Window/Window";

function Recursion() {

  const [counter, setCounter] = React.useState(119);

  return (
    <div className="recursion">
      <Window text="How many frogs can you swallow?" style={{margin: `30px`}} />
      <Window text="How many frogs can you swallow?" style={{margin: `130px`}} />
    </div>
  );

}

export default Recursion;
