import Menu from "./Menu";
import logo from "../assets/logo.png";
import icon from "../assets/icon-search.svg";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: unset;
  padding: 8px;
  display: flex;
  justify-content: center;
  background: #141c2f;
  color: white;
  z-index: 100;
  @media screen and (max-width: 600px) {
    top: unset;
    bottom: 0;
    overflow: hidden;
    height: fit-content;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 350px) {
    .menu {
      overflow: scroll hidden;
    }
  }

  .logo {
    display: flex;
    gap: 10px;
    img {
      border-radius: 50%;
    }
    p {
      font-weight: bold;

      @media screen and (max-width: 550px) {
        display: none;
      }
    }
  }
  .input-search {
    position: relative;
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 8px;
    }
    input {
      width: 300px;
      padding: 8px 25px;
      border-radius: 4px;
      outline: none;
      border: 2px solid transparent;
      color: #141c2f;
    }
    input:focus {
      border-color: #2a59c0;
      color: #2a59c0;
    }

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

const header = () => {
  return (
    <Header>
      <Wrapper className="wrapper">
        <div className="logo">
          <img src={logo} alt="YampierTECH" width="50" />
          <p>YampierTech</p>
        </div>
        <div className="input-search">
          <img src={icon} alt="icono de buscar" />
          <input
            type="search"
            name="buscador"
            id="buscador"
            placeholder="Buscar"
          />
        </div>
        <div className="menu">
          <Menu></Menu>
        </div>
      </Wrapper>
    </Header>
  );
};

export default header;
