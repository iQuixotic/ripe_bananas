import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavComponent from '../components/nav/navthing';
// If you exported the connected component as a default export
// ensure you importing that component with a default import (no {})

const App: React.FC = () => {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        {/* <NavComponent /> */}
        <Switch>
          <Route exact path="/a" component={NavComponent} />
        </Switch>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;