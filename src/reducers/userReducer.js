export default function reducer(state = {
  user: {
    id: null,
    name: null,
    age: null
  },
  fetching: false;
  fetched: false;
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_USER': {
      return {...state, fetching: true}
    }
  }
}
