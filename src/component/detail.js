import React from 'react';
import '../styles/Detail.css';
import '../styles/Card.css';
import { NavLink } from 'react-router-dom';

const importAll = (requireContext) => requireContext.keys().map(requireContext);

const imagePath = importAll(
  require.context('../img', true, /\.(png|jpe?g|svg)$/)
);

let imgPath = null;
let ContentsTitle = null;
let ContentsBody = null;
let ContentsImg = null;

export function Food() {
  let img = [];
  for (let i = 0; i < imagePath.length; i++) {
    if (imagePath[i].substr(13, 6) === '/food-')
      img.push(
        <div className="img-Card" key={i}>
          <img className="img-size" src={imagePath[i]} width="600%"></img>
          <div className="texts">
            <NavLink to={"/blog/food" + i} className="p-title" onClick={() => {
              imgPath = imagePath[i];
              ContentsTitle = <span className='span-title'>food {imagePath[i].substr(19, 1)}번째 글</span>;
              ContentsBody = <p>글 내용 food {imagePath[i].substr(19, 1)}</p>
            }}>
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
            <NavLink to={"/blog/trip" + i} className="p-title" onClick={() => {
              imgPath = imagePath[i];
              ContentsTitle = <span className='span-title'>trip {imagePath[i].substr(19, 1)}번째 글</span>;
              ContentsBody = <p>글 내용 trip {imagePath[i].substr(19, 1)}</p>
            }}>
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
            <NavLink to={"/blog/festival_" + i} className="p-title" onClick={() => {
              imgPath = imagePath[i];
              ContentsTitle = <span className='span-title'>festival {imagePath[i].substr(23, 1)}번째 글</span>;
              ContentsBody = <p>글 내용 festival {imagePath[i].substr(23, 1)}</p>
            }}>
              <span>Festival 게시글 {imagePath[i].substr(23, 1)}</span>
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

export function Study() {
  let img = [];

  for (let i = 0; i < imagePath.length; i++) {
    if (imagePath[i].substr(13, 7) === '/study-')

      img.push(
        <div className="img-Card" key={i}>
          <img className="img-size" src={imagePath[i]} width="600%"></img>
          <div className="texts">
            <NavLink to={"/blog/study_" + i} className="p-title" onClick={() => {
              imgPath = imagePath[i];
              ContentsTitle = <span className='span-title'>Study {imagePath[i].substr(20, 1)}번째 글</span>;
              ContentsBody = <p>글 내용 Study {imagePath[i].substr(20, 1)}</p>
            }}>
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

  ContentsImg = <img src={imgPath} className='img-Card' ></img>;

  return (
    <div className="Cotents-container">
      {ContentsImg}
      <div className="Contents-box">
        <div className="Content-body">

          {ContentsTitle}
          {ContentsBody}

        </div>
      </div>
    </div>
  );
}
