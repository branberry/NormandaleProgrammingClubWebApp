import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
  const element = (
    <div>
      <h1>Normandale Programming Club</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
