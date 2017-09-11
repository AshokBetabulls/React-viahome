import React, { Component } from 'react';
import HeadBar from '../Header';


class UserManage extends Component {
  render() {
    return (
      <div>
        <HeadBar>
        
            {/* main content start */}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <a href="admin-dashboard.html" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="manageusers.html">Manage Users</a>
                        </li>
                      
                    </ul>
					
					
                </div>
		</div>
        {/*  page start */}
			<section className="panel mngusradjust">
                    <header className="panel-heading main-bg">
                        Users List
                        
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
                                <th >User Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th >Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>112</td>
                                <td>User 1</td>
                                <td>user1@getviahome.com</td>
                                <td>9491538125</td>
                                 <td>New York</td>
                                
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn1" data-original-title="Activate" onclick="active()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn2" data-original-title="Deactivate" onclick="deactive()"/>
                  
                                       

                                        
								</div>
								</td>
                            </tr>
                            <tr>
                                <td>113</td>
                                <td>User 2</td>
                                <td>user2@getviahome.com</td>
                                <td>7207631035</td>
                                <td>California</td>
                                
                               
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn3" data-original-title="Activate" onclick="active1()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn4" data-original-title="Deactivate" onclick="deactive1()"/>
                  
                                       

                                        
								</div>
								</td>
                            </tr>
							<tr>
                                <td>115</td>
                                <td>User 3</td>
                                <td>user3@getviahome.com</td>
                                <td>8897889337</td>
                                <td>Pennsylvania</td>
                                
                               
									
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn5" data-original-title="Activate" onclick="active2()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn6" data-original-title="Deactivate" onclick="deactive2()"/>
                  
                                       

                                        
								</div>
								</td>
								
                            </tr>
							<tr>
                                <td>118</td>
                                <td>User 6</td>
                                <td>user6@getviahome.com</td>
                                <td>9988452536</td>
                                <td>Arizona</td>
                                
                                
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn7" data-original-title="Activate" onclick="active3()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn8" data-original-title="Deactivate" onclick="deactive3()"/>
                  
                                       

                                        
								</div>
								</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}
        </HeadBar>
        
        
         {/*  Modal remove project  */}
          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="remove" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Please Confirm</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<h4>Are you sure you want to remove?</h4>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn" id="myButton" type="button">OK</button>
                      </div>
                  </div>
              </div>
          </div>
          {/*  modal  */}
    
    
     {/*  Modal activate project  */}


          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" name="onoffswitch2" id="active" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Please Confirm</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<h4>Are you sure you want to activate?</h4>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn btnreact" id="myButton" type="button">OK</button>
                      </div>
                  </div>
              </div>
          </div>


          {/*  modal end activate  */}
    
     {/*  Modal deactivate project  */}

          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="deactivate" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Please Confirm</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<h4>Are you sure you want to deactivate?</h4>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn" id="myButton" type="button">OK</button>
                      </div>
                  </div>
              </div>
          </div>

          {/*  modal end deactivate  */}
      
      </div>
    );
  }
}

export default UserManage;
