// import statements
import React from 'react';
// import * as actions from '../actions/actions';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// mapping our dispatch to props, each key is method which dispatches an action creator
// const mapDispatchToProps = (dispatch) => ({
//   loginPopup: () => dispatch(actions.loginPopup()),
//   signupPopup: () => dispatch(actions.signupPopup()),
// });

const Buttons = (props) => {
  return (
    <div id='buttonContainer'>
    {/* link will change the path to "/login" */}
      <Link to="/Login">
      <button type='button' id='logInButton'>
        Log-in
      </button>
      </Link>
    {/* link will change the path to "/signup" */}
     <Link to="/Signup">
     <button type='button' id='signUpButton'>
        Sign Up!
      </button>
     </Link>
    </div>
  );
};

export default Buttons;