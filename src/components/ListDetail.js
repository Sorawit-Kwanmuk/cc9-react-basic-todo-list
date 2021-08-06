function ListDetail() {
  return (
    <>
      <span style={{ cursor: 'pointer' }}>Task 3</span>
      <div className='btn-group'>
        <button className='btn btn-outline-info'>
          <i className='bi-toggle2-on' />
        </button>
        <button className='btn btn-danger'>
          <i className='bi-trash' />
        </button>
      </div>
    </>
  );
}

export default ListDetail;
