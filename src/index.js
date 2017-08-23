import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import './index.css';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div>

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
  const element = (
    <div>
      <h1>Normandale Programming Club</h1>
      <Clock />
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
