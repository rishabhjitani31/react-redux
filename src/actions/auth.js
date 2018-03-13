import { LOGIN, LOGOUT, GET_POSTS } from "../constants";
import axios from "axios";
export function getPosts(payload) {
  return {
    type: GET_POSTS,
    payload
  };
}

export function login(payload) {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      dispatch(getPosts(res.data));
    });
  };
}

export function logout(payload) {
  return {
    type: LOGOUT,
    payload
  };
}
