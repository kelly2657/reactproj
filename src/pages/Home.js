import React, { useContext } from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import CardList from '../component/CardList'
import '../styles/Home.css'
import '../styles/Darkmode.css';
import { BlogStateContext } from "../App";


function Home(){
    const data = useContext(BlogStateContext);
    return (
        <div className="Home">
            <Header></Header>
            <div className="Content">
                <Profile></Profile>
                <CardList data={data}/>
            </div>
        </div>
    )
}

export default Home;