import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from '../constants/actionTypes';

let previousId = -1;
export const addTodo = (text) => {
  const id = previousId + 1;
  previousId = id;
  return {
    type: ADD_TODO,
    id,
    text,
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
