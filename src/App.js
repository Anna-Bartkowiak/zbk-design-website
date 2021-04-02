import React, { useState } from 'react';
import GlobalStyle from '../src/globalStyles.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import Home from './pages';
import HomeProject1 from './pages/project1';
import HomeProject2 from './pages/project2';
import HomeProject3 from './pages/project3';
import HomeProject4 from './pages/project4';
import OfferSection from '../src/components/Offer';
import AboutUsSection from '../src/components/AboutUs';
import Footer from '../src/components/FooterSection';


export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <GlobalStyle />
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
          <Route path="/project3">
            <HomeProject3 />
          </Route>
          <Route path="/project4">
            <HomeProject4 />
          </Route>
        </Switch>
        <OfferSection />
        <AboutUsSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;
