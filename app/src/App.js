import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import DonatePage from "./Pages/DonatePage/DonatePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
