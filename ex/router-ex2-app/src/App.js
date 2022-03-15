import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Join from './components/Join';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <button><Link to="/">홈</Link></button>
      <button><Link to="/login">로그인</Link></button>
      <button><Link to="/join">회원가입</Link></button>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;
