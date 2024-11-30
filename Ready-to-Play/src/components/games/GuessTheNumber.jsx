import React, { useState } from 'react';
import './GuessTheNumber.css';

const GuessTheNumber = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 25) + 1); // 1 to 25
  const [userGuess, setUserGuess] = useState('');
  const [result, setResult] = useState('');
  const [attempts, setAttempts] = useState(0);

  const checkNumber = () => {
    const userNumber = parseInt(userGuess, 10);
    setAttempts(attempts + 1);

    if (userNumber === randomNumber) {
      setResult(`Congratulations! You guessed the number (${randomNumber}) in ${attempts + 1} attempts.`);
    } else if (userNumber < randomNumber) {
      setResult('Too low! Try again.');
    } else {
      setResult('Too high! Try again.');
    }

    if (attempts >= 4) {  // If attempts reach 5 (starting from 0)
      if (userNumber !== randomNumber) {
        setResult(`Sorry! You've run out of attempts. The correct number was ${randomNumber}.`);
      }
    }
  };

  return (
    <div className="game-container">
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 25:</p>
      <p className="attempts-info">You have 5 attempts to guess the number!</p>
      <input
        type="number"
        min="1"
        max="25"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <button onClick={checkNumber} disabled={attempts >= 5}>Guess</button> {/* Disable after 5 attempts */}
      <p className="result-text">{result}</p>
    </div>
  );
};

export default GuessTheNumber;
