import './App.css';

import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import TodoList from './Components/TodoList';
import NewItem from './Components/NewItem';
import Constants from './Constants/constants.js';

function App() {
  const [items, setItems] = useState([]);
  const [intervalId, setIntervalId] = useState("");

  useEffect(() => {
    loadData();
    clearInterval(intervalId);
    setIntervalId(setInterval(() => {loadData()}, Constants.LIST_REFRESH_RATE));
  }, [])

  function loadData(){
    fetch(`${Constants.API_BASE_URL}/todo`)
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
    fetch(`${Constants.API_BASE_URL}/todo`,{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: body
    })
    .then(res => {
      loadData();
      return res.json()
    })
    .then(res => console.log(res), error => console.log(error));
  }

  function handleMarkAsDone(id){
    fetch(`${Constants.API_BASE_URL}/todo?id=${id}`,{ method: 'PATCH' })
    .then((result) => {
            console.log(result);
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
