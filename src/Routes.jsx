
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import login from './components/login';
import register from './components/register';
//import AdminDashBoard from './container/AdminHeader';
import DashBoardContent from './components/Admin/DashBoard';

import DashBoardMedianIncome from './components/Admin/MedianIncome';
import DashBoardMedianIncomeEdit from './components/Admin/MedianIncomeEdit';

import DashBoardMTSPRents from './components/Admin/MTSPRents';
import DashBoardMTSPRentsEdit from './components/Admin/MTSPRentsEdit';

import DashBoardRCAssumptions from './components/Admin/RCAssumptions';
import DashBoardRCAssumptionsEdit from './components/Admin/RCAssumptionsEdit';

import DashBoardUserManage from './components/Admin/UserManage';

import DashBoardProjects from './components/Admin/Projects';
import DashBoardProjectsEdit from './components/Admin/ProjectsEdit';

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
            
            <Route path='/DashBoardMTSPRents' component={DashBoardMTSPRents} />
            <Route path='/DashBoardMTSPRentsEdit' component={DashBoardMTSPRentsEdit} />
            
            <Route path='/DashBoardRCAssumptions' component={DashBoardRCAssumptions} />
            <Route path='/DashBoardRCAssumptionsEdit' component={DashBoardRCAssumptionsEdit} />
            
        
            <Route path='/DashBoardUserManage' component={DashBoardUserManage} />
            
            
            <Route path='/DashBoardProjects' component={DashBoardProjects} />
            <Route path='/DashBoardProjectsEdit' component={DashBoardProjectsEdit} />
  
        </div>
    </Router>
);
export default Routes;

