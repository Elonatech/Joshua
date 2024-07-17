import MainNav from "./components/MainNav"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Aboutus from "./components/Aboutus"
import Industries from "./components/Industries"
import Products from "./components/Products"
import CaseStudies from "./components/CaseStudies"
import Technology from "./components/Technology"
import TopClients from "./components/TopClient"
import Offer from "./components/Offer"

function App() {

  return (
    <>
      <NavBar />
      <MainNav />
      <Home />
      <Aboutus />
      <Industries />
      <Offer/>
      <Products />
      <CaseStudies/>
      <Technology/>
      <TopClients/>
     
    </>
  );
}

export default App
