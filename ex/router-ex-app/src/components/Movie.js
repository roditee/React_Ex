import { useParams } from "react-router-dom";

const data = {
    spider: {
        title: '스파이더맨 노 웨이 홈',
        director: '존 왓츠',
        actor: '톰 홀랜드',
        date: '2021-12-15',
        genre: '액션'
    },
    king : {
        title: '킹스맨 : 퍼스트 에이전트',
        director: '메뉴 본',
        actor: '랄프 파인즈',
        date: '2021-12-22',
        genre: '액션'

    }
}

function Movie(){
    const params = useParams();
    const movie = data[params.keyword];
    console.log(movie);

    if(!movie){
        return <div><hr/><div>영화 정보가 없습니다.</div></div>
    }

    return (
        <div>
            <hr />
            <h3>
                {params.keyword} : {movie.title}
            </h3>
            <p>감독: {movie.director} </p>  
            <p>배우: {movie.actor}</p>
            <p>개봉일: {movie.date}</p>
            <p>장르: {movie.genre}</p>
        </div>
    )
}

export default Movie