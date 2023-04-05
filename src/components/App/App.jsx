import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    if (event.target.textContent === 'Good') {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
        };
      });
    }
    if (event.target.textContent === 'Neutral') {
      this.setState(prevState => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    }
    if (event.target.textContent === 'Bad') {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        Object.values(this.state).reduce((acc, value) => acc + value, 0)) *
        100
    );

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={Object.keys(this.state)}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
