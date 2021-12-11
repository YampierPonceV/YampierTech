import styled from "styled-components";

const ButonStyle = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #00a8ff;
  padding: 10px;
  border-radius: 5px;
  width: max-content;
`;

const Button = ({ texto, link }) => {
  return <ButonStyle href={link}>{texto}</ButonStyle>;
};

export default Button;
