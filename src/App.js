import React, {useState, useEffect} from "react";
import './App.css';
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import {Routes, Route} from "react-router-dom";
import './App.css';
import axios from "axios";


function App() {
  return (
      <>
        <h1>REDDIT</h1>
        <p> concept opdracht</p>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/subreddit/:subredditId' element={<Subreddit/>}/>
        </Routes>
      </>
  );
}

export default App;
