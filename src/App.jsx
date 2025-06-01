

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicepage from "./pages/Servicepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />

      </Routes>
    </Router>
  );
}

export default App; 


