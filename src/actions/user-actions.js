import axios from 'axios';

export const UPDATE_USER = 'USER_UPDATE';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

/*
export function getUsers() {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data)
      .then(userList => console.log(userList))
      .catch(error => console.log(error))
  }
}
*/

export function showError(error) {
  return {
    type: GET_USER_ERROR,
    payload: {
      error: error.toString()
    }
  }
}

/*
export function getUsers() {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then(response => response.data)
      .then(user => dispatch(updateUser(user.name)))
      .catch(error => dispatch(showError(error)))
  }
}
*/

export function getUsers() {
  return async dispatch => {/*es6 özelliği ile async metod tanımı yapıyoruz*/
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');/*await ile burada kod success/error a kadar bekleyecek*/
      dispatch(updateUser(res.data.name));
    } catch (err) {
      dispatch(showError(err));
    }
  }
}