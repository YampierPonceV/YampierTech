import styled from "styled-components";

const Buton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 8px 18px;
  font-weight: bold;
  background: #2776ed;
  border: none;
  border-radius: 4px;
  color: white;
  transition: 0.3s linear all;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

const ButonSegundary = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 8px 18px;
  font-weight: bold;
  background: transparent;
  border: 2px solid #2776ed;
  border-radius: 4px;
  color: white;
  transition: 0.3s linear all;
  &:hover {
    background: #2776ed;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

const button = ({ texto, link, tipos }) => {
  return (
    <>
      {tipos === "1" ? (
        <Buton href={link}>{texto}</Buton>
      ) : (
        <ButonSegundary href={link}>{texto}</ButonSegundary>
      )}
    </>
  );
};

export default button;
