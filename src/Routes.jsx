
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import login from './components/login';
import register from './components/register';
//import AdminDashBoard from './container/AdminHeader';
import DashBoardContent from './components/Admin/DashBoard';
import DashBoardMedianIncome from './components/Admin/MedianIncome';
import DashBoardMedianIncomeEdit from './components/Admin/MedianIncomeEdit';

export const history = createHistory();
console.log('Router', history.location.pathname);
//var url=history.location.pathname
const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path='/' component={login} />
            <Route path='/Register' component={register} />
            <Route path='/AdminDashBoard' component={DashBoardContent} />
            <Route path='/DashBoardMedianIncome' component={DashBoardMedianIncome} />
            <Route path='/DashBoardMedianIncomeEdit' component={DashBoardMedianIncomeEdit} />
  
        </div>
    </Router>
);
export default Routes;

