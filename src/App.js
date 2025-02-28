import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import HomePage from './acrements/HomePage';
import Careers from './acrements/Careers';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
      {/* <Careers /> */}
    </div>
  );
}
// "homepage": "https://arshiya-sy.github.io/acrements_feb"

export default App;
