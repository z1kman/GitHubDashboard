import React from "react";

// Styles
import "./App.scss";
import "./static/themes.css";

// Helpers
import cn from "classnames";

// RTK
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./features/theme/themeSlice";

// Components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootState } from "./app/store";
import Main from "./routes/Main";
import "./helpers/i18next";

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setTheme("dark"));
  };

  return (
    <div className={cn("App", `theme-${theme}`)}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <button type="button" onClick={() => onClick()}>
          dsadsa
        </button>
    </div>
  );
}

export default App;
