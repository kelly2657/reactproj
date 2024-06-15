import React, { useContext } from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import Editor from "../component/Editor";
import '../styles/Home.css'
import '../styles/Darkmode.css';
import { BlogDispatchContext } from "../App";
import useBlog from "../hook/useBlog";
import { useNavigate, useParams } from "react-router-dom";


function Edit(){
    const { id } = useParams();
    const data = useBlog(id);
    const { onUpdate } = useContext(BlogDispatchContext);
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        const {date, content, title, good} = data;
        onUpdate(id, date, content, title, good);
            navigate("/", {replace:true})
    }

    return (
        <div className="Home">
            <Header></Header>
            <div className="Content">
                
                <Profile></Profile>
                <Editor initData={data} onSubmit={onSubmit}></Editor>
            </div>
        </div>
    )
}

export default Edit;