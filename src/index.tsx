import React from 'react';
import { render } from 'react-dom';

import { App } from './App';


render(<App />, document.getElementById('root'));

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const UpdatedAppRoot = require('./App').default;
    render(<UpdatedAppRoot />, document.getElementById('root'));
  });
}
