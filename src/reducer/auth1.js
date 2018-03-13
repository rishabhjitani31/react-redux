import { PRACTICE } from "../constants";

export default function auth1(state = { value: "" }, action) {
  switch (action.type) {
    case PRACTICE:
      return { value: action.payload };
    default:
      return state;
  }
}
