import React, { useReducer, useRef, useEffect } from "react";
import './App.css';
import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import Edit from "./pages/Edit";
import Detail, { Trip, Festival, Study } from "./component/detail";
import Foods from "./pages/Foods";
import Header from './component/Header';
import Profile from './component/Profile';
import './styles/Darkmode.css';
import { Routes, Route } from 'react-router-dom';

const mockData = [
  {
    id: "1",
    date: new Date("2024-05-31").getTime(),//new Date().getTime() - 1,
    content: "내돈내산 리뷰(광고x) 내용",
    title: "내돈내산 리뷰(광고x) 제목",
    good: 0
  },
  {
    id: "2",
    date: new Date("2024-06-14").getTime(),//new Date().getTime() - 2,
    content: "대만드라마 추천 내용",
    title: "대만드라마 추천 제목",
    good: 0
  },
  {
    id: "3",
    date: new Date("2024-06-13").getTime(),//new Date().getTime() - 3,
    content: "홍대 나들이 내용",
    title: "홍대 나들이 제목",
    good: 0
  }, {
    id: "4",
    date: new Date("2024-05-31").getTime(),//new Date().getTime() - 1,
    content: "겨울 필수템 추천 내용",
    title: "겨울 필수템 추천 제목",
    good: 0

  },
];

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
}

export const BlogStateContext = React.createContext();
export const BlogDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(4);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
  }, []);

  const onCreate = (date, content, title, good) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        title,
        good
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, title, good) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        title,
        good
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <BlogStateContext.Provider value={data}>
      <BlogDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />}></Route>
            <Route path="/trip" element={<Trip />}></Route>
            <Route path="/festival" element={<Festival />}></Route>
            <Route path="/study" element={<Study />}></Route>
            {/* <Route path="/blog/:id" element={<Blog/>}/>
              <Route path="/edit/:id" element={<Edit/>}/> */}
          </Routes>
          {/* <Header></Header>
          <Profile></Profile> */}
        </div>
      </BlogDispatchContext.Provider>
    </BlogStateContext.Provider>
  );
}

export default App;
