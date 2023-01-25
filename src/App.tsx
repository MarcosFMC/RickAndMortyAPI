import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorRoutesPage, LoadingWindow } from "./components";
import { DataModeProvider } from "./contexts";
import "./index.css";
import { Create, Main } from "./pages";
const Home = lazy(() => import("./pages/Home/Home"));

export interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  return (
    <div>
      <DataModeProvider>
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
      </DataModeProvider>
    </div>
  );
};

export default App;
