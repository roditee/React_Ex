import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content1 from './components/Content1';
import Content2 from './components/Content2';

function App() {
  let [count, setCount] = useState(0);

  const onPlus = () => {
    setCount(count+1);
  }

  const onMinus = () => {
    if(count>0) {
      setCount(count-1);
    }
  }

  return (
    <div className="App">
      <Content1 count={count}></Content1>
      <Content2 onPlus={onPlus} onMinus={onMinus}></Content2>
    </div>
  );
}

export default App;
