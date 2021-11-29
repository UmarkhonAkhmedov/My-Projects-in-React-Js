import './App.css';
import SecondNavbar from './components/Category/SecondNavbar'
import Slide from './components/Home/Slide'
import ScanQr from './components/Home/ScanQr'
import Footer from './components/Home/Footer'
import Choose from './components/Category/Choose';
import TopToursCategory from './components/Category/TopToursCategory';

function Category() {
  return (
    <>
      <SecondNavbar/>
      <Slide/>
      <Choose/>
      <TopToursCategory/>
      <ScanQr/>
      <Footer/>
    </>

  );
}

export default Category;