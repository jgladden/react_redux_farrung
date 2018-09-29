import React from 'react';
import TodoControls from '../containers/TodoControls';
import TodoCollection from '../containers/TodoCollection';

const App = props => (
  <React.Fragment>
    <TodoControls />
    <TodoCollection />
  </React.Fragment>
);

export default App;
