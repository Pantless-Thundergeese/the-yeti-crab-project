import React from 'react';
import YetiLogo from '../YetiLogo';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';

const mapDisaptchToProps = (dispatch) => ({
  signup: (userInfo) => dispatch(actions.signup(userInfo)),
  enterFirstName: (firstName)=> dispatch(actions.enterFirstName(firstName)),
  enterLastName:(lastName)=> dispatch(actions.enterLastName(lastName)),
  updateEmail:(email)=>dispatch(actions.updateEmail(email)),

});

const SignUpPage = (props) => {


  return (
    <div className='AuthContainer'>
      <YetiLogo />
      <div className='SignUpContainer'>
      <form>
          <input id="firstName" type="text" value={this.props.firstName} onChange={(e)=>this.props.enterFirstName(e.target.value)}></input>
          <input id="lastName" type="text" value={this.props.lastName} onChange={(e)=>this.props.enterLastNamed(e.target.value)}></input>
          <input id="email" type="email" value={this.props.email} onChange={(e)=> this.props.updateEmail(e.target.value)}></input>
          <input id="username" type="text" value={this.props.username} onChange={(e)=>this.props.signup(e.target.value)}></input>
          <input id="password" type="text" value={this.props.password} onChange={(e)=>this.props.signup(e.target.value)}></input>
          <input id="confirmPassword" type="text" value={this.props.confirmPassword} onChange={(e)=>this.props.signup(e.target.value)}></input>
        </form>
      <button type='button' id='signupPageButton' onClick={SignupWrapper}>
        Submit
      </button>
      </div>
    </div>
  );
};

export default connect(null, mapDisaptchToProps)(SignUpPage);
