import './PrimaryKey.scss';
import React, { useEffect } from "react";

function PrimaryKey() {

  const [logs, setLogs] = React.useState([]);
  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+";

  useEffect(() => {
    const timer = setInterval(() => {
      let logsRes = [];
      if(!logs.length) { 
        logsRes = [[Array.apply(null, Array(70)).map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('')]]; }
      else {
        logsRes.push(...logs, Array.apply(null, Array(70)).map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join(''));
      }
      setLogs(logsRes);
    }, 200);
    return () => clearInterval(timer);
  }, [logs]);

  useEffect(() => {
    const objDiv = document.getElementById('primaryKey');
    objDiv.scrollTop = objDiv.scrollHeight;
  });
  
  return (
    <div className="primaryKey" id="primaryKey">
      <ul>
        {logs && logs.length > 0 && logs.map((myline, i) => 
          <li key={i}>{myline}</li>
        )}
      </ul>
    </div>
  );

}

export default PrimaryKey;
