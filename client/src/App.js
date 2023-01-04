import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AskQuestion from "./components/AskQuestion";
import Results from "./components/Results";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/question" element={<AskQuestion />}></Route>
          <Route path="/allResponses" element={<Results />}></Route>
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
