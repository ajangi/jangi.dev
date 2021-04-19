import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {Switch, Route, Router} from 'react-router-dom';
import {
  isBrowser,
  isMobile
} from "react-device-detect";
import {createBrowserHistory} from "history";
import configureStore from "./redux/store";
import HomeDesktop from './pages/desktop/home/Home';
import HomeMobile from './pages/mobile/home/Home';
const App = () => {
  const hist = createBrowserHistory();
  let configStore = configureStore();
  const store = configStore.store;
  const persist = configStore.persistor;
  const DesktopLayout = React.lazy(() => import('./layouts/desktop'));
  const MobileLayout = React.lazy(() => import('./layouts/mobile'));
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persist} loading={<p>Loading!!!</p>}>
          <Router history={hist}>
            <Switch>
              <React.Suspense fallback={<></>}>
                {(isBrowser) && 
                  <DesktopLayout>
                    <Route path="/">
                        <HomeDesktop hist={hist} />
                    </Route>
                  </DesktopLayout>
                }
                {(isMobile) && 
                  <MobileLayout>
                    <Route path="/">
                        <HomeMobile hist={hist} />
                    </Route>
                  </MobileLayout>
                }
              </React.Suspense>
              <Route render={() => (<div>Not Found!!</div>)} exact path='/*'/>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
