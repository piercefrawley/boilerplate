import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { routes } from './routes';


function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  render(<Router routes={routes} history={browserHistory}/>, app);
}

main();
