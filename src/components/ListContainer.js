import List from './List';

function ListContainer({ lists }) {
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
