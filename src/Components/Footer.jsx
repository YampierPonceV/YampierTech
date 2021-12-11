import styled from "styled-components";
import Wrapper from "./Wrapper";

const FooterStyle = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #09090e;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Wrapper>
        <p>
          copyright &copy; {new Date().getFullYear()} | Todos los derechos
          reservados por{" "}
          <a
            href="https://yampiertech.vercel.app
"
          >
            YampierTech
          </a>
        </p>
      </Wrapper>
    </FooterStyle>
  );
};

export default Footer;
