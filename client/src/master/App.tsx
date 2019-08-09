import React from 'react';
import '../include/bootstrap';
import './main.css'
import { Provider } from 'react-redux';
 import { store } from '../redux/Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavComponent } from '../components';
import {
   MovieComponent, DashboardPg
} from '../containers';
import Test from '../components/carousel/test';


const App: React.FC = () => {
  return (
     <Provider store={store}>
      <BrowserRouter>  
        <NavComponent />
        <Switch>
          <Route exact path="/movies" component={MovieComponent} />
          <Route exact path="/dashboard" component={DashboardPg} />
        </Switch>        
      </BrowserRouter>
     </Provider>
  );
}

export default App;