import { Link } from "react-router-dom";
import styled from "styled-components";
import home from "../assets/icon-menu/home.svg";
import product from "../assets/icon-menu/product.svg";
import services from "../assets/icon-menu/services.svg";
import about from "../assets/icon-menu/about.svg";
import contact from "../assets/icon-menu/contact.svg";
const Listas = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;

  li {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: none;
        @media screen and (max-width: 500px) {
          display: block;
          padding: 10px;
        }
      }
      span {
        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }
`;

const menu = () => {
  return (
    <Listas>
      <li>
        <Link to="/">
          <img src={home} alt="icono inicio" />
          <span>Inicio</span>
        </Link>
      </li>
      <li>
        <Link to="/producto">
          <img src={product} alt="icono productos" />
          <span>Productos</span>
        </Link>
      </li>
      <li>
        <Link to={"/servicio"}>
          <img src={services} alt="icono servicios" />
          <span>Servicios</span>
        </Link>
      </li>
      <li>
        <Link to={"/nosotros"}>
          <img src={about} alt="icono nostros" />
          <span>Nosotros</span>
        </Link>
      </li>
      <li>
        <Link to={"/contacto"}>
          <img src={contact} alt="icono contacto" />
          <span>Contacto</span>
        </Link>
      </li>
    </Listas>
  );
};

export default menu;
