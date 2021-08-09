import List from './List';

function ListContainer({ lists, deleteList, updateList }) {
  return (
    <>
      {lists.map(item => (
        <List
          key={item.id}
          list={item}
          deleteList={deleteList}
          updateList={updateList}
        />
        // <lists key={item.id} list={item.id} {...item} />
      ))}
    </>
  );
}
export default ListContainer;
