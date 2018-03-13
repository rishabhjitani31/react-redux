import { PRACTICE } from "../constants";

export function practice(e) {
  return {
    type: PRACTICE,
    payload: e.target.value
  };
}
