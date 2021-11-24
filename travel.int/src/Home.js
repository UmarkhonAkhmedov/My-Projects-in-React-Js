import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import PopularSearch from './components/PopularSearch';
import Category from './components/Category';
import Features from './components/Features';
import TopTours from './components/TopTours';
import ScanQr from './components/ScanQr';

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PopularSearch/>
      <Category/>
      <Features/>
      <TopTours/>
      <ScanQr/>
    </>

  );
}

export default Home;