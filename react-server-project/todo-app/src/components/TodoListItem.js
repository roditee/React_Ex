import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    // props로 받아서 id, text, checked로 선언 ?
    const { id, text, checked } = todo;
    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>{/* 속성 = checked */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}{/* 체크 여부에 따른 조건부 스타일링 : 삼항 연산자 사용 */}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;