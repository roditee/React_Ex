import React from 'react';

export default function reducer(currentState, action) {
    // reducer : 값을 바꾸는 역할

    // 현재 state 값이 정의되지 않았으면 기본 state 값 반환
    if(currentState === undefined) {
        return { count: 0 } // 기본 state 값 0으로 지정
    }

    // 각 state의 불변성을 유지하기 위한 방법으로
    // 과거의 state를 복제하여 사용
    // 복제본 수정하면 불변성 유지
    const newState = {...currentState};


    /////////////////////////////////////////////////////
    // state 값 변경 (action type에 따라)
    if(action.type === 'ADD') {
        newState.count++;
    }

    if(action.type === 'MINUS') {
        if(newState.count > 0) {
            newState.count--;
        }
    }
    /////////////////////////////////////////////////////
    
    
    // 변화시킨 값을 반환
    return newState;
    // 반환된 값이 새로운 state 값이 됨
};
