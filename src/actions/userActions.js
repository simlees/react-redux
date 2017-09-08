// import * as user from (this file)
// user.fetchUser()
// or just import function. Up to you


export function fetchUser() {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {
      name: 'Sim',
      age: 24,
    }
  }
}
