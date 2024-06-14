import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";



function Card(){
    let [title, setTitle] = useState(['내돈내산 리뷰(광고x)','대만드라마 추천','홍대 나들이','여름 필수템 추천'])
    let [날짜, 날짜바꾸기] = useState(['24/06/14','24/06/16','24/06/18'])


    return(
        <div>
            <div className="SortBtn">
                <button onClick={()=>{
                    let copy = [...title];
                    copy.sort();
                    setTitle(copy)
                }}>글 정렬하기</button>
            </div>            
        




        {
            title.map((a,i)=>{
                return(
                    <div className="card" key={i}>
                        <img src={process.env.PUBLIC_URL + '/photo' +(i+1)+'.jpg'} />
                        <p>{title[a]}</p> <span>{날짜[a]}</span>
                        <hr/>
                    </div>
                )
            })
        }




        





        </div>
    )

}




export default Card;
