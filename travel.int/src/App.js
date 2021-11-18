import './App.css';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero'
import PopularSearch from './components/Home/PopularSearch';
import Category from './components/Home/Category';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PopularSearch/>
      <Category/>
    </>

  );
}

export default App;
