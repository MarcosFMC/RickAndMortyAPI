import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BackgroundParticles,
  ErrorRoutesPage,
  LoadingWindow,
  Nav,
} from "./components";
import "./index.css";
import { Create } from "./pages";
const Home = lazy(() => import("./pages/Home/Home"));
const Main = lazy(() => import("./pages/Main/Main"));

export interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<LoadingWindow />}>
          <Routes>
            <Route path="/RickAndMortyAPI" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<ErrorRoutesPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
