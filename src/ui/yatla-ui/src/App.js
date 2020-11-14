import './App.css';

import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import TodoList from './Components/TodoList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://localhost:8001/todo")
      .then((res) => {
        return res.text();
      })
      .then(
        (result) => {
          setItems(result ? JSON.parse(result) : []);
        }
      );
    }, [])

    return (
      <div className="App">
        <NavigationBar/>
        <TodoList listItems={items}/>
      </div>
    );
}

export default App;
