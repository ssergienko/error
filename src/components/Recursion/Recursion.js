import './Recursion.scss';
import React, { useEffect } from "react";
import Window from "./Window/Window";

function Recursion() {

  let [min, max] = [100, 501];
  const windowsLimit = 50;
  const [windows, setWindows] = React.useState([]);

  useEffect(() => {
    let timer = setInterval(() => {
      let windowsRes = [];
      if(windows.length < windowsLimit) { 
        windowsRes.push(...windows, [
          Math.floor(Math.floor(Math.random() * max) - min) + 'px', Math.floor(Math.floor(Math.random() * max) - min) + 'px'
        ]);
      }
      setWindows(windowsRes);
    }, windows.length === windowsLimit ? 5000 : 100);
    return () => {
      clearInterval(timer);
    };
  }, [windows, min, max]);

  return (
    <div className="recursion">
      {windows && 
        windows.map((window, index) => {
          let lastWindow = (index === windowsLimit-1);
          let style = lastWindow ? {left: '50%', top: '16%', marginLeft: '-175px'} : {margin: window.join(' ')}
          return (
            <div key={`index-${index}`}>
              {lastWindow && <div className="background"></div>}
              <Window 
                stack={lastWindow}
                text="How many frogs can you swallow?" 
                style={style} />
            </div>
          )}
      )}
    </div>
  );

}

export default Recursion;
