import React, { Component } from 'react';
import HeadBar from '../Header';


class Projects extends Component {
  render() {
    return (
      <div>
        <HeadBar>
        
        
            {/*main content start */}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <a href="admin-dashboard.html" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="manageusers.html">Projects</a>
                        </li>
                      
                    </ul>
					
					
                </div>
		</div>
        {/* page start */}
			<section className="panel recent-project no-padding-left no-padding-right col-md-12">
                    <header className="panel-heading main-bg">
                        <div className="row">
                        <div className="col-md-6"><span className="pull-left">Projects List</span></div>
                        <div className="col-md-6"><span className="pull-right">Total Users:100</span></div>
                       </div>
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover table-striped general-table">
                            <thead>
                           <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>Users</th>
                                <th className="text-right">Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                                <th>Actions</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Gutsy</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 1</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
							
                            </tr>
                            <tr>
                                <td>Square</td>
                                <td>New Construction</td>
                                <td>User 2</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
                                
								
                            </tr>
							<tr>
                                <td>Wrench</td>
                                <td>Acquisition / Renovation</td>
                                <td >User 3</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
                                
								
                            </tr>
                            <tr>
                                <td>Hook</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 4</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
								
                            </tr>
                            <tr>
                                <td>Serve</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 5</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
                                
                            </tr>
                                <tr>
                                <td>Rebel</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 6</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                    <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
                            </tr>
                            <tr>
                                <td>Subdivision</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 7</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
                                
                            </tr>
                            <tr>
                                <td>Cobra</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 8</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
                            </tr>
                                <tr>
                                <td>Antique</td>
                                <td>New Construction</td>
                                <td>User 9</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i>
                                    </a>
                                </td>
                                
                            </tr>
                                <tr>
                                <td>Colusa</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 10</td>
                                <td className="text-right">6</td>
                                <td className="text-right">588,836.00</td>
                                <td>N/A</td>
                                    <td><a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></a></td>
                                
                            </tr>
                                 
                            </tbody>
                        </table>
                    </div>
                </section>
        {/* page end */}
             {/*-Pagenation start-- */}
           
            <ul className="pagination pull-right ">
                     
                   <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                   <li><a href="#">&raquo;</a></li>
               
            </ul>
          
        {/* page end */}
        </section>
    </section>
    {/*main content end */}
        </HeadBar>
        
      </div>
    );
  }
}

export default Projects;
