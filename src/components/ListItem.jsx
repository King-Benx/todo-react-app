import { BsTrash } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ListItem({
  id,
  item,
  completed,
  itemDeleteListener,
  itemCheckedListener,
  editItemListener,
}) {
  const [state, setState] = useState({ completed, item });

  const handleDelete = () => {
    itemDeleteListener(id);
  };

  const handleInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      item: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editItemListener(id, state.item);
  };

  const handleItemChecked = (e) => {
    setState((prev) => ({
      ...prev,
      completed: e.target.checked,
    }));
    itemCheckedListener(id, e.target.checked);
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      item,
      completed,
    }));
  }, [id, item, completed]);

  return (
    <li>
      <div>
        <div className="todo-item">
          <input
            type="checkbox"
            checked={state.completed}
            className="to-do-item"
            onChange={handleItemChecked}
          />
          <form className="todo-form" onSubmit={handleSubmit}>
            <input
              className="todo-form-input"
              id={id}
              value={state.item}
              onChange={handleInputChange}
              type="text"
            />
          </form>
          <BsTrash className="button" onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  itemDeleteListener: PropTypes.func.isRequired,
  itemCheckedListener: PropTypes.func.isRequired,
  editItemListener: PropTypes.func.isRequired,
};

export default ListItem;
