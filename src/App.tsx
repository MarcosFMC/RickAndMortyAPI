import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage, Loading } from "./components";
import "./index.css";
const Home = lazy(() => import("./pages/Home/Home"));
const Main = lazy(() => import("./pages/Main/Main"));

export interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loading></Loading>}>
          <Routes>
            <Route path="/RickAndMortyAPI" element={<Home />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
