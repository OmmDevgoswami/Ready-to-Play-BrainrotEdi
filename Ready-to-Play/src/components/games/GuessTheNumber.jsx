import React, { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';  // Import useNavigate from react-router-dom
import './GuessTheNumber.css';

const GuessTheNumber = () => {
  const navigate = useNavigate();  // Initialize useNavigate to navigate programmatically
  const location = useLocation();
  const venueData = location.state;

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

    // Check if attempts are over
    if (attempts >= 4) {  // If attempts reach 5 (starting from 0)
      if (userNumber !== randomNumber) {
        setResult(`Sorry! You've run out of attempts. The correct number was ${randomNumber}.`);
      }
      // Redirect to GameOver after game finishes (win or lose)
      setTimeout(() => {
        navigate('/respite', { state: { resultMessage: result, location: venueData.city } });  // Pass result message to GameOver page
      }, 1000);  // Add a delay to allow the user to see the result before redirecting
    }
  };

  return (
    <div className="guess-number-container">
      <div className="game-container">
        <h1 className='heading'>Guess the Number</h1>
        <p>Guess a number between 1 and 25:</p>
        <p className="attempts-info">You have 5 attempts to guess the number!</p>
        <input
          type="number"
          min="1"
          max="25"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button onClick={checkNumber} disabled={attempts >= 5}>
          Guess
        </button>
        <p className="result-text">{result}</p>
      </div>
    </div>
  );  
};

export default GuessTheNumber;
