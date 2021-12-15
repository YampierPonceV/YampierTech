import styled from "styled-components";

const ServicioCardStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #301777;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  overflow: hidden;

  figure {
    margin: 0;
    
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    figure {
      order: 1;
    }

    .container-detaills {
      text-align: center;
      order: 2;
    }

    button {
      width: 100%;
    }
  }
  
  }

  button {
    background: #2b89c7;
    border: none;
    color: #fff;
    padding: 10px;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.9);
  }
`;

const ServicioCard = ({ nombre, descripcion, texto, imagen }) => {
  return (
    <ServicioCardStyle>
      <div className="container-detaills">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <button>{texto}</button>
      </div>
      <figure>
        <img src={imagen} alt={nombre} />
      </figure>
    </ServicioCardStyle>
  );
};

export default ServicioCard;
