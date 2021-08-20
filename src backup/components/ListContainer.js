import { useContext } from 'react';
import { ListContext } from '../Contexts/ListContext';
import List from './List';

function ListContainer({ deleteList, updateList }) {
  const contextBundle = useContext(ListContext);
  const { lists } = contextBundle;
  return (
    <>
      {lists.map(item => (
        <List key={item.id} list={item} deleteList={deleteList} updateList={updateList} />
        // <lists key={item.id} list={item.id} {...item} />
      ))}
    </>
  );
}
export default ListContainer;
