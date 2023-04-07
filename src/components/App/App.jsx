import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
   console.log(event.target.value);
    switch (event.target.value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  
  // const handleIncrement = value => {
  //   switch (value) {
  //     case 'good':
  //       setGood(prevState => prevState + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(prevState => prevState + 1);
  //       break;
  //     case 'bad':
  //       setBad(prevState => prevState + 1);
  //       break;

  //     default:
  //       return;
  //   }
  // }
  
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  // Object.values(this.state).reduce((acc, value) => acc + value, 0);
  // useEffect(() => {

  console.log(countTotalFeedback());

  const countPositiveFeedbackPercentage = () =>
    Math.round(
      // (good /
      //   Object.values(this.state).reduce((acc, value) => acc + value, 0)) *
      //   100
      (good / countTotalFeedback()) * 100
    );

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleIncrement}
          options={{good, neutral, bad}}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
        {countTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
      <GlobalStyle />
    </Container>
  );
};

export default App;
