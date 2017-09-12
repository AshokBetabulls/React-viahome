import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'





    const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}
    
    
    const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

    
    const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/AdminDashBoard',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


class login extends Component {
     constructor(props) {
    super(props);
           this.state = {
    redirectToReferrer: false
  }
  
       this.handleClick = this.handleClick.bind(this);
  }
    
     handleClick() {
       var from="AdminDashBoard"
       fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })


  }
    


    
    
    
  render() {
      
         const { from } = this.props.location.state || { from: { pathname: 'AdminDashBoard' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
      
    return (
        <div className="login-body">

    <div className="container">

      <div className="form-signin" >
        <img src="images/main-logo.png" alt="Logo" className="img-responsive"/>
        <div className="login-wrap">
            <div className="user-login-info" id="cust-login">
				<input placeholder="Username" id="user" type="text"  />
				<input placeholder="Password" type="password"  />
			</div>
                <label className="active customlabel">
				  <input type="checkbox" name='email1' /><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> Remember Password</span>
				</label>
				<span className="pull-right">
                    <a data-toggle="modal" href="#forgotpwd"> Forgot Password?</a>
                </span>
            <button className="btn btn-lg btn-login btn-block" id="SignIn"  onClick={this.handleClick}>Sign in</button>
        {/* <button className="btn btn-lg btn-login btn-block" id="SignIn" type="submit" data-toggle="modal" data-target="#signIn">Sign in</button> */}

            <div className="registration">
                Don't have an account yet?
                <Link className="" to="register">
                    Create an account
                </Link>
            </div>
        </div>
         
          
          
      </div>
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