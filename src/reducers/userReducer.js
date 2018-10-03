import {UPDATE_USER, GET_USER_ERROR} from './../actions/user-actions';

export default function userReducer(state = '', {type, payload}) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case GET_USER_ERROR:
      return payload.error;
    default:
      return state;
  }
};