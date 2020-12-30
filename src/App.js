import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import Privacy from './components/Privacy';
import BackgroundImg from './components/BackgroundImg';

const App = () => {
  return (
    <>
      <BackgroundImg />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
