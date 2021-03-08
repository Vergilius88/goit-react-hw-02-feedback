import React from "react";
import { Component } from "react";

import Section from "./sectionWrapper/sectionWrapper";

import ButtonBlock from "./feedback/buttonsBlock/buttonBlock";
import StatisticsBlock from "./feedback/statisticsBlock/statisticsBlock";

class Feedback extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    listFeedback: ["good", "neutral", "bad"],
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  onLeaveFeedback = (name) => {
    this.setState((myPrevState) => {
      return {
        [name]: myPrevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(({ good, bad, neutral }) => {
      return {
        total: good + bad + neutral,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => {
      return {
        positive: 100 / (total / good),
      };
    });
  };

  countFeedback = (item) => {
    this.onLeaveFeedback(item);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, bad, neutral, total, listFeedback, positive } = this.state;
    return (
      <>
        <ButtonBlock
          options={listFeedback}
          onLeaveFeedback={this.countFeedback}
        />
        <StatisticsBlock
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive.toFixed(2)}
        />
      </>
    );
  }
}

function App() {
  return (
    <Section title="Leave feedback">
      <Feedback />
    </Section>
  );
}

export default App;
