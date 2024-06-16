import React from 'react';
import '../styles/Detail.css';
import '../styles/Card.css';
import { NavLink } from 'react-router-dom';
import food1 from '../img/food-1.jpg';

const importAll = (requireContext) => requireContext.keys().map(requireContext);

const imagePath = importAll(
  require.context('../img', true, /\.(png|jpe?g|svg)$/)
);

export function Food() {
  let img = [];
  for (let i = 0; i < imagePath.length; i++) {
    if (imagePath[i].substr(13, 6) === '/food-')
      img.push(
        <div className="img-Card" key={i}>
          <img className="img-size" src={imagePath[i]} width="600%"></img>
          <div className="texts">
            <NavLink to="/Blog" className="p-title">
              <span>Food 게시글 {imagePath[i].substr(19, 1)}</span>
            </NavLink>
          </div>
        </div>
      );
  }

  return (
    <div className="Viewer">
      <div className="img-box">{img}</div>
    </div>
  );
}

export function Trip() {
  let img = [];
  for (let i = 0; i < imagePath.length; i++) {
    if (imagePath[i].substr(13, 6) === '/trip-')
      img.push(
        <div className="img-Card" key={i}>
          <img className="img-size" src={imagePath[i]} width="600%"></img>
          <div className="texts">
            <NavLink to="/Blog" className="p-title">
              <span>Trip 게시글 {imagePath[i].substr(19, 1)}</span>
            </NavLink>
          </div>
        </div>
      );
  }

  return (
    <div className="Viewer">
      <div className="img-box">{img}</div>
    </div>
  );
}

export function Festival() {
  let img = [];
  for (let i = 0; i < imagePath.length; i++) {
    if (imagePath[i].substr(13, 10) === '/festival-')
      img.push(
        <div className="img-Card" key={i}>
          <img className="img-size" src={imagePath[i]} width="600%"></img>
          <div className="texts">
            <NavLink to="/Blog" className="p-title">
              <span>Festival 게시글 {imagePath[i].substr(23, 1)}</span>
            </NavLink>
          </div>
        </div>
      );
  }

  return (
    <div className="Viewer">
      <div className="img-box">{img}</div>{' '}
    </div>
  );
}

export function Study() {
  let img = [];
  for (let i = 0; i < imagePath.length; i++) {
    if (imagePath[i].substr(13, 7) === '/study-')
      img.push(
        <div className="img-Card" key={i}>
          <img className="img-size" src={imagePath[i]} width="600%"></img>
          <div className="texts">
            <NavLink to="/Blog" className="p-title">
              <span>Study 게시글 {imagePath[i].substr(20, 1)}</span>
            </NavLink>
          </div>
        </div>
      );
  }

  return (
    <div className="Viewer">
      <div className="img-box">{img}</div>
    </div>
  );
}

export default function Content() {
  const ContentsTitle = <div>제주도 여행 2박3일 다녀왔습니다</div>;
  const ContentsBody = <div> 제주도 … 2박 … 3일 … </div>;
  return (
    <div className="Cotents-container">
      <div className="Contents-box">
        <div className="Content-body">
          {/* <img src={food1}></img> */}
          {ContentsTitle}
          {ContentsBody}
        </div>
      </div>
    </div>
  );
}
