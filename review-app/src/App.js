import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Content></Content>

      {/* <div className='content'>
        <p>{titles[0]}</p>
        <hr />
      </div>
      <div className='content'>
        <p>{titles[1]}</p>
        <hr />
      </div> */}
    </div>
  );
}

export default App;