import './Console.scss';
import React, { useEffect } from "react";

function Console() {

  const turnLight = (thing, state) => (state === 'on') ? thing + "on" : thing + 'off';

  const config = {
    bites: '64 bytes from 127.0.0.1:',
    light: (turnLight('lamp=', 'on')).toString().toLowerCase(),
    things: 'things=' + ['Lamp', 'Table', 'Glass', 'whitePaper'].join(','),
    time: 'time=0.0' + (Math.random() * ((31, 65)) + 31).toFixed().toString()
  };
  
  const [logs, setLogs] = React.useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      let logsRes = [];
      if(!logs.length) { 
        logsRes = [[config.bites, config.light, config.things, config.time].join(' ')]; }
      else {
        logsRes.push(...logs, config.bites + ' ' + config.light + ' ' + config.things + ' ' + config.time);
      }
      setLogs(logsRes);
    }, 1000);
    return () => clearInterval(timer);
  }, [logs]);

  useEffect(() => {
    const objDiv = document.getElementById('console');
    objDiv.scrollTop = objDiv.scrollHeight;
  });
  
  return (
    <div className="console" id="console">
      <ul id="lines">
        {logs && logs.length > 0 && logs.map((myline, i) => {
          return (<li key={i}>{myline}</li>)
        })}
      </ul>
    </div>
  );

}

export default Console;
