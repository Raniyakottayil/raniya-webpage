
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactBanner from "../components/banner/ContactBanner";
import Quote from "../components/Quote";




const Contactpage = () => {
  return (
    <div><Header />
      <main>
        <ContactBanner/>
        <Contact/>
        <Quote/>
      </main>
      <Footer/></div>
  )
}

export default Contactpage