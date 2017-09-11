import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
        
               <section id="container" >
{/*header start*/}
<header className="header fixed-top clearfix">
{/*logo start*/}
<div className="brand">
    <a href="admin-dashboard.html" className="logo">
        <img src="images/main-logo.png" className="img-responsive" />
    </a>
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
                <li><a href="profile.html"><i className=" fa fa-suitcase"></i>Profile</a></li>
              
                <li><a href="index.html"><i className="fa fa-key"></i> Log Out</a></li>
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
                    <a className="active" href="admin-dashboard.html">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="sub-menu">
                    <a href="javascript:;">
                        <i className="fa fa-building"></i>
                        <span>Configuration</span>
                    </a>
                    <ul className="sub">
                       <li><a href="medianincome.html" data-placement="top" data-toggle="tooltip"  data-original-title="Median  Income">Median Income</a></li>
                        <li><a href="mtsprents.html" data-placement="top" data-toggle="tooltip"  data-original-title="Multifamily Tax Subsidy Program">MTSP Rents</a></li>
                       <li><a href="renovationcostassumptions.html" data-placement="top" data-toggle="tooltip"  data-original-title="Renovation Cost Assumptions">RC Assumptions</a></li>

                    </ul>
                </li>
 
            <li>
                    <a href="manageusers.html">
                        <i className="fa fa-users"></i>
                        <span>Users</span>
                    </a>
                
                </li>

                <li>
                    <a href="admindashboardprojectslist.html">
                        <i className="fa fa-tasks"></i>
                        <span>Projects</span>
                    </a>
                
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