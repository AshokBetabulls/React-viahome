
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import login from './components/login';
import register from './components/register';
import AdminDashBoard from './container/AdminHeader';

export const history = createHistory();
//console.log('Router', history);
const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path='/' component={login} />
            <Route path='/register' component={register} />
        <Route path='/AdminDashBoard' component={AdminDashBoard} />
  
        </div>
    </Router>
);
export default Routes;

