import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderFooter/Header";
import Error404 from "./Pages/ExtraPages/Error404";
import Home from "./Pages/MainPages/Home";
import About from "./Pages/MainPages/About";
import Footer from "./Components/HeaderFooter/Footer";
import Portfolio from "./Pages/MainPages/Portfolio";
import PortfolioMain from "./Pages/MainPages/PortfolioMain";
import PortfolioAll from "./Pages/MainPages/PortfolioAll";
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
              <Route path="/portfolio" element={<Portfolio />}>
                <Route path="" element={<PortfolioMain />} />
                <Route path="view-all" element={<PortfolioAll />} />
              </Route>

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
