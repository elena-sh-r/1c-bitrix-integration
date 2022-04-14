import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import Home from './pages/home/home';
import NotFound404 from './pages/not-found-404/not-found-404';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound404 />
          </Route>

          <Route path='/1c-bitrix-integration' exact={true}>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default App;