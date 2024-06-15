import { useState, useEffect } from "react";
import Button from "./Button";
import "../styles/CardList.css";
import { useNavigate } from "react-router-dom";
import Card1 from "./Card1";

const CardList = ({ data }) => {
  let [count,setCount] = useState(0);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const compare = (a, b) => {
      if (count%2 !== 0) {
        return a.title.localeCompare(b.title);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, count]);

  const handleSort = ()=>{
    setCount(count+1)
  }
  return (
    <div className="CardList">
    <div className="cards">
        {sortedData.map((it) => (
          <Card1 key={it.id} {...it} />
        ))}
      <button onClick={handleSort}>정렬</button>
    </div>
    </div>
  );
};
export default CardList;
