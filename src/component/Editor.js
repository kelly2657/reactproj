import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState, useEffect } from "react";
import { getFormattedDate } from "../util";
import '../styles/Editor.css'
const Editor = ({initData, onSubmit}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        content:"",
        title:""
    })

    useEffect(() => {
        if (initData) {
          setState({
            ...initData,
            date: getFormattedDate(new Date(parseInt(initData.date))),
          });
        }
      }, [initData]);

    const handleChangeTitle = (e) => {
        setState({
          ...state,
          title: e.target.value,
        });
      };
    const handleChangeContent = (e) => {
        setState({
          ...state,
          content: e.target.value,
        });
      };
    const handleGoBack = () =>{
        navigate(-1);
    }  
    const handleSubmit = () => {
        onSubmit(state);
    }
    return(
        <div className="Editor">
            <div className="editor-section bottom-section">
                    <Button text={"취소하기"} onClick={handleGoBack}></Button>
                    <Button text={"보내기"} onClick={handleSubmit}></Button>
                </div>
            <div className="input-wrapper">
                <input placeholder="글 제목" type="text" value={state.title} onChange={handleChangeTitle}/>
            </div>
            <div className="editor-section">
                <div className="input-wrapper">
                    <textarea placeholder="글을 입력하세요..."
                        value={state.content}
                        onChange={handleChangeContent}/>
                </div>
                
            </div>
        </div>
    )
}

export default Editor;