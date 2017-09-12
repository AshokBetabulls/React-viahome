import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';


class AdminProfile extends Component {
  render() {
    return (
      <div>
       <HeadBar>
        
         
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <Link to="AdminDashBoard" className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardAdminProfile">Profile</Link>
                        </li>
                    
                    </ul>
                </div>
		</div>
        
        <div className="row">

            <div className="col-md-12">
                <section className="panel prfmodife">
                    <header className="panel-heading tab-bg-dark-navy-blue profiletabs">
                        <ul className="nav nav-tabs nav-justified ">
                            <li className="active">
                                <a data-toggle="tab" href="#contacts" >
                                    Profile
                                </a>
                            </li>
                            <li >
                                <a data-toggle="tab" href="#EditProfile">
                                    Edit Profile
                                </a>
                            </li>
                              <li >
                                <a data-toggle="tab" href="#ChangePassword">
                                    Change Password
                                </a>
                            </li>
                         
                        </ul>
                    </header>
                    <div className="panel-body">
                        <div className="tab-content tasi-tab">
                            <div id="ChangePassword" className="tab-pane">
                                <div className="position-center">
                                    
                                 <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal">
                                        <h2><u>CHANGE PASSWORD</u></h2>
                                    </div>
									<div className="row">
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Current Password" type="password" required />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="New Password" type="password" required />
											</div>
										</div>
										<div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Confirm Password" type="password" required />
											</div>
										</div>
										
									</div>
								
									
									<div className="pull-right profilebtns">
										<a href="#" className="main-btn">Cancel</a>
										<a href="#" className="main-btn" data-toggle="modal" data-target="#password" className="main-btn btnreact">Update</a>
									</div>
                                    </form>
                                </div>

                            </div>
                           
                           <div id="contacts" className="tab-pane  active">
                                <div className="position-center">
                                    
                                 <form role="form" className="form-horizontal" id="reg-login">
                                     <div className="row">
					                    <div className="col-md-12 profilepadd">
                                            <div className="prf-contacts sttng prf-personal">
                                                <h2> <u> Personal Information </u></h2>
                                            </div>
                                         </div>
                                     </div>
									<div className="row">
					                    <div className="col-md-2 profilepadd">
						                   <strong>First Name</strong> <span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   Kenn
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>Last Name</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   Baker
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>Address</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   7748 S.East End Chicago, IL 60649
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>E-mail</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   kbaker@sevenriversgroup.com
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>City</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   Chicago
					                    </div>
									</div>
                                     <div className="row">
					                    <div className="col-md-12 profilepadd">
                                            <div className="prf-contacts sttng prf-personal">
                                                <h2 className="mrg-top-15"> <u>Contact </u></h2>
                                            </div>
                                         </div>
                                     </div>
                                    <div className="row">
					                    <div className="col-md-2 profilepadd">
						                   <strong>Address 1</strong> <span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                  Chicago-Joliet-Naperville, IL HUD Metro FMR Area
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>Address 2</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                  7748 S.East End Chicago, IL 60649
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>Address</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   7748 S.East End Chicago, IL 60649
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>Phone</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   (630) 965-9322
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>Cell</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   (630) 965-9322
					                    </div>
									</div>
                                     
                                     

                                </form>
                                </div>

                            </div>
                            <div id="EditProfile" className="tab-pane ">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal">
                                        <h2><u>EDIT PROFILE INFORMATION </u></h2>
                                    </div>
									<div className="row">
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="First Name" type="text" value="Kenneth" required />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Last Name" type="text" value="Baker" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" value="7748 S.East End Chicago, IL 60649" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Email" type="email" value="kbaker@sevenriversgroup.com" required />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="City/Town" type="text" value="Chicago" required />
											</div>
										</div>
									</div>

									<div className="row">
										<div className="prf-contacts sttng">
											<h2><u>Contact </u></h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 1" type="text" value="Chicago-Joliet-Naperville, IL HUD Metro FMR Area" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 2" type="text" value="7748 S.East End Chicago, IL 60649" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Phone" type="text" value="(630) 965-9322" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Cell" type="text" value="(630) 965-9322" required />
											</div>
										</div>
									</div>
									
									<div className="pull-right profilebtns">
										<a href="#" className="main-btn">Cancel</a>
										<a href="#" className="main-btn" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Update</a>
									</div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
        
        </section>
    </section>
        
       </HeadBar>
                                        
                                        
                                        
                                    
                                        
          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="successmsg" className="modal fade">
              <div className="modal-dialog modal-md">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
        <div className="row">
      <div className="col-md-12 center-block text-center">
       <i className="fa fa-check fa-2x success-icon"></i>
       <h4 className="text-center">Profile was successfully updated.</h4>
      </div>
        </div>
                      </div>
                      <div className="modal-footer text-center center-block">
                          <a href="DashBoardAdminProfile"><button type="button" className="default-btn">OK</button></a>
                      </div>
                  </div>
              </div>
          </div>
                          

          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="password" className="modal fade">
              <div className="modal-dialog modal-md">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close changepwdhdr" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
        <div className="row">
      <div className="col-md-12 center-block text-center">
       <i className="fa fa-check fa-2x success-icon"></i>
       <h4 className="text-center">Your password has been changed sucessfully.</h4>
      </div>
        </div>
                      </div>
                      <div className="modal-footer center-block changepwdftr">
                          <a href="DashBoardAdminProfile"><button type="button" className="default-btn ">OK</button></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default AdminProfile;
