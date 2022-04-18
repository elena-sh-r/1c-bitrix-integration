import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import Header from '../header/header';
import Footer from '../footer/footer';

import './app.module.css';



function App() {
  return (
    <Router basename='1c-bitrix-integration'>
      <>
        <Header />

        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound404 />
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default App;