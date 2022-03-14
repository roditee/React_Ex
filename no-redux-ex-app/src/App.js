import logo from './logo.svg';
import { useState, useCallback } from 'react';
import './App.css';
import Left1 from './components/Left1';
import Right1 from './components/Right1';
import Root from './components/Root';


function App() {
  const [click, setClick] = useState(0);

  const onAddCount = useCallback(
    () => {
      console.log('click');
      setClick(click + 1);
    }, []
);

  return (
    <div className="App">
      <Root>
        <Left1 click={click} />
        <Right1 onAddCount={onAddCount}/>
      </Root>
    </div>
  );
}

export default App;
