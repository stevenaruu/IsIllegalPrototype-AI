import React from 'react';
import HomePage from './views/home_page/HomePage';
import DetailPage from './views/detail_page/DetailPage';
import IllegalPage from './views/illegal_page/IllegalPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/detail' component={DetailPage} />
      <Route exact path='/illegal' component={IllegalPage} />
    </Switch>
  );
}

export default App;
