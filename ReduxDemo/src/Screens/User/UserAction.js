 
export const LOGIN_DATA = 'LOGIN_DATA';
export const LOGIN_SUCCESS_DATA = 'LOGIN_SUCCESS_DATA';
export const LOGIN_FAILURE_DATA = 'LOGIN_FAILURE_DATA';

export function login(username, password){
  return (dispatch) => {
    dispatch({type: LOGIN_DATA, data: null});
    setTimeout(() => {
      if (username && password) {
        dispatch({type: LOGIN_SUCCESS_DATA, data: {username, password}});
      } else {
        dispatch({type: LOGIN_FAILURE_DATA, data: {username, password}});
      }
    }, 2000);
  };
}
