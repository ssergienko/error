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
