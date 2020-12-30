// On all counts I was to feel worse today. But I'm well.
// It does not make any sense

var count = 0;

const rolldice = () => {
  return {
        x: Math.floor(Math.random() * ((6 - 1) + 1) + 1),
        y: Math.floor(Math.random() * ((6 - 1) + 1) + 1),
  };
};

while (true) {
  count++;

  var dice = rolldice();
  var dicetotal = dice.x + dice.y;

  document.write(`Attempt # ${count} Score: ${dicetotal} What am I feeling`);
}
