import './Dice.scss';
import React, { useEffect } from "react";

function Dice({post}) {

  let [min, max] = [1, 6];
  const shakeDace = 30;

  const [dice1, setDice1] = React.useState();
  const [dice2, setDice2] = React.useState();
  const [counter, setCounter] = React.useState(0);

  

  useEffect(() => {
    const rolldice = () => {
      setDice1(Math.floor(Math.random() * ((max - min) + 1) + 1));
      setDice2(Math.floor(Math.random() * ((max - min) + 1) + 1));
    };
    let timer = setInterval(() => {
      if(counter >= shakeDace) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
        rolldice();
      }
    }, counter < shakeDace ? 150 : 5000);
    return () => {
      clearInterval(timer);
    };
  }, [counter, min, max]);

  return (
    <div className="dice_wrapper">
      <div className="dice_middle_block">
        <div className="dices">
          {(dice1 > 0 && dice1 <=6) && <div className={'dice dice-' + dice1}></div>}
          {(dice2 > 0 && dice2 <=6) && <div className={'dice dice-' + dice2}></div>}
        </div>
        {counter === 30 && <div className="user-feedback">What am I feeling?</div>}
        {counter !== 30 && <div className="user-feedback">Rolling...</div>}
      </div>
    </div>
  );

}

export default Dice;
