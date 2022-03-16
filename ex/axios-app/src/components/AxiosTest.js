import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

function AxiosTest() {
    // state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 지정
    const loadData = async() => {
        setLoading(true);
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
        setData(response.data);
        setLoading(false);
    }

    // 렌더링할때마다 호출
    // 빈 배열 : loadData() 한 번만 호출
    useEffect( () => {
        loadData();
    }, []);


    // data를 JSON 오브젝트로 변환해서 key, value 추출
    const jsonObj = JSON.parse(JSON.stringify(data));
    let result = [];
    for (var key in jsonObj) {
        // if(jsonObj[key] === null)
        result.push(
            <tr><td>{key}</td><td>{jsonObj[key]}</td></tr>
        )
    }


    return (
        <div>
            <h3>서버로부터 받아온 값</h3>
            <table border="1">
                {result}
            </table>
        </div>
    );
}

export default AxiosTest;