import Nav from "./components/NavBar"
import Home from "./components/Home"
import Aboutus from "./components/Aboutus"
import Industries from "./components/Industries"
import Products from "./components/Products"
import CaseStudies from "./components/CaseStudies"
import Technology from "./components/Technology"
import TopClients from "./components/TopClient"
import Offer from "./components/Offer"
import Footer from "./components/Footer"
import MainNav from "./components/Nav-Bar"
import Navbar from "./components/MyNav"
function App() {
  
  return (
    <>
      <Nav />
      {/* <Navbar/> */}
      <MainNav/>
      <Home />
      <Industries />
      <CaseStudies/>
      <Aboutus />
       <Offer/>
      <Products />
      <Technology/>
      <TopClients/>
      <Footer/>
     
    </>
  );
}

export default App
