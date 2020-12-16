// I'm writing in the presence of the glass which is on the table in front of me, 2 sm away from the sheet of paper I'm writing on.
// Near there is a lamp on the wall. The light is on.

var myDate = "10/30/2020 15:51:00";
var inRoom = ['Lamp', 'Table', 'Glass', 'whitePaper'];
var LEVEL = 'DEBUG';
var SCHIZO = 10;
var k,i;

function turnLight(thing, state){
        if (state == 'on') {
          return thing + " is on";
    } else {
        return thing + ' is off';
    }
}

function log(...params){
    var j = ''
    for (i=0; i<params.length; i++) {
    j += (params[i])
  }
        return j;
}

for (k=1; k < SCHIZO; k++) {
   var datum = Date.parse(myDate).toString();
   document.write(log(datum/1000 + k, ' ', LEVEL, ': ', turnLight(inRoom[0],'on'), ' Things in Room: ', inRoom) + "<br>");
}
