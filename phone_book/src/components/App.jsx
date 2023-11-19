import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import LogIn from "./LogIn";
import MainPage from "./MainPage";
import NewContactPage from "./NewContactPage";
import EditContactPage from "./EditContactPage";
import NotFoundPage from "./NotFoundPage";
import '../../public/styles.css'; 
import { ContactsProvider } from "../ContactsContext"; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContactsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/NewContactPage" element={<NewContactPage />} />
            <Route path="/edit/:id" element={<EditContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ContactsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
