import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
