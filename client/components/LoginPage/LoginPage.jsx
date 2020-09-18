import React, {Component} from 'react';
import YetiLogo from '../YetiLogo';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';
// import yetiReducer from '../../reducers/yetiReducer';

const mapStateToProps = (state) => ({
  // userLogin: state.rootReducer.userLogin,
  username: state.yetiReducer.username,
  password: state.yetiReducer.password
});

const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(actions.login(userInfo)),
  updateLogin:(login) => dispatch(actions.updateLogin(login)),
  updatePassword:(password) => dispatch(actions.updatePassword(password))
});

// create the LoginPage component passing in props to render our Yeti Logo, two input fields and login button.
class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='AuthContainer'>
        <YetiLogo />
        <div className='AuthButtons'>
        <form>
          <input id="username" type="text" value={this.props.username} onChange={(e)=>this.props.updateLogin(e.target.value)}></input>
          <input id="password" type="text" value={this.props.password} onChange={(e)=>this.props.updatePassword(e.target.value)}></input>
        </form>
        </div>
        <button type='button' id='loginPageButton' onClick={this.props.login(this.props.username, this.props.password)}>
          Login
        </button>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
