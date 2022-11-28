import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorRoutesPage, LoadingWindow } from "./components";
import "./index.css";
const Home = lazy(() => import("./pages/Home/Home"));
const Main = lazy(() => import("./pages/Main/Main"));

export interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<LoadingWindow />}>
          <Routes>
            <Route path="/RickAndMortyAPI" element={<Home />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="*" element={<ErrorRoutesPage />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
