// I'm writing in the presence of the glass which is on the table in front of me, 2 sm away from the sheet of paper I'm writing on.
// Near there is a lamp on the wall. The light is on.

let consoleEl = document.getElementById("console");
let things = ['Lamp', 'Table', 'Glass', 'whitePaper'];
let [minTime, maxTime] = [31, 56];
let data = {
  bites: '64 bytes from 127.0.0.1:',
  light: (turnLight(things[0] + '=', 'on')).toString().toLowerCase(),
  things: 'things=' + things.join(','),
  SCHIZO: 1000
};

function turnLight(thing, state){
  return (state == 'on') ? thing + "on" : thing + 'off';
}

function getTimeStr() {
  return 'time=0.0' + (Math.random() * ((minTime, maxTime)) + minTime).toFixed().toString();
}

function run() {
  for(let i=0; i < data.SCHIZO; i++) {
    (function(i) {
      setTimeout(function() {
        let logLineEl = document.createElement("li");
        logLineEl.innerHTML = data.bites + ' ' + data.light + ' ' + data.things + ' ' + getTimeStr();
        consoleEl.append(logLineEl);
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }, 1000*i);
    })(i);
  }
}

run();
