import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import Home from './pages';
import HomeProject1 from './pages/project1';
import HomeProject2 from './pages/project2';
import AboutUsSection from '../src/components/AboutUs';
import Footer from '../src/components/FooterSection';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project1">
            <HomeProject1 />
          </Route>
          <Route path="/project2">
            <HomeProject2 />
          </Route>
        </Switch>
        <AboutUsSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;
