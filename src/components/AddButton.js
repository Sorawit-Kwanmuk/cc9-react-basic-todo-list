function AddButton({ showAddForm }) {
  return (
    <div className='mb-4 d-flex justify-content-end'>
      <button className='btn btn-success' onClick={showAddForm}>
        <i className='bi-plus-lg' />
      </button>
    </div>
  );
}

export default AddButton;
