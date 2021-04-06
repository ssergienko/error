import './Clock.scss';
import React, { useEffect } from "react";

function Clock() {

  const [counter, setCounter] = React.useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      if(counter === 59) {
        setCounter(58);
      } else {
        setCounter(+counter + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="clock-wrapper">

      <div className="clock">
      
        <div className="numbers">
          <p className="hours">00</p>
          <p className="placeholder">88</p>
        </div>

        <div className="colon">
          <p>:</p>
        </div>

        <div className="numbers">
          <p className="minutes">00</p>
          <p className="placeholder">88</p>
        </div>

        <div className="colon">
          <p>:</p>
        </div>

        <div className="numbers">
          <p className="seconds">{counter}</p>
          <p className="placeholder">88</p>
        </div>

      </div>
    </div>
  );

}

export default Clock;
