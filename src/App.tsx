import React from "react";

// Styles
import "./App.css";
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

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setTheme("dark"));
  };

  return (
    <div className={cn("App", `theme-${theme}`)}>
      <BrowserRouter>
        <button type="button" onClick={() => onClick()}>
          dsadsa
        </button>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
