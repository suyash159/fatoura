import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import ManageInvoices from "./components/manageInvoice";
import Navigation from "./components/navigatio";
import Pricing from "./components/pricing";
import SliderC from "./components/slider";
import Subscribe from "./components/subscribe";

var lastPosition;
function App() {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.pageYOffset <= 20) {
      setShow(true);
    } else if (window.pageYOffset < lastPosition) {
      setShow(true);
    } else {
      setShow(false);
    }
    lastPosition = window.scrollY;
  };
  console.log(show);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      {show && <Navigation />}
      <div className=" ml-20 mr-20 font-face-gr">
        <Home />
        <ManageInvoices />
        <SliderC />
        <Pricing />
        <Subscribe />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
