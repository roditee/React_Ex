import { Link, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';
import Movie from './components/Movie';
import './App.css';

function App() {
  return (
    <div className="App">

      <ul>
        <li><Link to="/">홈 화면으로 이동</Link></li>
        <li><Link to="/about">About 화면 보기</Link></li>
        <li><a href="https://www.naver.com" target="_blank">네이버</a></li>
        <li><Link to="/movieInfo">영화 정보 보기</Link></li>
        <li><Link to="/movie/king">킹스맨</Link></li>
        <li><Link to="/movie/spider">스파이더맨</Link></li>
        <li><Link to="/movie/squild">오징어 게임</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/movieInfo" element={<MovieInfo/>} />
        <Route path="/movie/:keyword" element={<Movie/>} />
      </Routes>
    </div>
  );
}

export default App;
