import './App.css';
import AddTodoContainer from './components/AddTodoContainer';
import Container from './components/Container';
import ListContainer from './components/ListContainer';
import RemainingMessage from './components/RemainingMessage';

function App() {
  return (
    <Container>
      <AddTodoContainer />
      <RemainingMessage />
      <ListContainer />
    </Container>
  );
}

export default App;
