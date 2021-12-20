import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Content from './components/Content';
import Book from './components/Book';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/content">전체 도서 정보 조회</Link></li>
        <li><Link to="/book/pig">아기 돼지 삼형제</Link></li>
        <li><Link to="/book/duck">미운 오리 새끼</Link></li>
        <li><Link to="/about">About...</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/book/:keyword" element={<Book />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;