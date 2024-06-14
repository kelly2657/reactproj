import { useState, useEffect } from "react";
import Button from "./Button";
import "../styles/CardList.css";
import { useNavigate } from "react-router-dom";
import Card1 from "./Card1";

const CardList = ({ data }) => {

  return (
    <div className="CardList">
    <div className="cards">
      
        {data.map((it) => (
          <Card1 key={it.id} {...it} />
        ))}
    
    </div>
    </div>
  );
};
export default CardList;
