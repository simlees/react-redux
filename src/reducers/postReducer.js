export default function reducer(state = {
  posts: [],
  fetching: false;
  fetched: false;
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_POSTS': {
      return {...state, fetching: true}
    }
  }
}
