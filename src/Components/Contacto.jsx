import styled from "styled-components";

const ContactoStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  
  }

  .title {
    padding: 0 0 1rem;
    border-bottom: 1px solid #000000;
  }
  .info-contacto {
    color: #6d6c6c;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;

    input,
    label {
      width: 100%;
      outline: none;
    }

    label {
      margin-top: 1rem;
      margin-bottom: 0.3rem;
    }

    textarea {
      margin-bottom: 1rem;
      resize: none;
      height: 7rem;
      outline: none;
    }

    input,
    textarea {
      padding: 0.5rem;
      border: 1px solid #000;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      background: #1f57c0;
      border: none;
      color: #fff;
    }

    input,
    textarea,
    button {
      border-radius: 5px;
    }
  }
`;

const Contacto = () => {
  return (
    <ContactoStyle>
      <h1 className="title">Contacto</h1>
      <p className="info-contacto">
        Deseas adquirir algun producto o contratar algun servicio dejame un
        mensaje y me contactare contigo
      </p>
      <form>
        <label>Nombre</label>
        <input type="text" placeholder="Yampier" />
        <label>Email</label>
        <input type="email" placeholder="tucorreo@gmail.com" />
        <label>Mensaje</label>
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar</button>
      </form>
      <hr />
    </ContactoStyle>
  );
};

export default Contacto;
