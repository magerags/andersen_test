import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './components/quote';

import '../assets/stylesheets/application.scss';

const quote = document.getElementById('quote');
if (quote) {
  ReactDOM.render(<Quote />, quote);
}
