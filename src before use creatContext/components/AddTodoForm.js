import { useState } from 'react';

function AddTodoForm({ closeAddForm, isShowAddForm, addList }) {
  const [name, setName] = useState('');

  const [error, setError] = useState('');

  const handleChangeName = e => {
    if (e.target.value === '') {
      setError('Todo list is required');
    } else {
      setError('');
    }
    setName(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (name === '') {
      setError('Todo list is required');
    } else {
      setError('');
      addList(name);
      setName('');
      closeAddForm();
    }
  };

  return (
    // <div
    //   className='border shadow p-3 mb-4'
    //   style={{ display: isShowAddForm ? 'block' : 'none' }}>
    // {/*ซ่อนดดยใช้ style ทุกอย่างยังอยู่ใน DOM แค่ซ่อนไว้*/}
    <div className='border shadow p-3 mb-4'>
      <div className='d-flex justify-content-end'>
        <button
          className='btn-close btn-sm text-black-50'
          onClick={closeAddForm}></button>
      </div>
      <form onSubmit={handleSubmitForm}>
        <div className='mt-3 mb-4'>
          <input
            type='text'
            className={`form-control form-control-lg${error && ' is-invalid'}`}
            //ถ้า error มีค่า ซึ่งภ้ามีค่า จะได้เป็นtrue จะ return is-invalid แต่ถ้า error ไม่มีค่า จะได้ค่าเป็น false จะ return ตัว error เอง
            id='todo'
            placeholder='Enter new todo'
            value={name}
            onChange={handleChangeName}
          />
          <div className='invalid-feedback'>{error}</div>
        </div>
        <button className='btn btn-secondary'>
          <i className='bi-save' />
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
