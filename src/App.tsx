import React from 'react';
import './App.css';
import { Navigation } from "./components/navigation"
import { Main } from "./components/main"
import { Contact } from "./components/contact"

import { Router , Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/beardedwrench" element={<Main />} />
          <Route path="/beardedwrench/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
