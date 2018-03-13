import { LOGIN, LOGOUT, GET_POSTS } from "../constants";

export default function auth(state = { loggedIn: false, posts: [] }, action) {
  switch (action.type) {
    case GET_POSTS:
      return { posts: action.payload };
    case LOGIN:
      return { loggedIn: true };
    case LOGOUT:
      return { loggedIn: false };
    default:
      return state;
  }
}
