import { useState } from 'react';
import './App.scss';
import Form from './components/Form';
import ListSection from './components/ListSection';

function App() {
  const [state, setState] = useState({ data: [], completed: false });

  const updateState = (data) => {
    setState((prev) => ({
      ...prev,
      data,
    }));
  };

  const handleFormSubmit = (data) => {
    const updateData = [
      ...state.data,
      {
        id: state.data.length += 1,
        item: data,
        completed: false,
      },
    ];
    updateState(updateData);
  };

  const handleDeletedItem = (id) => {
    const newData = state.data.filter((it) => it.id !== id);
    const updatedData = [];
    for (let i = 0; i < newData.length; i += 1) {
      const item = newData[i];
      updatedData.push({ ...item, id: i + 1 });
    }
    updateState(updatedData);
  };

  const handleChecked = (id, status) => {
    const findItem = state.data.filter((it) => it.id === id)[0];
    const findIndex = state.data.findIndex((it) => it.id === id);
    const sanitizedData = state.data.filter((it) => it.id !== id);
    const updatedData = [...sanitizedData];
    updatedData.splice(findIndex, 0, { ...findItem, completed: status });
    updateState(updatedData);
  };

  const editItem = (id, change) => {
    const findItem = state.data.filter((it) => it.id === id)[0];
    const findIndex = state.data.findIndex((it) => it.id === id);
    const sanitizedData = state.data.filter((it) => it.id !== id);
    const updatedData = [...sanitizedData];
    updatedData.splice(findIndex, 0, { ...findItem, item: change });
    updateState(updatedData);
  };

  const handleCompleted = () => {
    const filteredData = state.data.filter((it) => it.completed !== true);
    const updatedData = [];
    for (let i = 0; i < filteredData.length; i += 1) {
      const item = filteredData[i];
      updatedData.push({ ...item, id: i + 1, completed: false });
    }
    updateState(updatedData);
  };

  return (
    <div className="container">
      <Form submitHandler={handleFormSubmit} />
      <ListSection
        data={state.data}
        itemDeleteListener={handleDeletedItem}
        itemCheckedListener={handleChecked}
        editItemListener={editItem}
      />
      <div className="container-footer">
        <button type="button" id="clear-list" onClick={handleCompleted}>Clear all Completed</button>
      </div>
    </div>
  );
}

export default App;
