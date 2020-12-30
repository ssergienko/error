// I'm not at all sure already that my home is safe. 
// It seems the walls are not absolutely vertical.

const amIMental = true;

const checkMentalStatus = () => {
  if(amIMental) {
    return false;
  } else {
    return true;
  }
}

document.write(`My home is safe: ${isHomeSafe}`);
document.write(`All my walls are vertical: ${isWallVertical}`);

////////// CODE THAT WILL WORK ///////////

/*let [min, max, count, maxAttempts] = [1, 6, 0, 1000];
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
    
    let dice = rolldice();

    (function(i) {
      setTimeout(function() {
        dice1el.innerHTML = dice.x;
        dice2el.innerHTML = dice.y;
      }, 3000*i);
    })(i); 

  }

}*/
