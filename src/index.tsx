import React from 'react';
import { render } from 'react-dom';

import { App } from './App';


render(<App />, document.getElementById('root'));

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./App', () => {
    const UpdatedAppRoot = require('./App').default; // eslint-disable-line global-require
    render(<UpdatedAppRoot />, document.getElementById('root'));
  });
}
