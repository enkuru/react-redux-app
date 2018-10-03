import axios from 'axios';

export const UPDATE_USER = 'USER_UPDATE';
export const GET_USERS = 'GET_USERS';

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function getUsers() {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
}