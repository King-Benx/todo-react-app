import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ submitHandler }) {
  const [state, setState] = useState({ todo: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(state.todo);
    setState((prev) => ({
      ...prev,
      todo: '',
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>
        <div>
          <span>Today&apos;s To Do</span>
        </div>
      </legend>
      <div className="form-group">
        <input
          type="text"
          name="todo"
          id="todo"
          value={state.todo}
          onChange={(e) => setState((prev) => ({
            ...prev,
            todo: e.target.value,
          }))}
          placeholder="Add to your list..."
        />
      </div>
    </form>
  );
}

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
