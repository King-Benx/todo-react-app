import PropTypes from 'prop-types';
import ListItem from './ListItem';

function ListSection({
  data,
  itemDeleteListener,
  itemCheckedListener,
  editItemListener,
}) {
  const itemDeleteListenerHandler = (deletedId) => itemDeleteListener(deletedId);
  const itemCheckedListenerHandler = (id, status) => itemCheckedListener(id, status);
  const editItemListenerHandler = (id, update) => editItemListener(id, update);

  return (
    <div className="container-section">
      <ol id="list">
        {data.map(({ id, item, completed }) => (
          <ListItem
            item={item}
            completed={completed}
            itemDeleteListener={itemDeleteListenerHandler}
            itemCheckedListener={itemCheckedListenerHandler}
            editItemListener={editItemListenerHandler}
            id={id}
            key={id}
          />
        ))}
      </ol>
    </div>
  );
}

ListSection.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  itemDeleteListener: PropTypes.func.isRequired,
  itemCheckedListener: PropTypes.func.isRequired,
  editItemListener: PropTypes.func.isRequired,
};

export default ListSection;
