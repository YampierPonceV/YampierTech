import styled from "styled-components";
import Wrapper from "./Wrapper";
import Banner from "./Banner";
import { BannerCard } from "../data/banner.js";
import Preview from "../Icons/previus";
import Next from "../Icons/next";

const Hero = styled.div`
  height: 600px;
  /* border: 1px solid red; */
  position: relative;
  /* padding: 0 55px; */

  @media screen and (max-width: 768px) {
    height: 700px;
  }
`;

const ContainerHero = styled.div`
  width: 100%;
  background-color: #251580;

  button {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    transform: translateY(-50%);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #cab3b3;
  }

  button:active {
    transform: translateY(-50%) scale(0.9);
  }

  button.next {
    right: 0;
  }
  button.previw {
    left: 0;
  }
`;

const hero = () => {
  return (
    <ContainerHero>
      <Wrapper>
        <Hero>
          {BannerCard.map(({ id, clase, title, description, image }) => {
            return (
              <Banner
                key={id}
                clase={clase}
                title={title}
                description={description}
                image={image}
              ></Banner>
            );
          })}
          {/* <button className="previw" onClick={handlePreview}>
            <Preview />
          </button>
          <button className="next">
            <Next />
          </button> */}
        </Hero>
      </Wrapper>
    </ContainerHero>
  );
};

export default hero;
