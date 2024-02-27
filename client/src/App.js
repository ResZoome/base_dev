import React from "react";
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <div style={{paddingLeft: "5rem", paddingRight: "5rem"}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    
    </>
  );
}

export default App;
