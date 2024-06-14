import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import '../styles/Card.css';


function Card1({id, date, content, title}) {
  
  return (
    <div className='card'>
        <img alt='' src={process.env.PUBLIC_URL + '/photo' + id + '.jpg'} />
        <div className='texts'>
          <p>{title}</p>
          <span>{new Date(parseInt(date)).toLocaleDateString()}</span>
        
        </div>
    </div>
  );
}

export default Card1;
