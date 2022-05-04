import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import Header from '../header/header';
import Footer from '../footer/footer';

import './app.module.css';

const App = () => {
  const funcB24 = (w, d, u) => {
    const s = d.createElement('script');
    s.async = true;
    s.src = `${u}?${(Date.now() / 180000)}`;
    const h = d.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s, h);
  };

  return (
    <Router basename="1c-bitrix-integration">
      <>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home funcB24={funcB24} />
          </Route>
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  );
};

export default App;
