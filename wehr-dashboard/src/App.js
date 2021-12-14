import './App.css';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
