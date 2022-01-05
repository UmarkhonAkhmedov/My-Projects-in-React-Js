import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
