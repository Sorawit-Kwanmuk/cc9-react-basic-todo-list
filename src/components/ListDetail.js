function ListDetail({ list: { id, name, status } }) {
  return (
    <>
      <span style={{ cursor: 'pointer' }}>{name}</span>
      <div className='btn-group'>
        <button className='btn btn-outline-info'>
          <i className={`bi-toggle2-${status ? 'on' : 'off'}`} />
        </button>
        <button className='btn btn-danger'>
          <i className='bi-trash' />
        </button>
      </div>
    </>
  );
}

export default ListDetail;
