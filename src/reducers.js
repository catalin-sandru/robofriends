import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS_SUCCESS, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_FAILED } from "./constants";

const initialStateSearch = {
  searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const fetchRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case FETCH_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true})
    case FETCH_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false})
    case FETCH_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false})
    default:
      return state
  }
}