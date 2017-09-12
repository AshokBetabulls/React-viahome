import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';


class MedianIncomeAdd extends Component {
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
                            <Link to="AdminDashBoard" className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardMedianIncomeAdd">Add Median Income</Link>
                        </li>
                        {/* <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}

        <div className="row">
            
            <div className="col-md-12">
                <section className="panel">
                    <header className="panel-heading main-bg">
                        Add Median Income
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                    </header>
                    <div className="panel-body">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal cust-form-group" id="reg-login">
{/* 
									<div className="col-md-12">
									<div className="prf-contacts sttng prf-personal">
                                        <h2>Add Median Income</h2>
                                    </div>
									</div>
 */}
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">Area Name</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">2017 Median Income</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">1 Person</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">2 Person</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">3 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">4 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">5 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">6 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">7 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">8 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" />
											</div>
										</div>
                                       
                                        
                                      

									<div className="col-md-12">
									<div className="pull-right profilebtns">
										<a href="#" className="main-btn">Cancel</a>
										<a href="javascrip:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Add</a>
									</div>
									</div>
                                    </form>
                                </div>

                            
                    </div>
                </section>
            </div>
        </div>
        {/*  page end */}
        </section>
    </section>

    {/* main content end */}
        
        </HeadBar>
        
            {/*  Modal  */}
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
       <h4 className="text-center">Median income added successfully.</h4>
      </div>
        </div>
                      </div>
                      <div className="modal-footer text-center center-block">
       {/*  <button type="button" className="default-btn">OK</button>  */}
                   <a href="DashBoardMedianIncome"><button type="button" className="default-btn">OK</button></a>
                      </div>
                  </div>
              </div>
          </div>
          {/*  modal  */}
        
        
      </div>
    );
  }
}

export default MedianIncomeAdd;