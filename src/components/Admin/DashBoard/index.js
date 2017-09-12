import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';


class DashBoard extends Component {
  render() {
    return (
      <HeadBar >
          {/*main content start*/}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <Link to="AdminDashBoard" className="current">Dashboard</Link>
                        </li>
                         
                    </ul>
                </div>
		</div>
        {/* page start*/}
	
<section className="panel">
                    <header className="panel-heading main-bg">
                        <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-4 headiconspl"><span>Projects List</span></div>
                        <div className="col-md-4 col-xs-12 col-sm-4 headiconstp"><span>Total Projects:120</span></div>
                        <div className="col-md-4 col-xs-12 col-sm-4 headiconstu"><span>Total Users:100</span></div>
                       </div>
                        
                    </header>
                    <div className="panel-body table-responsive">
                    <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                               
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Gutsy</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                
							
                            </tr>
                            <tr>
                                <td>Square</td>
                                <td>New Construction</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
                                
								
                            </tr>
							<tr>
                                <td>Wrench</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
                                
								
                            </tr>
                            <tr>
                                <td>Hook</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
								
                            </tr>
                            <tr>
                                <td>Serve</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
                                
                            </tr>
                                <tr>
                                <td>Rebel</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                    
                            </tr>
                            <tr>
                                <td>Subdivision</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                
                                
                            </tr>
                            <tr>
                                <td>Cobra</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                
                            </tr>
                                <tr>
                                <td>Antique</td>
                                <td>New Construction</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                   
                                
                            </tr>
                                <tr>
                                <td>Colusa</td>
                                <td>Acquisition / Renovation</td>
                                <td>6</td>
                                <td className="text-right">588,836.00</td>
                                <td>N/A</td>
                                 
                                
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>




        {/* page end*/}
        </section>
    </section>
    {/*main content end*/}
      </HeadBar>
    );
  }
}

export default DashBoard;
