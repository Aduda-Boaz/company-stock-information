import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Companies';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/company-profile" element={<Home />} />
        <Route path="/:companySymbol" element={<Company />} />
      </Routes>
    </div>
  </Router>
);

export default App;
