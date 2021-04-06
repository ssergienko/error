import './Console.scss';
import React, { useEffect } from "react";

const turnLight = (state) => (state === 'on') ? 'on' : 'off';

function Console() {
  const data = {
    bites: '64 bytes from 127.0.0.1:',
    light: 'lamp=' + turnLight('on'),
    things: 'things=' + ['Lamp', 'Table', 'Glass', 'whitePaper'].join(','),
    time: 'time=0.0' + (Math.random() * ((31, 65)) + 31).toFixed().toString()
  }
  const [logs, setLogs] = React.useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      let logsRes = [];
      if(!logs.length) { 
        logsRes = [[data.bites, data.light, data.things, data.time].join(' ')]; }
      else {
        logsRes.push(...logs, [data.bites, data.light, data.things, data.time].join(' '));
      }
      setLogs(logsRes);
    }, 1000);
    return () => clearInterval(timer);
  }, [logs, data.bites, data.light, data.things, data.time]);

  useEffect(() => {
    const objDiv = document.getElementById('console');
    objDiv.scrollTop = objDiv.scrollHeight;
  });
  
  return (
    <div className="console" id="console">
      <ul>
        {logs && logs.length > 0 && logs.map((myline, i) => 
          <li key={i}>{myline}</li>
        )}
      </ul>
    </div>
  );

}

export default React.memo(Console);
