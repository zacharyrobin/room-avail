import React from 'react';
import moment from 'moment-timezone';
import './ClockStyle.css';



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    var weekday = moment().format('ddd')
    var date = moment().format('MMM Do')
    var time = moment().format('h:mm')
    var seconds = moment().format('ss')
    var ampm = moment().format('a')

    var currentTime = moment().tz("America/Los_Angeles").format();


    return (
      <div className="clock">
        <div className="left">
          {time}
        </div>
        <div className="right">
          <div className="upper">
            <div className="centered">{ampm}</div>
          </div>
          <div className="lower"> 
            <div className="centered">{seconds}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Clock
