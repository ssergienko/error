// On all counts I was to feel worse today. But I'm well.
// It does not make any sense

let [min, max, count, maxAttempts] = [1, 6, 0, 1000];
let dice1el = document.getElementById("dice-1");
let dice2el = document.getElementById("dice-2");

function rolldice() {
  return { 
    x: Math.floor(Math.random() * ((max - min) + 1) + 1),
    y: Math.floor(Math.random() * ((max - min) + 1) + 1)
  }
};

function run() {
  for(let i=0; i < maxAttempts; i++) {
    //Now reroll the dice, is it your state?
    let dice = rolldice();

    (function(i) {
      setTimeout(function() {
        dice1el.innerHTML = dice.x;
        dice2el.innerHTML = dice.y;
      }, 3000*i);
    })(i); 

  }
}

run();
