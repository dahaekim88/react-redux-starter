import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../../actions';

// eslint-disable-next-line react/prop-types
const AddTodo = ({ dispatch }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!value.trim()) {
            return;
          }
          dispatch(addTodo(value));
          setValue('');
        }}
      >
        <input
          value={value}
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.prototypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddTodo;
