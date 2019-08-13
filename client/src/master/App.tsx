import React from 'react';
import '../include/bootstrap';
import './main.css'
import { Provider } from 'react-redux';
 import { store } from '../redux/Store';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NavComponent } from '../components';
import {
   MovieComponent, DashboardPg, SomethingWentWrongPg
} from '../containers';
// import SearchResult from '../components/result/SearchResult';


const App: React.FC = () => {
  return (
     <Provider store={store}>
      <HashRouter>  
        <NavComponent />
        <Switch>
          <Route exact path="/" component={MovieComponent} />
          {/* <Route exact path="/movies" component={MovieComponent} /> */}
          <Route exact path="/dashboard" component={DashboardPg} />
          <Route exact path="/home/404" component={SomethingWentWrongPg} />
          <Redirect from='/*' to='/home/404'/>
        </Switch>        
      </HashRouter>
     </Provider>
  );
}

export default App;