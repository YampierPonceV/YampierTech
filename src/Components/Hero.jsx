import styled from "styled-components";
import Button from "./Button";
import Imagen1 from "../assets/img/1.jpg";
import Imagen2 from "../assets/img/2.jpg";

const Hero = styled.div`
  margin-top: 69px;
  width: 100%;
  background: #141c2f;

  @media screen and (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 100px;
  }

  .wrapper-hero {
    max-width: 1000px;
    margin: auto;
    padding: 70px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 400px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      padding: 16px;
      grid-gap: 20px;
    }

    .text {
      h2 {
        max-width: 500px;
        font-size: 40px;
        color: #6daadd;

        @media screen and (max-width: 400px) {
          font-size: 30px;
        }
      }
      .buttons {
        display: flex;
        gap: 10px;

        @media screen and (max-width: 400px) {
          flex-direction: column;
        }
      }
    }

    .img {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      order: 1;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }
      img:nth-child(2) {
        opacity: 0;
        animation: cambiar 5s ease-in-out infinite alternate;
      }

      @keyframes cambiar {
        to {
          opacity: 1;
        }
      }
    }
  }
`;

const hero = () => {
  return (
    <Hero>
      <div className="wrapper-hero">
        <div className="text">
          <h2>
            Venta de equipos electronicos y servicios tecnicos informaticos
          </h2>
          <div className="buttons">
            <Button texto="PRODUCTOS" link="#" tipos="1"></Button>
            <Button texto="SERVICIOS" link="#"></Button>
          </div>
        </div>
        <div className="img">
          <img src={Imagen1} alt="Reparacion de ordenadores" />
          <img src={Imagen2} alt="Reparacion de ordenadores" />
        </div>
      </div>
    </Hero>
  );
};

export default hero;
