function EditTodoForm() {
  return (
    <form className='flex-fill'>
      <div className='input-group has-validation'>
        <input type='text' className='form-control is-invalid' />
        <button className='btn btn-primary'>
          <i className='bi-save' />
        </button>
        <button className='btn btn-danger'>
          <i className='bi-x' />
        </button>
        <div className='invalid-feedback'>Todo is required</div>
      </div>
    </form>
  );
}
export default EditTodoForm;
