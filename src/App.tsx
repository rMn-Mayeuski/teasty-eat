import Header from "./blocks/Header/Header";
import "./App.scss";
import Banner from "./blocks/Banner/Banner";
import Info from "./blocks/Info/Info";
import Menu from "./blocks/Menu/Menu";
import Testimonials from "./blocks/Testimonials/Testimonials";
import Offers from "./blocks/Offers/Offers";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Info/>
      <Menu/>
      <Testimonials/>
      <Offers/>
    </>
  );
}

export default App;
