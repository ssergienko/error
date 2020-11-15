// On all counts I was to feel worse today. But I'm well.
// It's illogic

var count = 0;
console.log('hello there');

function rolldice() {
  var x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
  var y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

  return {
        x: x,
        y: y,
  };
};

while (true) {
  count++;
  //Now reroll the dice, is it your state?
  var dice = rolldice();
  var dicetotal = dice.x + dice.y;

  document.write("<p>Attempt #" + count + " Score: " + dicetotal + " What am I feeling?..</p>");

  if (dice.x == dice.y) {
    // Enough! I'm out of there.
    break;
  }
}
