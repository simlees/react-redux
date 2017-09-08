import axios from 'axios';

export function fetchPosts() {
  return function(dispatch) {
    axios.get('http://rest.learncode.academy/api/test123/tweets')
      .then((response) => {
        dispatch({type: 'FETCH_POSTS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_POSTS_REJECTED', payload: err})
      });
  }
}
