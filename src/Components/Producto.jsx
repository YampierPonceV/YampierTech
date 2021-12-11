import styled from "styled-components";
import { ProductoInfo } from "../data/producto";
import ProductoCard from "./ProductoCard";

const ProductoStyle = styled.div`
  padding: 2rem 0;
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
    </ProductoStyle>
  );
};

export default Producto;
