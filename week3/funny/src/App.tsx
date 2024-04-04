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
  const gravity = 0.45;
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
          return maxHeight - ballSize; 
        } else if (newY < 0) {// Ball hits the top
          setVelocity(0);
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
  };

  const ballStyle: React.CSSProperties = {
    position: 'absolute',
    top: ballY,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'black',
    width: `${ballSize}px`,
    height: `${ballSize}px`,
    borderRadius: '50%',
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Click me to make the ball go up!</button>
      <div className="ball" style={ballStyle}></div>
    </div>
  );
};

export default App;