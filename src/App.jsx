
import Home from "./components/Home"
import Aboutus from "./components/Aboutus"
import Industries from "./components/Industries"
import Products from "./components/Products"
import CaseStudies from "./components/CaseStudies"
import Technology from "./components/Technology"
import TopClients from "./components/TopClient"
import Offer from "./components/Offer"
import Footer from "./components/Footer"
import MainNav from "./components/MainNav"
import TopNav from "./components/Topnav"

function App() {
  
  return (
    <>
      <TopNav />
      <MainNav />
      <Home />
      <Industries />
      <CaseStudies />
      <Aboutus />
      <Offer />
      <Products />
      <Technology />
      <TopClients />
      <Footer/> 
    </>
  );
}

export default App
