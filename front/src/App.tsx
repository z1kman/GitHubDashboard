import React from "react";

// Styles
import "./App.scss";
import "./static/themes.css";

// Helpers
import cn from "classnames";

import './helpers/i18next';

// Components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";

function App() {
  return (
      <div className={cn("App")}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
