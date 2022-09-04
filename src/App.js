import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

import Nav from "./components/Navbar";
import ErrorBondary from "./errorBondary";
// ==========
// 1. import functions of React Router.

// .--------------------------------------------
function App() {
  return (
    <ErrorBondary>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
        <Routes>
          {/* //  el "*"  Just Check it out  whe to use it.  */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ErrorBondary>
  );
}

export default App;
