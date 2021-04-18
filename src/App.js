import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {Switch, Route, Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import configureStore from "./redux/store";
import Home from './pages/home/Home';
import MainLayout from './layouts/main';
const App = () => {
  const hist = createBrowserHistory();
  let configStore = configureStore();
  const store = configStore.store;
  const persist = configStore.persistor;
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persist} loading={<p>Loading!!!</p>}>
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
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
