import logo from './logo.svg';
import './App.css';

import NavigationBar from './Components/NavigationBar';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <TodoList/>
    </div>
  );
}

export default App;
