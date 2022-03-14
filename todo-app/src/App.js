import { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    },
  ]);

    // 고유 값으로 사용될 id
    // ref를 사용하여 변수 담기
    const nextId = useRef(4); // 현재 id가 3까지, nextId는 4
    // useRef를 통해 만든 객체 안의 current 값이 실제 DOM 요소를 가리킴
    
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            setTodos(todos.concat(todo));
            nextId.current += 1; // nextId 1씩 증가
        }, [todos]
    );

    const onRemove = useCallback(
      (id) => { // id를 받아와서
        setTodos(todos.filter((todo) => todo.id !== id)); // 삭제하려는 id와 일치하지 않는 요소로만 배열 생성 = 삭제하려는 id 제외하여 배열 재구성
      }, [todos]
    );

    // id 값이 같을 때는 규칙대로 새로운 객체 생성하지만
    // id 값이 같을 때는 처음 받아온 상태 그대로 반환
    const onToggle = useCallback(
      (id) => {
        setTodos(
          // todos.map((todo) => ({
          //   ...todo, checked: todo.id === id ? !todo.checked : todo.checked
          // }))

          // 같은 기능인데 위 코드가 좀 더 쉬움
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )

        );
      }, [todos]
    );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>{/* todos를 props로 TodoList에게 전달 (상위 -> 하위로 전달) */}
    </TodoTemplate>
  );
}

export default App;
