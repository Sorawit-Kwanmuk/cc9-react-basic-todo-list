import { useState } from 'react';
import EditTodoForm from './EditTodoForm';
import ListDetail from './ListDetail';
import WrapList from './WrapList';

function List({ list }) {
  const [isEditing, setIsEditing] = useState(false);
  const { status } = list;

  const openEditing = () => {
    setIsEditing(true);
  };

  const closeEditing = () => {
    setIsEditing(false);
  };

  return (
    <WrapList classes={status ? 'success' : 'warning'}>
      {isEditing ? (
        <EditTodoForm list={list} closeEditing={closeEditing} />
      ) : (
        <ListDetail list={list} openEditing={openEditing} />
      )}
    </WrapList>
  );
}

export default List;
