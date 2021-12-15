import styled from "styled-components";
import { Servicios } from "../data/servicio";
import ServicioCard from "./ServicioCard";
import Wrapper from "./Wrapper";

const ServicioInicioStyle = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
  width: 100%;
  background-color: #301777;
  color: #d6d0d0;
  .container-servicios {
    position: relative;
    height: 550px;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
    .container-servicios {
      height: 600px;
    }
  }
  
  }

 
`;

const ServicioInicio = () => {
  return (
    <ServicioInicioStyle>
      <Wrapper>
        <h2>Servicio Inicio</h2>
        <hr />
        <div className="container-servicios">
          {Servicios.map(({ id, nombre, descripcion, texto, imagen }) => {
            return (
              <ServicioCard
                key={id}
                nombre={nombre}
                descripcion={descripcion}
                texto={texto}
                imagen={imagen}
              />
            );
          })}
        </div>
      </Wrapper>
    </ServicioInicioStyle>
  );
};

export default ServicioInicio;
