//Scoreboard.jsx
import { Component } from "react";

class ScoreBoard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  calculateWPM() {
    return 0;
  }
  calculateCPM() {
    return 0;
  }
  calculateAccuracy() {
    return "0" + "%";
  }
  calculateError() {
    return "0";
  }
  render() {
    return (
      <>
        <div>WPM : {this.calculateWPM()}</div>
        <div>CPM : {this.calculateCPM()}</div>
        <div>Accuracy:{this.calculateAccuracy()}</div>
        <div>Error:{this.calculateError()}</div>
      </>
    );
  }
}
export { ScoreBoard };
export default ScoreBoard;
