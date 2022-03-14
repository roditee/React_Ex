import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className='TodoList'>
            {
                todos.map(todo => (
                    // 상위 컴포넌트 (App.js)로부터 받아온 todos props의 id를 key로 받아옴
                    <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
                ))
            }
        </div>
    );
};

export default TodoList;