import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import "./index.css";
import { Home, Main } from "./pages";

export interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
