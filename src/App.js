import style from "./App.module.css";
import { Component } from "react";
import {
  Statistics,
  Section,
  FeedbackOptions,
  Notification,
} from "./Components/index";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const sum = Object.values(this.state).reduce((a, b) => a + b);
    return sum;
  }
  countPositiveFeedbackPercentage() {
    const procent = parseInt(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return procent;
  }

  handleClick = (event) => {
    const name = event.target.name;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  render() {
    return (
      <div className={style.fragment}>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleClick}
            />
          }
        ></Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              options={Object.keys(this.state)}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
