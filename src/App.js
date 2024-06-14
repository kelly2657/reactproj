import React, { useReducer, useRef, useEffect } from "react";
import './App.css';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Edit from "./pages/Edit";

import './styles/Darkmode.css';
import { Routes, Route } from 'react-router-dom';

const mockData = [
  {
    id: "mock1",
    date: new Date("2024-05-31").getTime(),//new Date().getTime() - 1,
    content: "mock1이 어쩌구 저쩌구... ",
    title: "mock1 입니다",
  },
  {
    id: "mock2",
    date: new Date("2024-06-14").getTime(),//new Date().getTime() - 2,
    content: "mock2이 어쩌구 저쩌구...",
    title: "mock1 입니다",
  },
  {
    id: "mock3",
    date: new Date("2024-06-13").getTime(),//new Date().getTime() - 3,
    content: "mock3이 어쩌구 저쩌구...",
    title: "mock1 입니다",
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
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
  }, []);

  const onCreate = (date, content, title) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        title
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, title) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        title,
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
      <BlogDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <div className='App'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/blog/:id" element={<Blog/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
          </div>
      </BlogDispatchContext.Provider>
    </BlogStateContext.Provider>
  );
}

export default App;
