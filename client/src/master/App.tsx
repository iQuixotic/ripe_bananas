import React from 'react';
import { Provider } from 'react-redux';
 import { store } from '../redux/Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavComponent } from '../components';
import {
   MovieComponent, DashboardPg 
} from '../containers';


const App: React.FC = () => {
  return (
     <Provider store={store}>
      <BrowserRouter>        
        <Switch>
          <Route exact path="/nav" component={NavComponent} />
          <Route exact path="/" component={MovieComponent} />
          <Route exact path="/dashboard" component={DashboardPg} />
        </Switch>        
      </BrowserRouter>
     </Provider>
  );
}

export default App;