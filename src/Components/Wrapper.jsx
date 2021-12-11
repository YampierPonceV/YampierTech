import styled from "styled-components";

const WrapperStyle = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const Wrapper = ({ children }) => {
  return <WrapperStyle>{children}</WrapperStyle>;
};

export default Wrapper;
