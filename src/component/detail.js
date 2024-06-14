import React from "react";
import { Route, Routes } from "react-router-dom";
import '../styles/Detail.css';

function Foods() {
    return (
        <dev>

        </dev>

    )
}

function Trip() {
    return (
        <dev>
            
        </dev>
    )
}

function Festival() {
    return (
        <dev>
            
        </dev>
    )
}

function Study() {
    return (
        <dev>
            
        </dev>
    )
}


const ContentsTitle = <h2>제주도 여행 2박3일 다녀왔습니다</h2>;
const ContentsBody = <p> 제주도 … 2박 … 3일 … </p>;
function Contents(){
    return(
        <div id="Contents-box">
            <div className="Content">
                <article>
                {ContentsTitle}
                {ContentsBody}
                </article>
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

