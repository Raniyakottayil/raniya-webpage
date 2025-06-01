

import Header from "../components/Header";

import Services from "../components/Services";
import Service from "../components/Service";

import Footer from "../components/Footer";
import ServicesBanner from "../components/banner/Servicebanner";
const Servicepage = () => {
  return (
    <div>
        <Header />
      <main>
        < ServicesBanner/>
        <Services/>
        <Service/>
        
      </main>
      <Footer/>
    </div>
  )
}

export default Servicepage
