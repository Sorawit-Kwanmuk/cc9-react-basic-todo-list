import { useState } from 'react';

function EditTodoForm({
  list: { name: oldName, id, status },
  closeEditing,
  updateList,
}) {
  const [name, setName] = useState(oldName);
  const [error, setError] = useState('');

  const handleChangeName = e => {
    if (e.target.value === '') {
      setError('Todo list is require');
    } else {
      setError('');
    }
    setName(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (name === '') {
      setError('Todo list is require');
    } else {
      setError('');
      updateList(id, { id: id, name: name, status: status });
      closeEditing();
    }
  };

  return (
    <form className='flex-fill' onSubmit={handleSubmitForm}>
      <div className={`input-group ${error && ' has-validation'}`}>
        <input
          type='text'
          className={`form-control${error && ' is-invalid'}`}
          value={name}
          onChange={handleChangeName}
        />
        <button className='btn btn-primary'>
          <i className='bi-save' />
        </button>
        <button type='button' className='btn btn-danger' onClick={closeEditing}>
          <i className='bi-x' />
        </button>
        <div className='invalid-feedback'>{error}</div>
      </div>
    </form>
  );
}
export default EditTodoForm;
