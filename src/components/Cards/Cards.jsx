import React from "react";
import styled from "styled-components";
import { images } from "../../constants";
import Card from "../Card/Card";

const CardsWrapper = styled.section`
  overflow-x: scroll;
  padding: 0 20px;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
`;
const CardsWrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cards = () => {
  return (
    <>
      <CardsWrapper>
        <CardsWrapperContent>
          <Card imgSrc={images.card1} altText="card-img" />
          <Card imgSrc={images.card2} altText="card-img" />
          <Card imgSrc={images.card3} altText="card-img" />
          <Card imgSrc={images.card4} altText="card-img" />
          <Card imgSrc={images.card5} altText="card-img" />
          <Card imgSrc={images.card6} altText="card-img" />
        </CardsWrapperContent>
      </CardsWrapper>
    </>
  );
};

export default Cards;
