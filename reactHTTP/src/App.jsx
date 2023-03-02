import { useState } from 'react';
import './App.css';

const Form = () => {
  const submit = (event) => {
    event.preventDefault();
    
  }

  return (
    <form className='form'>
      <label>
        <p>New Note</p>
        <textarea></textarea>
      </label>
      <button>OK</button>
    </form>
  )
}

function App() {


  return (
    <div className="App">
      <Form />
    </div>
  )
}

export default App
