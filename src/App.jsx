import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderFooter/Header";
import Error404 from "./Pages/ExtraPages/Error404";
import Home from "./Pages/MainPages/Home";
export const ThemeContext = createContext();

function App() {
  const [headerShow, setHeaderShow] = useState(false);

  return (
    <div className="main-bg">
      <ThemeContext.Provider
        value={{
          headerShow,
          setHeaderShow,
        }}
      >
        <Router>
          {headerShow === true ? <Header /> : null}

          <Routes key={document.pathname}>
            <>
              <Route path="/" element={<Home />} />

              <Route path="*" element={<Error404 />} />
            </>
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
