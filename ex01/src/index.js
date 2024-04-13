// index.js 컴퍼넌트가 가장 먼저 실행됨
// 여기서 App.js 컴퍼넌트가 실행되는거임
// .이면 클래스 name / #이면 id

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// document ID가 root인 애를 root에 저장
root.render( //root에 App이라는 컴포넌트를 reder한다 (그린다)
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
