import { useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification'



function App () {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} handleReset={handleReset} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification/>}
    </div>
  );
};


export default App
