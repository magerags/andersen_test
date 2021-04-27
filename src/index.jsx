import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const quote = document.getElementById('quote');
if (quote) {
  ReactDOM.render(<Hello name="Tom" />, quote);
}
