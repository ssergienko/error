import './Counter.scss';
import React, { useEffect } from "react";

function Counter() {

  const [counter, setCounter] = React.useState(119);

  useEffect(() => {
    const timer = setInterval(() => {
      if(counter <= 0) {
        setCounter(119);
      } else {
        setCounter(counter - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="counter">
      {counter >= 60 && (<span>01:{counter-60 > 10 ? counter-60 : '0' + (counter-60).toString()}</span>)}
      {counter < 60 && (<span>00:{counter < 10 ? '0' + counter.toString() : counter}</span>)}
    </div>
  );

}

export default Counter;
