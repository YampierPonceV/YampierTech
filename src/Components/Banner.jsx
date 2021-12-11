import styled from "styled-components";
import Button from "./Button";

const BannerStyle = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #251580;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  overflow: hidden;
  color: #ddd6d6;
  padding: 0 55px;

  figure {
    margin: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .detaills {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Banner = ({ clase, title, description, image }) => {
  return (
    <BannerStyle className={clase}>
      <div className="detaills">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button texto="REALIZAR PEDIDO" link="mailto:correo@gmail.com" />
      </div>
      <figure>
        <img src={image} alt={title} />
      </figure>
    </BannerStyle>
  );
};

export default Banner;
