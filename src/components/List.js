import EditTodoForm from './EditTodoForm';
import ListDetail from './ListDetail';

function List() {
  return (
    <div className='card shadow rounded-0 bd-callout bd-callout-success'>
      <div className='card-body d-flex justify-content-between align-items-center'>
        <ListDetail />
        {/* <EditTodoForm /> */}
      </div>
    </div>
  );
}

export default List;
