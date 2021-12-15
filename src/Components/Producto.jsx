import styled from "styled-components";
import { ProductoInfo } from "../data/producto";
import ProductoCard from "./ProductoCard";

const ProductoStyle = styled.div`
  padding: 2rem 0;
  /* display: flex; */
  /* flex-direction: column; */

  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 150px;
    
  }

  a {
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: max-content;
    background: #265ed6;
    margin-top: 2rem;
    text-decoration: none;
    color: #fff;
    border-radius: 5px;
    position: relative;
    z-index: 15;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  
  }
  .container-cards {
    display: grid;
    margin-top: 2rem;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const Producto = () => {
  return (
    <ProductoStyle>
      <h2>Productos destacados</h2>
      <hr />
      <div className="container-cards">
        {ProductoInfo.map(
          ({
            id,
            nombre,
            descripcion,
            precio,
            imagen,
            categoria,
            stock,
            estado,
          }) => {
            return (
              <ProductoCard
                key={id}
                nombre={nombre}
                descripcion={descripcion}
                precio={precio}
                imagen={imagen}
                categoria={categoria}
                stock={stock}
                estado={estado}
              />
            );
          }
        )}
      </div>
      <a href="/productos">VER CATALOGO</a>
    </ProductoStyle>
  );
};

export default Producto;
