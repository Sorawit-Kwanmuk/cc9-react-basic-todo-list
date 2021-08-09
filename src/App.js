import './App.css';
import AddTodoContainer from './components/AddTodoContainer';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import ListContainer from './components/ListContainer';
import RemainingMessage from './components/RemainingMessage';
import { useState } from 'react';

const INITIAL_LISTS = [
  { id: uuidv4(), name: 'Meeting', status: false },
  { id: uuidv4(), name: 'Shopping', status: true },
  { id: uuidv4(), name: 'Dinner', status: false },
];
function App() {
  const [lists, setLists] = useState(INITIAL_LISTS); //{id: name: status:}

  const addList = name => {
    const newList = { id: uuidv4(), name, status: false };
    const newLists = [...lists];
    newLists.unshift(newList);
    // newLists.push(newList);
    setLists(newLists);
  };
  const deleteList = id => {
    const idx = lists.findIndex(item => item.id === id);
    if (idx !== -1) {
      const newLists = [...lists];
      newLists.splice(idx, 1); //(ตำแหน่งที่จะเริ่ม,จำนวนที่ตัด)
      setLists(newLists);
    }
  };

  const updateList = (id, list) => {
    const idx = lists.findIndex(item => item.id === id);
    if (idx !== -1) {
      const newLists = [...lists];
      newLists[idx] = list;
      setLists(newLists);
    }
  };

  const remaining = lists.filter(item => !item.status).length; //ได้array ที่มี status เป็น false(! คือถ้าค่า status เป็น true จะแปลงเป็น false)
  return (
    <Container>
      <AddTodoContainer addList={addList} />
      <RemainingMessage remaining={remaining} />
      <ListContainer
        lists={lists}
        deleteList={deleteList}
        updateList={updateList}
      />
    </Container>
  );
}

export default App;
