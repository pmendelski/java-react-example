import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Countries from './countries/Countries';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Countries</h1>
      <Countries />
    </div>
  </Provider>
);

export default App;
