import styled from "styled-components";

const ProductoCardStyle = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
    padding: 1rem;
  }
  .detaills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center;
    gap: 0.5rem;
    grid-template-areas: "nombre nombre nombre" "descripcion descripcion descripcion" "precio vacio stock";

    padding: 1rem;
    h2,
    p {
      margin: 0;
    }

    .nombre {
      grid-area: nombre;
      color: #414040;
    }
    .descripcion {
      grid-area: descripcion;
      color: #777;
      text-align: center;
    }
    .precio {
      grid-area: precio;
      font-weight: bold;
      color: #777;
    }
    .stock {
      grid-area: stock;
      color: #31ce3e;
      font-weight: bold;
    }
  }
`;

const ProductoCard = ({
  nombre,
  descripcion,
  precio,
  imagen,
  categoria,
  stock,
  estado,
}) => {
  return (
    <ProductoCardStyle>
      <img src={imagen} alt={nombre} />
      <div className="detaills">
        <h2 className="nombre">{nombre}</h2>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">{precio}</p>
        <p className="stock">Stock: {stock}</p>
        {/* <p>{categoria}</p> */}
        {/* <p>{estado}</p> */}
      </div>
    </ProductoCardStyle>
  );
};

export default ProductoCard;
