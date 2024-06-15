import React, { useContext } from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import Editor from "../component/Editor";
import '../styles/Home.css'
import '../styles/Darkmode.css';
import { BlogStateContext } from "../App";


function Edit(){
    const data = useContext(BlogStateContext);
    return (
        <div className="Edit">
            <Header></Header>
            <div className="Content">
                <Profile></Profile>
                <Editor></Editor>
            </div>
        </div>
    )
}

export default Edit;