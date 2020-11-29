// I've developed a program that controls my day minute by minute. 
// I've got 2 minutes to get myself dressed and brushed before it's time to consume food.

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

