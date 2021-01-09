// On all counts I was to feel worse today. But I'm well.
// It's illogic.

let health = '';

function sum(num1,num2) {
  return num1 + num2;
}

health = sum(999, "Normal");

if (parseInt(health)) {
  document.write(`<p>${health} is an Integer, therefore I am Normal</p>`);
}
else {
  document.write("I'm not Normal");
}
