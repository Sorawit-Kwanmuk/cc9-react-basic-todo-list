import { useState } from 'react';
import AddButton from './AddButton';
import AddTodoForm from './AddTodoForm';

function AddTodoContainer({ addList }) {
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  const showAddForm = () => {
    setIsShowAddForm(true);
  };
  const closeAddForm = () => {
    setIsShowAddForm(false);
  };
  //#1
  return (
    <>
      {isShowAddForm ? (
        <AddTodoForm closeAddForm={closeAddForm} addList={addList} />
      ) : (
        <AddButton showAddForm={showAddForm} />
      )}
    </>
  );
  // #2 กำหนด display: none
  // return (
  //   <>
  //     <AddTodoForm closeAddForm={closeAddForm} isShowAddForm={isShowAddForm} />
  //     <AddButton showAddForm={showAddForm} isShowAddForm={isShowAddForm} />
  //   </>
  // );
}
export default AddTodoContainer;
