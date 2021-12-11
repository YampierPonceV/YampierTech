import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Producto from "./Components/Producto";
import ServicioInicio from "./Components/ServicioInicio";
import Wrapper from "./Components/Wrapper";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Wrapper>
        <Producto />
      </Wrapper>
      <ServicioInicio />
      <Wrapper>
        <Contacto />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
