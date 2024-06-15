import React, { useContext } from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import CardList from '../component/CardList'
// import DarkMode from '../component/Darkmode';
import '../styles/Home.css'
import Card from '../component/Card';
import '../styles/Darkmode.css';
import Detail from '../component/detail';
import { BlogStateContext } from "../App";


function Home(){
    const data = useContext(BlogStateContext);
    return (
        <div className="Home">
            {/* <p>홈입니다</p> */}
            <Header></Header>
            <div className="Content">
                <Profile></Profile>
                <Detail></Detail>
                {/* <Card></Card> */}
                <CardList data={data}/>
            </div>
        </div>
    )
}

export default Home;