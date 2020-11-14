import './App.css';

import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import TodoList from './Components/TodoList';
import NewItem from './Components/NewItem';

function App() {
  const [items, setItems] = useState([]);
  const [intervalId, setIntervalId] = useState("");

  useEffect(() => {
    loadData();
    clearInterval(intervalId);
    setIntervalId(setInterval(() => {loadData()}, 10000));
  }, [])

  function loadData(){
    fetch("https://localhost:8001/todo")
      .then((res) => {
        return res.text();
      },
      (error) => console.log(error))
      .then(
        (result) => {
          setItems(result ? JSON.parse(result) : []);
        },
        (error) => console.log(error));
  }

  function handleSubmitNewItem(item){
    const body = JSON.stringify({data: item});
    fetch("https://localhost:8001/todo",{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: body
    })
    .then(res => {
      console.log("Done");
      loadData();
    }, error => console.log(error));
  }

  function handleMarkAsDone(id){
    fetch("https://localhost:8001/todo?id=" + id,{ method: 'PATCH' })
    .then((result) => {
            console.log("Done");
            loadData();
          },
          (error) => console.log(error));
  }

  return (
    <div className="App">
      <NavigationBar/>
      <NewItem onClick={handleSubmitNewItem} />
      <TodoList listItems={items} markAsDone={handleMarkAsDone} />
    </div>
  );
}

export default App;
