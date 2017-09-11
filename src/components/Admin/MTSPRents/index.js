import React, { Component } from 'react';
import HeadBar from '../Header'


class MTSPRents extends Component {
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
                            <a href="admin-dashboard.html" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="mtsprents.html">MTSP Rents</a>
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
						  <span className="browse input-group-btn browsebtn">
							<button className="srchicon default-btn btn" type="button"><i className="fa fa-search"></i> Browse</button>
						  </span>
						</div>
					</div>
					<div className="col-md-2 col-sm-4 col-xs-12">
						<a className="default-btn pull-right addbtn" href="addmtsprents.html">Add</a>
					</div>
					
				</div>
            <div className="clearfix"></div>
		
        {/*  page start */}
			<section className="panel">
                    <header className="panel-heading main-bg">
                      Multifamily Tax Subsidy Program Rents
                       
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table mangaeicons responsivetbl-adjustadmindashboard">
                            <thead>
                            <tr className="tblalignmentmedianincome">
								
                                <th><span className="pull-left">Area Name</span></th>
                                <th>2017&nbsp;Median&nbsp;Income<br /><span align="center">($)</span></th>
                                <th>1&nbsp;Person <br /><span align="center">($)</span></th>
                                <th>2&nbsp;People <br /><span align="center">($)</span></th>
                                <th>3&nbsp;People <br /><span align="center">($)</span></th>
                                <th>4&nbsp;People <br /><span align="center">($)</span></th>
                                <th>5&nbsp;People <br /><span align="center">($)</span></th>
                                <th>6&nbsp;People <br /><span align="center">($)</span></th>
                                <th>7&nbsp;People <br /><span align="center">($)</span></th>
                                <th>8&nbsp;People <br /><span align="center">($)</span></th>
                                <th>State <br /><span>&nbsp;</span></th>
                                <th width="100"><span className="pull-left">Actions</span><br /><p></p></th>
                            </tr>
                            </thead>
                            <tbody>
                          <tr>
						<td>Montgomery, AL MSA</td>
						<td className="text-right">1492.5</td>
						<td className="text-right">627</td>
						<td className="text-right">717</td>
						<td className="text-right">807</td>
						<td className="text-right">895.5</td>
						<td className="text-right">967.5</td>
						<td className="text-right">1039.5</td>
						<td className="text-right">1111.5</td>
						<td className="text-right">1183.5</td>
						<td>  AL</td>
						<td>
									<a href="editfairmarketrents.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				        </td>
					</tr>
					<tr>
						<td>Daphne-Fairhope-Foley, AL MSA</td>
						<td className="text-right">1537.5</td>
						<td className="text-right">646.5</td>
						<td className="text-right">738</td>
						<td className="text-right">831</td>
						<td className="text-right">922.5</td>
						<td className="text-right">997.5</td>
						<td className="text-right">1071</td>
						<td className="text-right">1144.5</td>
						<td className="text-right">1218</td>
						<td>  AL</td>
						<td>
									<a href="editfairmarketrents.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				        </td>
					</tr>
					<tr>
						<td>Barbour County, AL</td>
						<td className="text-right">1152.5</td>
						<td className="text-right">484.5</td>
						<td className="text-right">553.5</td>
						<td className="text-right">622.5</td>
						<td className="text-right">691.5</td>
						<td className="text-right">747</td>
						<td className="text-right">802.5</td>
						<td className="text-right">858</td>
						<td className="text-right">913.5</td>
						<td>  AL</td>
						<td>
									<a href="editfairmarketrents.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				        </td>
					</tr>
					<tr>
						<td>Birmingham-Hoover, AL HUD Metro FMR Area</td>
						<td className="text-right">1577.5</td>
						<td className="text-right">663</td>
						<td className="text-right">757.5</td>
						<td className="text-right">852</td>
						<td className="text-right">946.5</td>
						<td className="text-right">1023</td>
						<td className="text-right">1098</td>
						<td className="text-right">1174.5</td>
						<td className="text-right">1249.5</td>
						<td>  AL</td>
						<td>
									<a href="editfairmarketrents.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				        </td>
					</tr>
					<tr>
						<td>Birmingham-Hoover, AL HUD Metro FMR Area</td>
						<td className="text-right">1577.5</td>
						<td className="text-right">663</td>
						<td className="text-right">757.5</td>
						<td className="text-right">852</td>
						<td className="text-right">946.5</td>
						<td className="text-right">1023</td>
						<td className="text-right">1098</td>
						<td className="text-right">1174.5</td>
						<td className="text-right">1249.5</td>
						<td>  AL</td>
						<td>
									<a href="editfairmarketrents.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				        </td>
					</tr>
					<tr>
						<td>Bullock County, AL</td>
						<td className="text-right">1152.5</td>
						<td className="text-right">484.5</td>
						<td className="text-right">553.5</td>
						<td className="text-right">622.5</td>
						<td className="text-right">691.5</td>
						<td className="text-right">747</td>
						<td className="text-right">802.5</td>
						<td className="text-right">858</td>
						<td className="text-right">913.5</td>
						<td>  AL</td>
						<td>
									<a href="editfairmarketrents.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
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
        
        {/*  Modal  */}
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
                          <button className="main-btn" type="button">Confirm</button>
                      </div>
                  </div>
              </div>
          </div>
          {/*  modal  */}
        
      </div>
    );
  }
}

export default MTSPRents;