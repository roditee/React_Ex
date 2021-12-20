import { Link, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home 화면 보기</Link></li>
        <li><Link to="/about">About 화면 보기</Link></li>
        <li><Link to="/movieInfo">영화 정보 보기</Link></li>
        <li><Link to="/movie/spider">스파이더맨</Link></li>
        <li><Link to="/movie/king">킹스맨</Link></li>
        <li><Link to="/movie/squid">오징어 게임</Link></li>
        {/*새로운 페이지로 넘어감 : _blank -> 새 창으로 열도록 설정 */}
        <li><a href='https://www.naver.com' target="_blank">네이버로 이동</a></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movieInfo" element={<MovieInfo />} />
        <Route path="/movie/:keyword" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;