import React from "react";
import { Route, Routes } from "react-router-dom";
import '../styles/Detail.css';


// require.context를 사용하여 폴더 내 모든 이미지 가져오기
const importAll = (requireContext) => 
    requireContext.keys().map(requireContext);

const imagePath = importAll(require.context('../img', true, /\.(png|jpe?g|svg)$/));
console.log(imagePath);

function Foods() {
    let img = [];
    for ( let i=0; i<imagePath.length; i++){
        if(imagePath[i].substr(13, 6) === "/food-")
            img.push(<div className="img-Card">
                <img className="img-size" key={i} src={imagePath[i]}  width="600%"></img>
                </div>);
    }

    return (
        <div className="img-box">
            {img}
        </div>

    )
}

function Trip() {
    let img = [];
    for ( let i=0; i<imagePath.length; i++){
        if(imagePath[i].substr(13, 6) === "/trip-")
            img.push(<div className="img-Card">
                <img className="img-size" key={i} src={imagePath[i]}  width="600%"></img>
                </div>);
    }

    return (
        <div className="img-box">
            {img}
        </div>
    )
}

function Festival() {
    let img = [];
    for ( let i=0; i<imagePath.length; i++){
        if(imagePath[i].substr(13, 10) === "/festival-")
            img.push(<div className="img-Card">
                <img className="img-size" key={i} src={imagePath[i]}  width="600%"></img>
                </div>);
    }

    return (
        <div className="img-box">
            {img}
        </div>
    )
}

function Study() {
    let img = [];
    for ( let i=0; i<imagePath.length; i++){
        if(imagePath[i].substr(13, 7) === "/study-")
            img.push(<div className="img-Card">
                <img className="img-size" key={i} src={imagePath[i]}  width="600%"></img>
                </div>);
    }

    return (
        <div className="img-box">
            {img}
        </div>
    )
}

function Content() {
    const ContentsTitle = <h2>제주도 여행 2박3일 다녀왔습니다</h2>;
    const ContentsBody = <p> 제주도 … 2박 … 3일 … </p>;
    return (
        <div id="Contents-box">
        <article className="Content">
            {ContentsTitle}
            {ContentsBody}
            
        </article>
        </div>
    )
}


function Contents() {
    return (
        <div >
            <div >
            <Routes>
                <Route path="/foods" element={<Foods />}></Route>
                <Route path="/trip" element={<Trip />}></Route>
                <Route path="/festival" element={<Festival />}></Route>
                <Route path="/study" element={<Study />}></Route>
            </Routes>
            </div>
        </div>
    )
}


function Detail() {
    return (
        <div className="Viewer">
            <Contents></Contents>

        </div>
    )
}

export default Detail;

