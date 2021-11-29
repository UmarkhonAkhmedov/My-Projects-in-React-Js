import './App.css';
import SecondNavbar from './components/Category/SecondNavbar'
import Description from './components/ToursPage/Description';
import Footer from './components/Home/Footer';
import ToursRecommendation from './components/ToursPage/ToursRecommendation';



function ToursPage() {
  return (
    <>
      <SecondNavbar/>
      <Description/>
      <ToursRecommendation/>
      <Footer/>
    </>

  );
}

export default ToursPage;