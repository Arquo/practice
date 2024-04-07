import React, { useState, useEffect } from 'react';
import './App.css';

//App contains everything
const App: React.FC = () => {
  //const[a,b] = useState(c) create varible a = c
  //way to use b
  //1. a = b(newValue)
  //2. b(prevState => { // Calculate and return the new state value based on prevState
  //                    return newState;}, 
  // prevState = a, prevState => newState, a = newState,  prevState = a ...


  // they are just some variable, simple
  const [ballY, setBallY] = useState(200);  //set up the initial Y axies of the ball    y from the top?
  const [velocity, setVelocity] = useState(0); // starting velocity
  const [score, setScore] = useState(0);
  const [lastscore, setLastScore] = useState(0);
  const [gameOver, setGameOver] = useState(false); // State to track if the game is over
  const [highestScore, setHighest] = useState(0); 
  const randomText: string = "YOU ARE AMAZING";
  const randomX = Math.random() * 1000
  const randomY = Math.random() * 1000


  const gravity = 0.35;
  const maxHeight = 800; //screen size
  const ballSize = 100;

  // ball's motion 
  useEffect(() => {
    const animate = () => {
      //Find ball's Y level, and calc velocity
      setBallY(prevY => {
        const newY = prevY + velocity;
        if (newY >= maxHeight - ballSize) {// Ball hits the ground
          setVelocity(0);
          setScore(0)
          if(score>0){
            setLastScore(score)
            setGameOver(true)
            if(score>highestScore){
              setHighest(score)
            }
          }
          return maxHeight - ballSize; 
        } else if (newY < 0) { // Ball hits the top
          setVelocity(0);
          setScore(0)
          if(score>0){
            setLastScore(score)
            setGameOver(true)
            setBallY(800)
            if(score>highestScore){
              setHighest(score)
            }
          }
          return 0;
        } else { // Ball is  in the air
          // refresh rate
          const newVelocity = velocity + gravity;
          setVelocity(newVelocity);
          return newY;
        }
      });
    };
    const animationFrameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [velocity]);
  // The effect runs whenever the [velocity] state changes
  // 1. button is clicked
  // 2. inside animation loop, when ball is in air



  const handleButtonClick = () => {
    setVelocity(-10); // Apply upward force
    setScore(prevScore=>prevScore+1)
    setGameOver(false)
  };

  const ballStyle: React.CSSProperties = {
    position: 'absolute',
    top: ballY,
    left: '50%',
    backgroundColor: 'black',
    color : 'white',
    width: `${ballSize}px`,
    height: `${ballSize}px`,
    borderRadius: '50%',
    zIndex: 99
  };
  const randomTextStyle: React.CSSProperties = {
    position: 'absolute',
    color: 'black',
    top:  `${randomY}px`,
    left: `${randomX}px`,
    fontSize: '5em',
    zIndex: 9

  };

  return (
    <div>
      <section style={{marginLeft:'10%',marginTop:'10%'}}>
        <h2>HIGHEST SCORE: {highestScore}</h2>
        <strong style={{fontSize:'10em'}}>{score} </strong>
        <h2>CURRENT SCORE ^ </h2>
        <p>RULE: The score will be set back to 0 when the ball hits the ground or the ceiling</p>
        <p>IMPORTANT: no cheating using the spacebar please!!!</p>
      </section>
      
      {gameOver && (   // if game over is true, then do the following
      <h1 style={{position: 'absolute',top: '40%', left: '35%', zIndex:10, fontSize: '4em'}}>
        Game Over!!! Your got: {lastscore}!</h1>
      )}

      <button style={ballStyle} onClick={handleButtonClick}>
        {gameOver ? 'Restart' : 'Click Me'}
      </button>

      <div //coolest animation 
       style={randomTextStyle}>{randomText}</div>

    </div>
  );
};

export default App;