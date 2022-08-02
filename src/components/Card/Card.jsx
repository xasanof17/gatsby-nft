import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 470px;
  width: 100%;
  height: 400px;
  margin: 32px;
  display: inline-block;
`;

const CardImg = styled.img`
  width: 470px;
  height: 400px;
`;

const Card = ({ imgSrc, altText }) => {
  return (
    <CardWrapper>
      <CardImg src={imgSrc} alt={altText} />
    </CardWrapper>
  );
};

export default Card;
