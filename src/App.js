import React from "react";
import './App.css';
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navigation from './components/navigation/Navigation'
// import NotFound from './pages/notfound/NotFound';


function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/subreddit/:id' element={<Subreddit/>}/>
                {/*<Route path='*' element={<NotFound/>}*/}
            </Routes>


            <footer className="outerContainerFooter">
                <div className="innercontainerFooter">
                    In opdracht van NOVI hogeschool @2022
                </div>
            </footer>
        </>
    );
}

export default App;
