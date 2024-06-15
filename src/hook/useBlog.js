import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogStateContext } from "../App";
const useBlog = (id) => {
  const data = useContext(BlogStateContext);
  const [blog, setBlog] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const matchBlog = data.find((it) => String(it.id) === String(id));
    if (matchBlog) {
      setBlog(matchBlog);
    } else {
      alert("글이 존재하지 않습니다");
      navigate("/", { replace: true });
    }
  }, [id, data]);

  return blog;
};
export default useBlog;
