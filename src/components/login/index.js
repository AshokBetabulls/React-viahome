import React, { Component } from 'react';
import  { Link } from 'react-router-dom'


class login extends Component {
  render() {
    return (
        <div>

    <div className="container">

      <form className="form-signin" action="index.html">
        <img src="images/main-logo.png" alt="Logo" className="img-responsive"/>
        <div className="login-wrap">
            <div className="user-login-info" id="cust-login">
				<input placeholder="Username" id="user" type="text" required />
				<input placeholder="Password" type="password"  required />
			</div>
                <label className="active customlabel">
				  <input type="checkbox" name='email1' /><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> Remember Password</span>
				</label>
				<span className="pull-right">
                    <a data-toggle="modal" href="#forgotpwd"> Forgot Password?</a>
                </span>
            <button className="btn btn-lg btn-login btn-block" id="SignIn" type="submit" data-toggle="modal" data-target="#signIn">Sign in</button>

            <div className="registration">
                Don't have an account yet?
                <Link className="" to="register">
                    Create an account
                </Link>
            </div>
        </div>
         
          
          
      </form>
    </div>
  
         {/* <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="forgotpwd" className="modal fade">  */}
         <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"  id="forgotpwd" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Forgot Password ?</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<input placeholder="Email" type="email" required />
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn" id="myButton" type="button">Submit</button>
                      </div>
                  </div>
              </div>
          </div>
         
       </div>
       
    );
  }
}

export default login;