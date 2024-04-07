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
    width: `${ballSize}px`,
    height: `${ballSize}px`,
    borderRadius: '50%',
  };
  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    top: ballY+10,
    left: '50.5%',
    width: `${ballSize-20}px`,
    height: `${ballSize-20}px`,
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color : 'white',
    zIndex: 1, //on the top of other things
  };

  //style={{marginLeft:'100px'}}
  
  return (
    <div>
      <section style={{marginLeft:'10%',marginTop:'10%', width:'25%'}}>
        <h2>HIGHEST SCORE: {highestScore}</h2>
        <strong style={{fontSize:'10em'}}>{score}</strong>
        <h2>CURRENT SCORE ^ </h2>
        <p>RULE: The score will be setted back to 0 when the ball hits the ground or the ceiling</p>
        <p>IMPORTANT: stop cheating using spacebar</p>
      </section>
      
      {gameOver && (   // if game over is true, then do the following
      <h1 style={{position: 'absolute',top: '40%', left: '40%', zIndex:10}}>
        Game Over!!! Your got: {lastscore}</h1>
      )}

      <button style={buttonStyle} onClick={handleButtonClick} >Click Meeee!</button>
      <div className="ball" style={ballStyle}></div>
    </div>
  );
};

export default App;