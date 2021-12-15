import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./pages/contacto";
import Home from "./pages/home";
import Nosotros from "./pages/nosotros";
import Producto from "./pages/producto";
import Servicio from "./pages/servicio";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="producto" element={<Producto />} />
          <Route path="servicio" element={<Servicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
