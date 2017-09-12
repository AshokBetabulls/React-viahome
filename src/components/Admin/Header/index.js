import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
        
               <section id="container" >
{/*header start*/}
<header className="header fixed-top clearfix">
{/*logo start*/}
<div className="brand">
    <NavLink to="AdminDashBoard" className="logo">
        <img src="images/main-logo.png" className="img-responsive" />
    </NavLink>
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
</div>
{/*logo end*/}


<div className="top-nav clearfix">
    {/*search & user info start*/}
    <ul className="nav pull-right top-menu">
        {/* <li>
            <input type="text" className="form-control search" placeholder=" Search">
        </li> */}
        {/* user login dropdown start*/}
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src="images/default.png" />
                <span className="username">Admin</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><Link to="DashBoardAdminProfile"><i className=" fa fa-suitcase"></i>Profile</Link></li>
              
                <li><Link to="/"><i className="fa fa-key"></i> Log Out</Link></li>
            </ul>
        </li>
        {/* user login dropdown end */}
        {/* <li>
            <div className="toggle-right-box">
                <div className="fa fa-bars"></div>
            </div>
        </li> */}
    </ul>
    {/*search & user info end*/}
</div>
</header>
{/*header end*/}
<aside>
    <div id="sidebar" className="nav-collapse">
        {/* sidebar menu start*/}
        <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
                <li>
        {/*   <Link className="active" to="AdminDashBoard">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </Link>*/}
            <NavLink className="" to="AdminDashBoard">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="sub-menu">
                    <a href="javascript:;">
                        <i className="fa fa-building"></i>
                        <span>Configuration</span>
                    </a>
                    <ul className="sub">
                       <li><NavLink to="DashBoardMedianIncome" data-placement="top" data-toggle="tooltip"  data-original-title="Median  Income">Median Income</NavLink></li>
                        <li><NavLink to="DashBoardMTSPRents" data-placement="top" data-toggle="tooltip"  data-original-title="Multifamily Tax Subsidy Program">MTSP Rents</NavLink></li>
                       <li><NavLink to="DashBoardRCAssumptions" data-placement="top" data-toggle="tooltip"  data-original-title="Renovation Cost Assumptions">RC Assumptions</NavLink></li>

                    </ul>
                </li>
 
            <li>
                    <NavLink to="DashBoardUserManage">
                        <i className="fa fa-users"></i>
                        <span>Users</span>
                    </NavLink>
                
                </li>

                <li>
                    <NavLink to="DashBoardProjects">
                        <i className="fa fa-tasks"></i>
                        <span>Projects</span>
                    </NavLink>
                
                </li>

            </ul>            
        <a href="http://betabulls.com/"><img src="images/betabulls.png" alt="" className="img-responsive" /></a>
        </div>
        
        {/* sidebar menu end*/}
    </div>
</aside>
{/*sidebar end*/}
        
        
        {/* Content main Page */}
        
         {this.props.children}
        
         {/* <DashBoardContent /> */}
         {/* Content main Page */}
 


</section>
    
        
      </div>
    );
  }
}

export default Header;