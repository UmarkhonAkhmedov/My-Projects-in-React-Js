import './App.css';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero'
import PopularSearch from './components/Home/PopularSearch';
import Slide from './components/Home/Slide';
import Features from './components/Home/Features';
import TopTours from './components/Home/TopTours';
import ScanQr from './components/Home/ScanQr';
import Footer from './components/Home/Footer';


function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PopularSearch/>
      <Slide/>
      <Features/>
      <TopTours/>
      <ScanQr/>
      <Footer/>
    </>

  );
}

export default Home;