import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds,
  };

  onClick = (event) => {
    if (event.target.name === "button-play") {
      this.doSecondChange();
      if (this.state.seconds === 1) {
        this.doMinuteChange();
        this.doSecondChange();
      }
    }
    if (event.target.name === "button-pause") {
      this.componentWillUnmount();
    }
  };

  doSecondChange = () => {
    this.mySecondsInterval = setInterval(() => {
      if (this.state.minutes === -1) {
        this.componentWillUnmount();
        this.setState((prevState) => ({
          minutes: prevState.minutes + 1,
          seconds: prevState.seconds - 58,
        }));
      }
      if (this.state.seconds === 0 || this.state.seconds === -1) {
        this.setState((prevState) => ({
          minutes: prevState.minutes - 1,
          seconds: prevState.seconds + 60,
        }));
      }
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    }, 1000);
  };

  doMinuteChange = () => {
    this.myMinutesInterval = setInterval(() => {}, 60000);
  };

  componentWillUnmount() {
    clearInterval(this.mySecondsInterval);
    clearInterval(this.myMinutesInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <>
        <span className="description">
          <button
            name="button-play"
            className="icon icon-play"
            onClick={this.onClick}
          ></button>
          <button
            name="button-pause"
            className="icon icon-pause"
            onClick={this.onClick}
          ></button>
          {minutes}:{seconds}
        </span>
      </>
    );
  }
}
