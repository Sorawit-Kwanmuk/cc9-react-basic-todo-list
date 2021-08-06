import EditTodoForm from './EditTodoForm';
import ListDetail from './ListDetail';

function List({ list }) {
  const { status } = list;
  return (
    <div
      className={`card shadow rounded-0 bd-callout bd-callout-${
        status ? 'success' : 'warning'
      }`}>
      <div className='card-body d-flex justify-content-between align-items-center'>
        <ListDetail list={list} />
        {/* <EditTodoForm /> */}
      </div>
    </div>
  );
}

export default List;
