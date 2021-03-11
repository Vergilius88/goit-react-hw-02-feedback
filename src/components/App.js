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
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return 100 / (total / good);
  };

  onLeaveFeedback = (name) => {
    this.setState((myPrevState) => {
      return {
        [name]: myPrevState[name] + 1,
      };
    });
  };

  render() {
    const { good, bad, neutral, listFeedback } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage().toFixed(0);

    return (
      <>
        <ButtonBlock
          options={listFeedback}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <StatisticsBlock
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedback}
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
