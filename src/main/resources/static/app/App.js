import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Countries from './countries/Countries';

const App = () => (
  <Provider store={store}>
    <div>
      <small>Project: java-react-example</small>
      <h1>Countries</h1>
      <div className="container">
        <Countries />
      </div>
    </div>
  </Provider>
);

export default App;
