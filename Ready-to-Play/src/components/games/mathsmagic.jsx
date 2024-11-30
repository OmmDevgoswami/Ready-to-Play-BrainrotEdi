import './mathsmagic.css';
import { useState, useEffect } from 'react';

const difficultQuestions = [
  { question: "∫ x dx", answer: "x^2/2 + C" },
  { question: "∫ x^4 dx", answer: "x^5/5 + C" },
  { question: "d/dx (x^3)", answer: "3x^2" },
  { question: "d/dx (x^3.y^5)", answer: "_" },
];

const easyQuestions = [
  { question: "2 + 2 - 2", answer: "2" },
  { question: "10 - 6 x 0 ", answer: "10" },
  { question:"9 x 0 + 1", answer: "1"},
  { question:"1 + 1 - 2", answer: "0"},
  { question:"9 x 2 + 1", answer: "18"},
];

const App = () => {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    askDifficultQuestion();
  }, []);

  const askDifficultQuestion = () => {
    const randomIndex = Math.floor(Math.random() * difficultQuestions.length);
    setQuestion(difficultQuestions[randomIndex]);
    setMessage("");

    setTimeout(() => {
      if (!userAnswer) {
        setMessage("We know you couldn't solve it. Try an easier one!");
        askEasyQuestion();
      }
    }, 7000);
  };

  const askEasyQuestion = () => {
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    setQuestion(easyQuestions[randomIndex]);
  };

  const handleAnswerChange = (e) => setUserAnswer(e.target.value);

  const handleSubmit = () => {
    if (userAnswer === question?.answer) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect! Try again.");
    }
    setUserAnswer("");
  };
  return (
    <div className="maths-magic-container">
      <div>
        <h1>Put your busy mind to answer....</h1>
        {question && <h2>{question.question}</h2>}
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          placeholder="Your answer..."
        />
        <button onClick={handleSubmit}>SUBMIT</button>
        <p>{message}</p>
      </div>
    </div>
  );
  
};

export default App;
