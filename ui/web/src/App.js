
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/dashboard" element={<Dashboard/>} />   
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
