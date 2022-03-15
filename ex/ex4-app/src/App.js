import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Content1 from './components/Content1';
import Content2 from './components/Content2';

function App() {
  let [title, setTitle] = useState("DP");
  let [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  const onTitleChange = (inputValue) => {
    setTitle(inputValue);
  }

  return (
    <div className="App">
      <Content1 title={title}></Content1>
      <Content2 inputValue={inputValue} onChange={onChange} onTitleChange={onTitleChange}></Content2>
    </div>
  );
}

export default App;
