import './App.css';
import AddTodoContainer from './components/AddTodoContainer';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import ListContainer from './components/ListContainer';
import RemainingMessage from './components/RemainingMessage';
import { useState } from 'react';

const INITIAL_LISTS = [
  { id: uuidv4(), name: 'Meeting', status: 'falst' },
  { id: uuidv4(), name: 'Shopping', status: 'true' },
  { id: uuidv4(), name: 'Dinner', status: 'false' },
];
function App() {
  const [lists, setLists] = useState(INITIAL_LISTS); //{id: name: status:}
  return (
    <Container>
      <AddTodoContainer />
      <RemainingMessage />
      <ListContainer lists={lists} />
    </Container>
  );
}

export default App;
