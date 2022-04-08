import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/App.css'


const App = () => { 
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => {
      console.log('Welcome to Pomodojo!')
      setData(data.message)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {!data ? 'Loading...' : data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
