import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from './screens/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './screens/details/Details';

ReactDOM.render(
  // <React.StrictMode>
  <div>
    {/* <Home /> */}
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/details' element={<Details />} />
      </Routes>
    </Router>
  </div>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
