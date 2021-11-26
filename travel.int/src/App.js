import './App.css';
import Category from './Category';
import Home from './Home';
import ToursPage from './ToursPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/category" element={<Category/>}></Route>
          <Route path="/tours" element={<ToursPage/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
