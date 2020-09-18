//import rootReducer from "../client/reducers/index"
import subject from '../client/reducers/yetiReducer';



// These tests are testing current state of reducers, 
// we wrapped the whole suite inside of a describe block
// before each test we are setting state to inital state.

describe('Yeti reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      isLoggingIn: false,
      isSigningUp: false,
      isLoggedIn: false,
      currentUserId: '',
      posts: [],
      loading: false,
      error: null,
    };
  })

  //test against undefined input for action type
  describe('default state', () => {
    it('should return default stat when given undefined input for action type', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return initial state without duplication', () => {
      const action = { type: 'somethingrandom' };
      expect(subject(state, action)).toBe(state);
    })
  });
  
  describe('ADDPOST_SUCCESS', () => {
    //id, title, pros, cons, date, user_id
    const action = {
      type: 'ADDPOST_SUCCESS',
      payload: {
        id: 0,
        title: 'sometitle',
        pros: 'pros',
        cons: 'cons',
        date: 'date',
        user_id: 0,
      }
    };
    it('should add a post at the 0th index', () => {
      const { posts } = subject(state, action)
      expect(posts[0]).toEqual({
        id: 0,
        title: 'sometitle',
        pros: 'pros',
        cons: 'cons',
        date: 'date',
        user_id: 0,
      })
    })
    //Future state: create a test to get all posts from specific user, not currenlty able to test
  })


// describe('LOGIN_SUCCESS', () => {
//     const 
// })
//   case actionTypes.LOGIN_SUCCESS:
//       console.log(action.payload);
//       return {
//         ...state,
//         isLoggingIn: false,
//         isLoggedIn: true,
//         currentUserId: action.payload,
//         //Something with posts
//         loading: false,
//         error: null,
//       };

});