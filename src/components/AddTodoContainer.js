import { useState } from 'react';
import AddButton from './AddButton';
import AddTodoForm from './AddTodoForm';

function AddTodoContainer() {
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  const showAddForm = () => {
    setIsShowAddForm(true);
  };
  const closeAddForm = () => {
    setIsShowAddForm(false);
  };
  return (
    <>
      {isShowAddForm ? (
        <AddTodoForm closeAddForm={closeAddForm} />
      ) : (
        <AddButton showAddForm={showAddForm} />
      )}
    </>
  );
}
export default AddTodoContainer;
