// It seems there is something in my nose. 
// And there is also some tightness in my throat.

let msg = 'How many frogs can you swallow?:'
document.write(msg)

function eatfrog() {
  eatfrog();
}

function printStackTrace() {
  const callstack = [];
  try {
    eatfrog();
  } catch(e) {
    if(e.stack) {
      var lines = e.stack.split('\n');
      for (i = 0; i < lines.length; i++) {
        callstack.push(lines[i] + "<br>");
      }
    }
    document.write(callstack);
  }
}

printStackTrace();
