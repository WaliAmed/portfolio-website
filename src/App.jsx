import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderFooter/Header";
import Error404 from "./Pages/ExtraPages/Error404";
import Home from "./Pages/MainPages/Home";
import About from "./Pages/MainPages/About";
import Footer from "./Components/HeaderFooter/Footer";
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
              <Route path="/about" element={<About />} />

              <Route path="*" element={<Error404 />} />
            </>
          </Routes>

          {headerShow === true ? <Footer /> : null}
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
