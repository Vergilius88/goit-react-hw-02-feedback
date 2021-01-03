import { Component } from "react";

import ButtonBlock from "../buttonsBlock/buttonBlock";
import StatisticsBlock from "../statisticsBlock/statisticsBlock"

export default class Feedback extends Component {
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

  countPositiveFeedbackTotal = () => {
    this.setState(({ good, bad, neutral }) => {
      return {
        total: good + bad + neutral,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => {
      return {
        positive: 100 / (total / good) 
      };
    });
  };

  countTotalFeedback = (item) => {
    this.onLeaveFeedback(item);
    this.countPositiveFeedbackTotal();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, bad, neutral, total, listFeedback, positive } = this.state;
    return (
      <>
        <ButtonBlock
          options={listFeedback}
          onLeaveFeedback={this.countTotalFeedback}
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