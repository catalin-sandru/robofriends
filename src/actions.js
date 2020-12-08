import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS_SUCCESS, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_FAILED } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const fetchRobots = () => (dispach) => {
  dispach({ type: FETCH_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      dispach({ type: FETCH_ROBOTS_SUCCESS, payload: users})
    })
    .catch(err => dispach({ tyoe: FETCH_ROBOTS_FAILED, payload: err}))
}