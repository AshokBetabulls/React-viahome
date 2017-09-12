import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';


class RCAssumptions extends Component {
  render() {
    return (
      <div>
        <HeadBar>
        
            {/* main content start */}
    <section id="main-content">
        <section className="wrapper">
		
			<div className="col-md-6 col-sm-12 col-xs-12 no-padding-left">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <Link to="AdminDashBoard" className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardRCAssumptions">RC Assumptions</Link>
                        </li>
                      {/*    <li>
                            <a className="current" href="#">Request Project</a>
                        </li>   */}
                    </ul>
					
					{/*  <div id="sb-search" className="sb-search">
						<form>
							<input className="sb-search-input" placeholder="Enter your search term..." type="text" value="" name="search" id="search">
							<input className="sb-search-submit" type="submit" value="">
							<span className="sb-icon-search"></span>
						</form>
					</div>  */}
                </div>
				<div className="col-md-6 col-sm-12 col-xs-12 brfileadjust no-padding-right">
					<div className="form-group col-md-10 col-sm-8 col-xs-12">
						<input type="file" name="img[]" className="file" />
						<div className="input-group pull-right">
						  <span className="input-group-addon"><i className="fa fa-file"></i></span>
						  <input type="text" className="form-control custom-input" disabled placeholder="Upload File" />
						  <span className="input-group-btn browsebtn">
							<button className="browse srchicon default-btn btn" type="button"><i className="fa fa-search"></i> Browse</button>
						  </span>
						</div>
					</div>
					<div className="col-md-2 col-sm-4 col-xs-12">
						<Link className="default-btn pull-right addbtn" to="DashBoardRCAssumptionsAdd">Add</Link>
					</div>
					
				</div>
		<div className="clearfix"></div>
        {/*  page start */}
            
              <div className="row renovationcosttable">
    <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                        Demolition
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Demolition</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">3.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                 <td></td>
                                <td>Substantial</td>
                                <td className="text-right">1.50</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Moderate</td>
                                <td className="text-right">-</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Limited</td>
                                <td className="text-right">-</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
    <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                        Roof
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Roof</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Tear-Off w/ Insulation</td>
                                <td className="text-right">9.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Re-Roof w/ Insulation</td>
                                <td className="text-right">6.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Tear-Off w/o Insulation</td>
                                <td className="text-right">7.50</td>
                              <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Re-Roof w/o Insulation</td>
                                <td className="text-right">4.50</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
      
    </div>
  </div>
            
    <div className="row renovationcosttable">
    <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                       Heating
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th> Heating</th>
                                <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Individual Apt Heat / AC</td>
                                <td className="text-right">7,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Individual Apt Heat</td>
                                <td className="text-right">4,500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Replace Steam Boiler</td>
                                <td className="text-right">1,500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Minor Repair</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
    <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                        Hot Water
                        
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Hot Water</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">6,500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">4,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">2,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
      
    </div>
        
        <div className="clearfix"></div>
         <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                        Interior
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Interior</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">4,000.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                 <td></td>
                                <td>Substantial</td>
                                <td className="text-right">2,500.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Moderate</td>
                                <td className="text-right">1,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Limited</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
        
       
          <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                       Overall Ballpark
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Overall Ballpark</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">70.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">40.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">30.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">10.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                <tr>
                                    <td></td>
                                <td>No Renovation</td>
                                <td className="text-right">-</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                <tr>
                                    <td></td>
                                <td>New Construction</td>
                                <td className="text-right">150.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
        {/* window estimate table */}
        
         <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                       Window Estimate
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th> Window Estimate</th>
                               <th> Repair Level</th>
                                <th className="text-right">e.a ($)</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">80</td>
                                <td>Gut</td>
                                <td className="text-right">300.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">150.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">100.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">50.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
        
        {/* -electric table */}
        <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                       Electric
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>  Electric</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ per unit</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center"></td>
                                <td>Gut</td>
                                <td className="text-right">6000.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">2,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">1,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
      {/* -con. interest table-- */}  
        <div className="clearfix"></div>
         <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                       Con. Interest
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th  className="text-right">Con. Interest</th>
                               <th  className="text-right"> Reserve Level (%)</th>
                                <th className="text-right">$ per unit</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-right">LTC</td>
                                <td  className="text-right">6.50</td>
                                <td className="text-right">20,702.45</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td  className="text-right">90%</td>
                                <td  className="text-right">8.50</td>
                                <td className="text-right">27,072.43</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td  className="text-right">Draw %</td>
                                <td  className="text-right">12.00%</td>
                                <td className="text-right">38,219.90</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td  className="text-right">80%</td>
                                <td  className="text-right">15.00</td>
                                <td className="text-right">47,774.88</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
        {/* -Entry way table */}
        
          <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                       Entryway
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Entryway</th>
                               <th> Repair Level (%)</th>
                                <th className="text-right">$/ sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Replace High</td>
                                <td className="text-right">2,500.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Replace Med</td>
                                <td className="text-right">1,500.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Replace Low</td>
                                <td className="text-right">1,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>None</td>
                                <td className="text-right">4.50</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
        {/* -plumbing Table- */}
        
        <div className="col-md-6 col-sm-12 col-xs-12" >
        	<section className="panel">
                    <header className="panel-heading main-bg">
                      Plumbing
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Plumbing</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ per unit</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center"></td>
                                <td>Gut</td>
                                <td className="text-right">12,000.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">8,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">6,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">2,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>
     
    </div>
        
        

    
        
        
        
        
  </div>
		
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}
        </HeadBar>
        
         {/* Modal */}
          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="delete" className="modal fade">
              <div className="modal-dialog modal-md">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Please Confirm</h4>
                      </div>
                      <div className="modal-body">
       <div className="row">
        <div className="col-md-8 col-md-offset-2">
                                    <h4>Are you sure you want to delete?</h4>
        </div>
       </div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn btnreact" type="button">Confirm</button>
                      </div>
                  </div>
              </div>
          </div>
           {/* modal */}
      </div>
    );
  }
}

export default RCAssumptions;