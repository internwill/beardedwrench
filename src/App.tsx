import React from 'react';
import './App.css';
import { Navigation } from "./components/navigation"
import { Main } from "./components/main"
import { Contact } from "./components/contact"

import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
