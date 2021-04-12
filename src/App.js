import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Home from './pages/home/Home';
import MainLayout from './layouts/main';
const App = () => {
  const hist = createBrowserHistory();
  return (
    <div className="App">
      <Router history={hist}>
          <Switch>
              <MainLayout>
                <Route path="/">
                    <Home hist={hist} />
                </Route>
              </MainLayout>
              <Route render={() => (<div>Not Found!!</div>)} exact path='/*'/>
          </Switch>
        </Router>
    </div>
  );
};

export default App;
