import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import '../styles/Card.css';


function Card() {
  let [title, setTitle] = useState([
    '나만 쓰고싶은 캐리어 추천',
    '대만드라마 추천',
    '홍대 나들이',
    '겨울 필수템 추천',
  ]);
  let [날짜, 날짜바꾸기] = useState([
    '24/06/14',
    '24/06/16',
    '24/06/18',
    '24/06/20',
  ]);

  let [good,addGood] = useState([0,0,0,0]);

  return (
    <div className="container">
      <div>
        <button className='SortBtn'
          onClick={() => {
            let copy = [...title];
            copy.sort();
            setTitle(copy);
          }}>
          글 정렬하기
        </button>
      </div>
      

      <div className="cards">
        {title.map((a, i) => {
          return (
            <div className="card" key={i}>
              <img src={process.env.PUBLIC_URL + '/photo' + (i + 1) + '.jpg'} />
              <div className="texts">
                  <p>{title[i]}</p>
                  <h4>{날짜[i]}</h4>
                <span className='heart'
                onClick={()=>{
                  let copy = [...good];
                  copy[i]= copy[i]+1;
                  addGood(copy)
                }}>❤️</span><h3>{good[i]}</h3>
                                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
