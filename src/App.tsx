import Header from "./blocks/Header/Header";
import "./App.scss";
import Banner from "./blocks/Banner/Banner";
import Info from "./blocks/Info/Info";
import Menu from "./blocks/Menu/Menu";
import Testimonials from "./blocks/Testimonials/Testimonials";
import Offers from "./blocks/Offers/Offers";
import SecondMenu from "./blocks/SecondMenu/SecondMenu";
import WeOffer from "./blocks/WeOffer/WeOffer";
import Blog from "./blocks/Blog/Blog";
import Reservation from "./blocks/Reservarion/Reservation";
import Footer from "./blocks/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Info/>
      <Menu/>
      <Testimonials/>
      <Offers/>
      <SecondMenu/>
      <WeOffer/>
      <Blog/>
      <Reservation/>
      <Footer/>
    </>
  );
}

export default App;
