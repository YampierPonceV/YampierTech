import Hero from "../Components/Hero";
import Producto from "../Components/Producto";
import ServicioInicio from "../Components/ServicioInicio";
import Wrapper from "../Components/Wrapper";
import Contacto from "../Components/Contacto";
const Home = () => {
  return (
    <>
      <Hero />
      <Wrapper>
        <Producto />
      </Wrapper>
      <ServicioInicio />
      <Wrapper>
        <Contacto />
      </Wrapper>
    </>
  );
};

export default Home;
