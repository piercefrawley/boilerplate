import React from 'react';
import { Link } from 'react-router';

require('../styles/app.scss');

export default class App extends React.Component {
  render() {
    return (
      <ul>
        <li>Hello World From App</li>
        <li><Link to="/about">About</Link></li>
      </ul>
    );
  }
}
