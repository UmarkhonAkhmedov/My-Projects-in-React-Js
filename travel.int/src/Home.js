import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import PopularSearch from './components/PopularSearch';
import Category from './components/Category';
import Features from './components/Features';

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PopularSearch/>
      <Category/>
      <Features/>
    </>

  );
}

export default Home;