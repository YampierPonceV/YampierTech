import Menu from "./Menu";
import logo from "../assets/logo.png";
import icon from "../assets/icon-search.svg";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  bottom: unset;
  padding-top: 8px;
  padding-bottom: 8px;
  background: #141c2f;
  color: white;
  z-index: 100;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: unset;
    bottom: 0;
    overflow: hidden;
    padding: 0;
    left: 0;
    width: 100%;

    .container-logo {
      img {
        display: none;
      }
    }
    .name-logo {
      display: none;
    }
    .menu {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  }

  .container-header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .container-logo {
      display: flex;
      gap: 8px;

      img {
        border-radius: 50%;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const header = () => {
  return (
    <Header>
      <Wrapper>
        <div className="container-header">
          <div className="container-logo">
            <img src={logo} alt="YampierTECH" width="50" />
            <p className="name-logo">YampierTech</p>
          </div>
          <div className="menu">
            <Menu></Menu>
          </div>
        </div>
      </Wrapper>
    </Header>
  );
};

export default header;
