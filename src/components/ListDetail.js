import { useContext } from 'react';
import { ListContext } from '../Contexts/ListContext';

function ListDetail({ list: { id, name, status }, openEditing }) {
  const contextBundle = useContext(ListContext);
  const { updateList, deleteList } = contextBundle;
  return (
    <>
      <span style={{ cursor: 'pointer' }} onClick={openEditing}>
        {name}
      </span>
      <div className='btn-group'>
        <button
          className='btn btn-outline-info'
          onClick={() => updateList(id, { id: id, name: name, status: !status })}>
          <i className={`bi-toggle2-${status ? 'on' : 'off'}`} />
        </button>
        <button className='btn btn-danger' onClick={() => deleteList(id)}>
          {/* <button className='btn btn-danger' onClick={deleteList(id)}>ถ้าเราต้องการส่งคัวแปรเข้าไปใน function ถ้าเป็นแบบนี้ deleteList 
          จะทำงานก่อนจะคลิก โดยจะทำงานทันทีหลังจาก return ทำงาน และส่งงค่าไปให้onClick*/}
          <i className='bi-trash' />
        </button>
      </div>
    </>
  );
}

export default ListDetail;
