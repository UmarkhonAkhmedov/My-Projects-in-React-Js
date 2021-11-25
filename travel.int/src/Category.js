import './App.css';
import SecondNavbar from './components/Category/SecondNavbar'
import Slide from './components/Home/Slide'
import ScanQr from './components/Home/ScanQr'
import Footer from './components/Home/Footer'
import TopTours from './components/Home/TopTours' 
import Choose from './components/Category/Choose';

function Category() {
  return (
    <>
      <SecondNavbar/>
      <Slide/>
      <Choose/>
      <TopTours></TopTours>
      <TopTours></TopTours>
      <ScanQr/>
      <Footer/>
    </>

  );
}

export default Category;