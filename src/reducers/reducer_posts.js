import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
  case FETCH_POST:
    // ES5 way
    // const post = action.payload.data;
    // const newState = { ...state  };
    // newState[post.id] = post;
    // return newState;

    // square braces is key interpolation
    return { ...state, [action.payload.data.id]: action.payload.data };
  case FETCH_POSTS:
    // console.log(action.payload.data); // [ post1, post2 ]
    // { 4: post }
    return _.mapKeys(action.payload.data, 'id');

  default:
    return state;
  }
}