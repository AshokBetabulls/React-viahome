import React, { Component } from 'react';
import  { Link } from 'react-router-dom'


class register extends Component {
  render() {
    return (
        <div>

  <div className="container">

      <form className="form-signin form-reg" action="index.html">
        <h2 className="form-signin-heading">registration now</h2>
        <div className="reg-wrap" id="reg-login">
			<div className="col-md-12">
				<p><u>Enter your personal details below</u></p>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info">
					<input placeholder="First Name" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info">
					<input placeholder="Last Name" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info regadjust">
					<input placeholder="Email" type="text" required />
				</div>
			</div>
			
			<div className="col-md-12">
				<p><u>Enter your account details below</u></p>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info">
					<input placeholder="User Name" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" >
					<input placeholder="Password" type="password" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info regadjust">
					<input placeholder="Re-type Password" type="password" required />
				</div>
			</div>
			<div className="col-md-12">
				<label className="active customlabel reg-bottom">
				  <input type="checkbox" name='email1' /><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> I agree to the Terms of Service and Privacy Policy</span>
				</label>
				
			</div>
            <button className="btn btn-md btn-login btn-block" type="submit" data-toggle="modal" href="#sucess">Submit</button>

            <div className="regalready">
                Already Registered.
                <Link className="" to="">
                    Login
                </Link>
            </div>

        </div>

      </form>

    </div>


   {/* Placed js at the end of the document so the pages load faster */}


     {/* Modal */}
         {/*  <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="sucess" className="modal fade"> */}
          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"  id="sucess" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title sucesspopup">Registration Sucessful</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2 sucesspopup">
									<div className="" id="cust-login">
										<h4>You have sucessfully registered for viahome<br />
                                        Please login with your username and password.</h4>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button className="main-btn" type="button" id="myButton">Return to login</button>
                      </div>
                  </div>
              </div>
          </div>
  

  </div>
    );
  }
}

export default register;