import logo from './logo.svg';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplate>
  );
}

export default App;
