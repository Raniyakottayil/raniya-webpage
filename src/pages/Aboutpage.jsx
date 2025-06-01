import Header from "../components/Header"
import About from "../components/About"
import Team from "../components/Team"
import Footer from "../components/Footer"
import AboutBannerr from "../components/banner/AboutBannerr"

const Aboutpage = () => {
  return (
    <div>
        <Header />
      <main>
        <AboutBannerr/>
        <About />
       
        <Team/>
       
      </main>
      <Footer/>
    </div>
  )
}

export default Aboutpage