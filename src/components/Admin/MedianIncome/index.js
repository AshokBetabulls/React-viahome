import React, { Component } from 'react';
import HeadBar from '../Header'


class MedianIncome extends Component {
  render() {
    return (
      <div>
        <HeadBar>
        
           {/*main content start*/}
    <section id="main-content">
        <section className="wrapper">
		
			<div className="col-md-6 col-sm-12 col-xs-12 no-padding-left">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <a href="admin-dashboard.html" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="medianincome.html">Median Income</a>
                        </li>
                      {/*   <li>
                            <a className="current" href="#">Request Project</a>
                        </li>  */}
                    </ul>
					
					
                </div>
            
				<div className="col-md-6 col-sm-12 col-xs-12 brfileadjust no-padding-right">
                  
					<div className="form-group col-md-10 col-sm-8 col-xs-12">
						<input type="file" name="img[]" className="file" />
						<div className="input-group pull-right">
						  <span className="input-group-addon"><i className="fa fa-file"></i></span>
						  <input type="text" className="form-control custom-input" disabled placeholder="Upload File" />
						  <span className="browse input-group-btn browsebtn">
							<button className="srchicon default-btn btn" ><i className="fa fa-search"></i> Browse</button>
						  </span>
						</div>
					</div>
                        
					<div className="col-md-2 col-sm-4 col-xs-12">
						<a className="default-btn pull-right addbtn" href="addmedianincome.html">Add</a>
					</div>
					
				</div>
            <div className="clearfix"></div>
        {/* page start*/}
			<section className="panel">
                    <header className="panel-heading main-bg">
                        Median Income
                        {/* <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span> */}
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table mangaeicons responsivetbl-adjustadmindashboard">
                             <thead>
                            <tr className="tblalignmentmedianincome">
								
                                <th><span className="pull-left">Area Name</span></th>
                                <th>2017&nbsp;Median&nbsp;Income<br />($)</th>
                                <th>1 Person <br />($)</th>
                                <th>2 People <br />($)</th>
                                <th>3 People <br />($)</th>
                                <th>4 People <br />($)</th>
                                <th>5 People <br />($)</th>
                                <th>6 People <br />($)</th>
                                <th>7 People <br />($)</th>
                                <th>8 People <br />($)</th>
                                <th width="160"><span className="pull-left">Actions</span></th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Montgomery, AL MSA</td>
                                <td className="text-right">59,700.00</td>
                                <td className="text-right">25,080.00</td>
                                <td className="text-right">28,680.00</td>
                                <td className="text-right">32,280.00</td>
                                <td className="text-right">35,820.00</td>
                                <td className="text-right">38,700.00</td>
                                <td className="text-right">41,580.00</td>
                                <td className="text-right">44,460.00</td>
                                <td className="text-right">47,340.00</td>
                                <td>

                                    <a href="editmedianincome.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></a>

                                    <a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
                                
                            </tr>
                            <tr>
                                <td>Daphne-Fairhope-Foley, AL MSA</td>
                                <td className="text-right">61,500.00</td>
                                <td className="text-right">25,860.00</td>
                                <td className="text-right">29,520.00</td>
                                <td className="text-right">33,240.00</td>
                                <td className="text-right">36,900.00</td>
                                <td className="text-right">39,900.00</td>
                                <td className="text-right">42,840.00</td>
                                <td className="text-right">45,780.00</td>
                                <td className="text-right">48,720.00</td>
                                <td width="160">
									<a href="editmedianincome.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
								
                            </tr>
							<tr>
                                <td>Barbour County, AL</td>
                                <td className="text-right">46,100.00</td>
                                <td className="text-right">19,380.00</td>
                                <td className="text-right">22,140.00</td>
                                <td className="text-right">24,900.00</td>
                                <td className="text-right">27,660.00</td>
                                <td className="text-right">29,880.00</td>
                                <td className="text-right">32,100.00</td>
                                <td className="text-right">34,320.00</td>
                                <td className="text-right">36,540.00</td>
                               

                                 <td>
									<a href="editmedianincome.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
								

                            </tr>
							<tr>
                                <td>Birmingham-Hoover, AL HUD Metro FMR Area</td>
                                <td className="text-right">63,100.00</td>
                                <td className="text-right">26,520.00</td>
                                <td className="text-right">30,300.00</td>
                                <td className="text-right">34,080.00</td>
                                <td className="text-right">37,860.00</td>
                                <td className="text-right">40,920.00</td>
                                <td className="text-right">43,920.00</td>
                                <td className="text-right">46,980.00</td>
                                <td className="text-right">49,980.00</td>
                                 <td>
									<a href="editmedianincome.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
								
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            
        {/* page end*/}
        </section>
    </section>
    {/* main content end*/}
      
      
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
                          <button className="main-btn" type="button">Confirm</button>
                      </div>
                  </div>
              </div>
          </div>
         {/* modal */}
        
        </HeadBar>
        
        
        
        
        
      </div>
    );
  }
}

export default MedianIncome;