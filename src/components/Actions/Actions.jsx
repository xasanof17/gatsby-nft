import React from "react";
import {
  ActionBlock,
  ActionBlockInner,
  ActionBox,
  ActionBoxSpan,
  ActionBoxTitle,
  ActionContent,
  ActionInner,
  ActionText,
  ActionWrapper,
} from "./actionStyle";

const info = [
  { id: 1, number: "17K", text: "Artwork" },
  { id: 2, number: "4.5K", text: "Auctions" },
  { id: 3, number: "23", text: "Artists" },
];

const Actions = () => {
  return (
    <ActionWrapper>
      <div className="container">
        <ActionContent>
          <ActionInner className="row">
            <ActionBlock className="col-12 col-md-6">
              <ActionBlockInner>
                <ActionText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </ActionText>
              </ActionBlockInner>
            </ActionBlock>
            <ActionBlock className="col-12 col-md-6">
              <ActionBlockInner>
                {info.map(({ id, number, text }) => (
                  <ActionBox key={id}>
                    <ActionBoxTitle>{number}</ActionBoxTitle>
                    <ActionBoxSpan>{text}</ActionBoxSpan>
                  </ActionBox>
                ))}
              </ActionBlockInner>
            </ActionBlock>
          </ActionInner>
        </ActionContent>
      </div>
    </ActionWrapper>
  );
};

export default Actions;
