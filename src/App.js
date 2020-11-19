import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import CalculatingPage from './pages/calculating';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculating" component={CalculatingPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
