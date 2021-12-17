import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer company="삼성" tel="02-1234-1234" address="서울광역시"></Footer>
    </div>
  );
}

export default App;