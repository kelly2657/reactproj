import React from "react";
import { Route, Routes } from "react-router-dom";

function Foods() {
    return (
        <dev><ol>
            <li>4 음식 게시글 1</li>
            <li>3 음식 게시글 2</li>
            <li>2 음식 게시글 3</li>
            <li>1 음식 게시글 4</li>
        </ol>
        </dev>

    )
}

function Trip() {
    return (
        <dev><ol>
            <li>z 여행 게시글 1</li>
            <li>c 여행 게시글 2</li>
            <li>b 여행 게시글 3</li>
            <li>a 여행 게시글 4</li>
        </ol>
        </dev>
    )
}

function Festival() {
    return (
        <dev><ol>
            <li>ㅎ축제 게시글 1</li>
            <li>ㄴ축제 게시글 2</li>
            <li>ㄷ축제 게시글 3</li>
            <li>ㄱ축제 게시글 4</li>
        </ol>
        </dev>
    )
}

function Study() {
    return (
        <dev><ol>
            <li>w 공부 게시글 1</li>
            <li>d 공부 게시글 4</li>
            <li>z 공부 게시글 2</li>
            <li>a 공부 게시글 3</li>
        </ol>
        </dev>
    )
}



function Detail() {
    return (
        <div>
            <Routes>
                <Route path="/category/foods" element={<Foods />}></Route>
                <Route path="/category/trip" element={<Trip />}></Route>
                <Route path="/category/festival" element={<Festival />}></Route>
                <Route path="/category/study" element={<Study />}></Route>
            </Routes>
        </div>
    )
}

export default Detail;