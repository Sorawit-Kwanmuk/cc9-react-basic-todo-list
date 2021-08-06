function AddTodoForm({ closeAddForm }) {
  return (
    <div className='border shadow p-3 mb-4'>
      <div className='d-flex justify-content-end'>
        <button
          className='btn-close btn-sm text-black-50'
          onClick={closeAddForm}></button>
      </div>
      <form>
        <div className='mt-3 mb-4'>
          <input
            type='text'
            className='form-control form-control-lg is-invalid'
            id='todo'
            placeholder='Enter new todo'
          />
          <div className='invalid-feedback'>Required</div>
        </div>
        <button className='btn btn-secondary'>
          <i className='bi-save' />
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
