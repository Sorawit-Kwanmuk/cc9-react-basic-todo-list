import { useContext } from 'react';
import { ListContext } from '../Contexts/ListContext';
import List from './List';

function ListContainer() {
  const contextBundle = useContext(ListContext);
  const { lists } = contextBundle;
  return (
    <>
      {lists.map(item => (
        <List key={item.id} list={item} />
        // <lists key={item.id} list={item.id} {...item} />
      ))}
    </>
  );
}
export default ListContainer;
