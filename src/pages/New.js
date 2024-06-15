import React, { useContext } from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import Editor from "../component/Editor";
import '../styles/Home.css'
import { BlogDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";


function New(){
    const { onCreate } = useContext(BlogDispatchContext);
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        const {date, content, title, good} = data;
        onCreate(date, content, title, good);
            navigate("/", {replace:true})
    }

    return (
        <div className="Home">
            <Header></Header>
            <div className="Content">
                
                <Profile></Profile>
                <div className="cards">
                    <Editor onSubmit={onSubmit}></Editor>
                </div>
            </div>
        </div>
    )
}

export default New;