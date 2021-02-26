import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/signin" component={SignInPage} />
        <Route path="/calculating" component={CalculatingPage} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
