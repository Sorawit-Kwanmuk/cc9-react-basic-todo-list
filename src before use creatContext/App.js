import './App.css';
import AddTodoContainer from './components/AddTodoContainer';

import Container from './components/Container';
import ListContainer from './components/ListContainer';
import RemainingMessage from './components/RemainingMessage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [lists, setLists] = useState([]); //{id: name: status:}

  useEffect(() => {
    axios
      .get('http://localhost:8080/todo')
      .then(res => {
        // console.log(res.data);
        setLists(res.data.todos);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //old version
  // const addList = async name => {
  //   const newList = {
  //     // id: uuidv4(),
  //     name,
  //     status: false,
  //   };
  //   const newLists = [...lists];
  //   newLists.unshift(newList);
  //   // newLists.push(newList);
  //   setLists(newLists);
  //   try {
  //     await axios.post('http://localhost:8080/todo', newList);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const addList = async name => {
    try {
      const body = {
        name,
        status: false,
      };
      const res = await axios.post('http://localhost:8080/todo', body);

      const newLists = [...lists];
      newLists.unshift(res.data.todo);
      setLists(newLists);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteList = async id => {
    // const idx = lists.findIndex(item => item.id === id);
    // if (idx !== -1) {
    //   const newLists = [...lists];
    //   newLists.splice(idx, 1); //(ตำแหน่งที่จะเริ่ม,จำนวนที่ตัด)
    //   setLists(newLists);
    // }
    // axios
    //   .delete(`http://localhost:8080/todo/${id}`)
    //   .then(res => {
    //     console.log(res);

    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    try {
      await axios.delete(`http://localhost:8080/todo/${id}`);
      const res = await axios.get('http://localhost:8080/todo');
      setLists(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const updateList = async (id, list) => {
    try {
      const idx = lists.findIndex(item => item.id === id);
      if (idx !== -1) {
        const body = {
          name: list.name,
          status: list.status,
        };

        const res = await axios.put(`http://localhost:8080/todo/${id}`, body);
        console.log(res.data);

        const newLists = [...lists];
        newLists[idx] = list;
        setLists(newLists);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const remaining = lists.filter(item => !item.status).length; //ได้array ที่มี status เป็น false(! คือถ้าค่า status เป็น true จะแปลงเป็น false)
  return (
    <Container>
      <AddTodoContainer addList={addList} />
      <RemainingMessage remaining={remaining} />
      <ListContainer lists={lists} deleteList={deleteList} updateList={updateList} />
    </Container>
  );
}

export default App;
