import React from 'react';
import { Provider } from 'react-redux';
 import { store } from '../Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavComponent from '../components/nav/navthing';
import MovieComponent from '../components/movie.component'
// If you exported the connected component as a default export
// ensure you importing that component with a default import (no {})

const App: React.FC = () => {
  return (
     <Provider store={store}>
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/a" component={NavComponent} />
          <Route exact path="/" component={MovieComponent} />
        </Switch>
        
      </BrowserRouter>
     </Provider>
  );
}

export default App;