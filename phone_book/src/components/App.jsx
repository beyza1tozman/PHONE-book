import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../../public/styles.css'; // Adjust the path accordingly



import Home from "./Home";
import LogIn from "./LogIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
