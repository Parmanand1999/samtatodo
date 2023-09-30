import React from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {
  return (
    <div className="App">
      <h1 className='text-4xl font-bold mb-4 mt-4'>Todo App</h1>
      <Todolist />
    </div>
  );
}

export default App;
